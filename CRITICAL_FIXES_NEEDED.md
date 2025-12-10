# 🚨 CRITICAL FIXES NEEDED

## 1. PredictStox - Live Prices Not Working

### **Problem:**
- RELIANCE shows ₹2457 but actual price is ₹1540
- CORS proxy not fetching real prices
- Fallback prices being used instead of live data

### **Root Cause:**
The CORS proxy (`api.allorigins.win`) may be:
1. Rate limited
2. Blocked by Yahoo Finance
3. Not working reliably

### **SOLUTION - Use Backend Proxy:**

Create a simple Python Flask backend:

```python
# stock_api.py
from flask import Flask, jsonify
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)

@app.route('/api/stock/<symbol>')
def get_stock(symbol):
    try:
        # Handle Indian stocks
        if symbol in ['RELIANCE', 'TCS', 'INFY', 'HDFCBANK']:
            symbol = symbol + '.NS'  # Add .NS for NSE India
        
        stock = yf.Ticker(symbol)
        info = stock.info
        
        price = info.get('regularMarketPrice') or info.get('currentPrice')
        currency = info.get('currency', 'USD')
        
        return jsonify({
            'symbol': symbol,
            'price': price,
            'currency': currency,
            'name': info.get('longName', symbol)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

**Install requirements:**
```bash
pip install flask flask-cors yfinance
```

**Run the backend:**
```bash
python stock_api.py
```

**Update JavaScript in predictstox-demo/index.html:**
```javascript
async function fetchRealTimePrice(symbol) {
    try {
        // Use local backend
        const response = await fetch(`http://localhost:5000/api/stock/${symbol}`);
        const data = await response.json();
        
        if (data.price && !isNaN(data.price)) {
            console.log(`✅ LIVE PRICE: ${symbol} = ${data.currency} ${data.price}`);
            return data.price;
        }
    } catch (error) {
        console.error('Failed to fetch price:', error);
    }
    return globalStockData[symbol]?.price || null;
}
```

---

## 2. Mental Health Chatbot - Repetitive & No Solutions

### **Problem:**
- Bot repeats same responses
- Doesn't provide actual solutions
- Not engaging in meaningful conversation

### **SOLUTION - Add Real AI API:**

Use Hugging Face Inference API (FREE):

```javascript
// Add this to mental-health-chatbot-demo/index.html

const HF_API_KEY = 'hf_demo'; // Get free key from huggingface.co

async function getAIResponse(userMessage) {
    try {
        const response = await fetch(
            'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${HF_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    inputs: userMessage,
                    parameters: {
                        max_length: 200,
                        temperature: 0.9
                    }
                })
            }
        );
        
        const data = await response.json();
        return data[0]?.generated_text || getContextualResponse('general', userMessage);
    } catch (error) {
        console.error('AI API error:', error);
        return getContextualResponse('general', userMessage);
    }
}

// Update sendMessage function to use AI
async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (!message || isProcessing) return;
    
    isProcessing = true;
    addMessage(message, 'user');
    input.value = '';
    showTypingIndicator();
    
    // Check for crisis first
    const intent = detectIntent(message);
    if (intent === 'crisis') {
        const response = getContextualResponse('crisis', message);
        hideTypingIndicator();
        addMessage(response, 'bot');
    } else {
        // Use AI for better responses
        const response = await getAIResponse(message);
        hideTypingIndicator();
        addMessage(response, 'bot');
    }
    
    isProcessing = false;
}
```

**Better Alternative - Use GPT-3.5 (OpenAI):**

Sign up for free API key at openai.com (free tier available)

```javascript
async function getAIResponse(userMessage) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a compassionate mental health support chatbot. Provide empathetic, helpful responses with practical coping strategies.'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                max_tokens: 150,
                temperature: 0.8
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        return getContextualResponse('general', userMessage);
    }
}
```

---

## 3. ResQMap - Straight Line Routing

### **Problem:**
- Shows straight line between points
- Doesn't follow roads
- Not like Google Maps/Uber

### **SOLUTION - Use Leaflet Routing Machine:**

Update resqmap-demo/index.html:

```html
<!-- Add these libraries -->
<link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
```

```javascript
// Replace the straight line routing with this:

function showDirections(destination) {
    // Remove old routing if exists
    if (window.routingControl) {
        map.removeControl(window.routingControl);
    }
    
    // Add routing that follows roads
    window.routingControl = L.Routing.control({
        waypoints: [
            L.latLng(userLocation.lat, userLocation.lng),
            L.latLng(destination.lat, destination.lng)
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1'
        }),
        lineOptions: {
            styles: [{
                color: '#4CAF50',
                opacity: 0.8,
                weight: 6
            }]
        },
        show: true,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false
    }).addTo(map);
    
    // Get route instructions
    window.routingControl.on('routesfound', function(e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        
        // Display distance and time
        const distance = (summary.totalDistance / 1000).toFixed(2);
        const time = Math.round(summary.totalTime / 60);
        
        console.log(`Route: ${distance} km, ${time} minutes`);
        
        // Update UI with route info
        document.getElementById('routeInfo').innerHTML = `
            <strong>Distance:</strong> ${distance} km<br>
            <strong>Time:</strong> ${time} minutes
        `;
    });
}
```

---

## 🚀 IMMEDIATE ACTIONS NEEDED:

### For PredictStox:
1. Install Python: `pip install flask flask-cors yfinance`
2. Create `stock_api.py` with the code above
3. Run: `python stock_api.py`
4. Update JavaScript to use `http://localhost:5000/api/stock/`

### For Mental Health Chatbot:
1. Sign up at huggingface.co for free API key
2. OR sign up at openai.com for GPT-3.5 access
3. Add the AI response function
4. Update sendMessage to use AI

### For ResQMap:
1. Add Leaflet Routing Machine library
2. Replace straight line code with routing control
3. Use OSRM routing service (free)

---

## 📝 NOTES:

**Why These Issues Exist:**
1. **CORS restrictions** - Browser blocks direct API calls
2. **No backend** - Pure frontend can't bypass security
3. **Limited free APIs** - Need proper API keys for production

**Production Solutions:**
- Deploy Flask backend on Heroku/Railway (free)
- Use paid APIs for reliability
- Implement proper error handling

**For Portfolio Demo:**
- Backend is REQUIRED for real live data
- Can't bypass CORS without backend
- Free tiers available for all services

---

## ⚠️ IMPORTANT:

These fixes REQUIRE a backend server. Pure frontend JavaScript CANNOT:
- Fetch real-time stock prices (CORS blocked)
- Generate intelligent AI responses (needs API keys)
- Calculate road routing (needs routing engine)

**You need to either:**
1. Run local backend (Python Flask)
2. Deploy backend to cloud (Heroku/Railway)
3. Use paid API services with proper keys

The current implementations are limited by browser security and free tier restrictions.
