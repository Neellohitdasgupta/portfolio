"""
Stock Price API Backend
Fetches real-time stock prices using yfinance
Bypasses CORS restrictions
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import yfinance as yf
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Indian stock symbols mapping
INDIAN_STOCKS = {
    'RELIANCE': 'RELIANCE.NS',
    'TCS': 'TCS.NS',
    'INFY': 'INFY.NS',
    'HDFCBANK': 'HDFCBANK.NS',
    'WIPRO': 'WIPRO.NS',
    'BHARTIARTL': 'BHARTIARTL.NS',
    'ITC': 'ITC.NS',
    'SBIN': 'SBIN.NS',
    'TATAMOTORS': 'TATAMOTORS.NS',
    'ADANIENT': 'ADANIENT.NS'
}

@app.route('/api/stock/<symbol>', methods=['GET'])
def get_stock_price(symbol):
    """Get real-time stock price for a symbol"""
    try:
        # Handle Indian stocks
        if symbol in INDIAN_STOCKS:
            yf_symbol = INDIAN_STOCKS[symbol]
        else:
            yf_symbol = symbol
        
        # Fetch stock data
        stock = yf.Ticker(yf_symbol)
        info = stock.info
        
        # Get current price
        price = (
            info.get('regularMarketPrice') or 
            info.get('currentPrice') or 
            info.get('previousClose')
        )
        
        if not price:
            return jsonify({'error': 'Price not available'}), 404
        
        # Get currency
        currency = info.get('currency', 'USD')
        
        # Get company name
        name = info.get('longName') or info.get('shortName') or symbol
        
        return jsonify({
            'symbol': symbol,
            'price': float(price),
            'currency': currency,
            'name': name,
            'timestamp': datetime.now().isoformat(),
            'market': info.get('market', 'Unknown')
        })
        
    except Exception as e:
        return jsonify({
            'error': str(e),
            'symbol': symbol
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'Stock Price API',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/', methods=['GET'])
def home():
    """Home endpoint with API info"""
    return jsonify({
        'service': 'Stock Price API',
        'version': '1.0',
        'endpoints': {
            '/api/stock/<symbol>': 'Get stock price',
            '/api/health': 'Health check'
        },
        'examples': {
            'US Stock': '/api/stock/AAPL',
            'Indian Stock': '/api/stock/RELIANCE'
        }
    })

if __name__ == '__main__':
    print("🚀 Starting Stock Price API...")
    print("📊 Server running on http://localhost:5000")
    print("✅ CORS enabled for all origins")
    print("\nExample usage:")
    print("  http://localhost:5000/api/stock/AAPL")
    print("  http://localhost:5000/api/stock/RELIANCE")
    app.run(host='0.0.0.0', port=5000, debug=True)
