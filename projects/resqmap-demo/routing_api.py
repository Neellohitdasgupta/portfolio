"""
ResQMap Routing API Backend
Provides real road-based routing using OSRM (Open Source Routing Machine)
Returns turn-by-turn directions that follow actual roads
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from datetime import datetime

app = Flask(__name__)
CORS(app)

# OSRM API endpoint (free, open source)
OSRM_API = "http://router.project-osrm.org/route/v1/driving"

@app.route('/api/route', methods=['POST'])
def get_route():
    """Get road-based route between two points"""
    try:
        data = request.json
        
        # Get coordinates
        start_lat = data.get('start_lat')
        start_lng = data.get('start_lng')
        end_lat = data.get('end_lat')
        end_lng = data.get('end_lng')
        
        if not all([start_lat, start_lng, end_lat, end_lng]):
            return jsonify({'error': 'Missing coordinates'}), 400
        
        # Call OSRM API for routing
        url = f"{OSRM_API}/{start_lng},{start_lat};{end_lng},{end_lat}"
        params = {
            'overview': 'full',
            'geometries': 'geojson',
            'steps': 'true',
            'annotations': 'true'
        }
        
        response = requests.get(url, params=params, timeout=10)
        
        if response.status_code == 200:
            osrm_data = response.json()
            
            if osrm_data.get('code') == 'Ok' and osrm_data.get('routes'):
                route = osrm_data['routes'][0]
                
                # Extract route information
                result = {
                    'success': True,
                    'distance': route['distance'],  # meters
                    'duration': route['duration'],  # seconds
                    'distance_km': round(route['distance'] / 1000, 2),
                    'duration_min': round(route['duration'] / 60, 1),
                    'geometry': route['geometry'],  # GeoJSON LineString
                    'steps': [],
                    'timestamp': datetime.now().isoformat()
                }
                
                # Extract turn-by-turn instructions
                if 'legs' in route and len(route['legs']) > 0:
                    for step in route['legs'][0].get('steps', []):
                        instruction = {
                            'instruction': step.get('maneuver', {}).get('instruction', 'Continue'),
                            'distance': step.get('distance', 0),
                            'duration': step.get('duration', 0),
                            'name': step.get('name', 'Unknown road')
                        }
                        result['steps'].append(instruction)
                
                return jsonify(result)
            else:
                return jsonify({
                    'error': 'No route found',
                    'message': 'Could not find a route between these points'
                }), 404
        else:
            return jsonify({
                'error': 'Routing service error',
                'status_code': response.status_code
            }), 500
            
    except Exception as e:
        return jsonify({
            'error': str(e),
            'message': 'Failed to calculate route'
        }), 500

@app.route('/api/geocode', methods=['GET'])
def geocode():
    """Reverse geocode coordinates to address"""
    try:
        lat = request.args.get('lat')
        lng = request.args.get('lng')
        
        if not lat or not lng:
            return jsonify({'error': 'Missing coordinates'}), 400
        
        # Use Nominatim for reverse geocoding (free)
        url = f"https://nominatim.openstreetmap.org/reverse"
        params = {
            'lat': lat,
            'lon': lng,
            'format': 'json'
        }
        headers = {
            'User-Agent': 'ResQMap/1.0'
        }
        
        response = requests.get(url, params=params, headers=headers, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            return jsonify({
                'address': data.get('display_name', 'Unknown location'),
                'city': data.get('address', {}).get('city', ''),
                'state': data.get('address', {}).get('state', ''),
                'country': data.get('address', {}).get('country', '')
            })
        else:
            return jsonify({'error': 'Geocoding failed'}), 500
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'ResQMap Routing API',
        'routing_engine': 'OSRM',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/', methods=['GET'])
def home():
    """Home endpoint"""
    return jsonify({
        'service': 'ResQMap Routing API',
        'version': '1.0',
        'endpoints': {
            '/api/route': 'POST - Get road-based route',
            '/api/geocode': 'GET - Reverse geocode coordinates',
            '/api/health': 'GET - Health check'
        },
        'features': [
            'Real road-based routing',
            'Turn-by-turn directions',
            'Distance and duration calculation',
            'Reverse geocoding'
        ]
    })

if __name__ == '__main__':
    print("🗺️  Starting ResQMap Routing API...")
    print("📍 Server running on http://localhost:5002")
    print("✅ CORS enabled for all origins")
    print("\nFeatures:")
    print("  ✓ Real road-based routing (not straight lines!)")
    print("  ✓ Turn-by-turn directions")
    print("  ✓ Distance and time calculation")
    print("  ✓ Reverse geocoding\n")
    app.run(host='0.0.0.0', port=5002, debug=True)
