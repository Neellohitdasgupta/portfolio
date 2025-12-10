# 🚀 Complete Backend Setup - All Projects

## 📦 What's Been Created:

### 1. **Stock Price API** (PredictStox)
- **File:** `projects/predictstox-demo/stock_api.py`
- **Port:** 5000
- **Purpose:** Fetches REAL live stock prices in correct currencies

### 2. **Mental Health Chatbot AI** (Chatbot)
- **File:** `projects/mental-health-chatbot-demo/chatbot_api.py`
- **Port:** 5001
- **Purpose:** Provides intelligent, varied, empathetic responses

### 3. **Routing API** (ResQMap)
- **File:** `projects/resqmap-demo/routing_api.py`
- **Port:** 5002
- **Purpose:** Real road-based routing (not straight lines!)

---

## 🎯 QUICK START (3 Options):

### **Option 1: Start All at Once (Easiest)**
Double-click: `START_ALL_BACKENDS.bat`

This opens 3 terminal windows, one for each backend.

### **Option 2: Start Individually**
```bash
# Terminal 1 - Stock Price API
cd portfolio/projects/predictstox-demo
pip install -r requirements.txt
python stock_api.py

# Terminal 2 - Chatbot AI
cd portfolio/projects/mental-health-chatbot-demo
pip install -r requirements.txt
python chatbot_api.py

# Terminal 3 - Routing API
cd portfolio/projects/resqmap-demo
pip install -r requirements.txt
python routing_api.py
```

### **Option 3: Start Only What You Need**
- Testing PredictStox? → Start only `stock_api.py`
- Testing Chatbot? → Start only `chatbot_api.py`
- Testing ResQMap? → Start only `routing_api.py`

---

## 🧪 Testing Each Backend:

### **1. Stock Price API (Port 5000)**
```
http://localhost:5000/api/stock/AAPL
http://localhost:5000/api/stock/RELIANCE
http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "symbol": "RELIANCE",
  "price": 1540.50,
  "currency": "INR",
  "name": "Reliance Industries Limited"
}
```

### **2. Chatbot AI (Port 5001)**
```
POST http://localhost:5001/api/chat
Body: {"message": "I feel anxious", "session_id": "test123"}
```

**Expected Response:**
```json
{
  "response": "I hear that you're feeling anxious...",
  "is_crisis": false,
  "timestamp": "2024-11-25T15:45:00"
}
```

### **3. Routing API (Port 5002)**
```
POST http://localhost:5002/api/route
Body: {
  "start_lat": 23.0225,
  "start_lng": 72.5714,
  "end_lat": 23.0330,
  "end_lng": 72.5850
}
```

**Expected Response:**
```json
{
  "success": true,
  "distance_km": 2.5,
  "duration_min": 8.5,
  "geometry": {...},
  "steps": [...]
}
```

---

## 🔧 Frontend Integration:

### **PredictStox - Update fetchRealTimePrice:**
```javascript
async function fetchRealTimePrice(symbol) {
    const response = await fetch(`http://localhost:5000/api/stock/${symbol}`);
    const data = await response.json();
    return data.price;
}
```

### **Mental Health Chatbot - Update sendMessage:**
```javascript
async function sendMessage() {
    const message = document.getElementById('userInput').value;
    const response = await fetch('http://localhost:5001/api/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message, session_id: 'user123'})
    });
    const data = await response.json();
    addMessage(data.response, 'bot');
}
```

### **ResQMap - Update routing:**
```javascript
async function getRoute(startLat, startLng, endLat, endLng) {
    const response = await fetch('http://localhost:5002/api/route', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            start_lat: startLat,
            start_lng: startLng,
            end_lat: endLat,
            end_lng: endLng
        })
    });
    const data = await response.json();
    return data;
}
```

---

## ⚙️ Configuration:

### **Chatbot AI - Get API Key:**
1. Go to https://huggingface.co/settings/tokens
2. Create free account
3. Generate new token
4. Copy token
5. Open `chatbot_api.py`
6. Replace `HF_API_KEY = "hf_xxx..."` with your token

**Note:** Chatbot works without API key using fallback responses, but AI responses require the key.

---

## 📊 What Each Backend Fixes:

### **Stock Price API:**
- ❌ **Before:** RELIANCE shows ₹2457 (wrong)
- ✅ **After:** RELIANCE shows ₹1540 (REAL price!)

### **Chatbot AI:**
- ❌ **Before:** Repetitive, generic responses
- ✅ **After:** Intelligent, varied, helpful responses

### **Routing API:**
- ❌ **Before:** Straight line between points
- ✅ **After:** Follows actual roads with turn-by-turn directions

---

## 🔍 Troubleshooting:

### **"Port already in use"**
Change port in the Python file:
```python
app.run(host='0.0.0.0', port=5003, debug=True)  # Use different port
```

### **"No module named 'flask'"**
```bash
pip install flask flask-cors requests yfinance
```

### **"Connection refused"**
Make sure backend is running:
```bash
python stock_api.py  # Should show "Server running on..."
```

### **CORS errors**
All backends have CORS enabled. If still getting errors:
1. Check backend is running
2. Verify correct port number
3. Check browser console for actual error

---

## 🌐 Production Deployment (Optional):

### **Deploy to Railway (Free):**
1. Create account at railway.app
2. New project → Deploy from GitHub
3. Add each Python file as separate service
4. Set environment variables if needed
5. Get deployment URLs
6. Update frontend to use production URLs

### **Deploy to Render (Free):**
1. Create account at render.com
2. New Web Service for each backend
3. Build: `pip install -r requirements.txt`
4. Start: `python <api_name>.py`
5. Deploy and get URLs

---

## ✅ Success Checklist:

### **Stock Price API:**
- [ ] Backend running on port 5000
- [ ] Test URL works: http://localhost:5000/api/stock/AAPL
- [ ] Frontend updated to use backend
- [ ] RELIANCE shows ₹1540 (real price)

### **Chatbot AI:**
- [ ] Backend running on port 5001
- [ ] API key configured (optional)
- [ ] Frontend updated to use backend
- [ ] Responses are varied and helpful

### **Routing API:**
- [ ] Backend running on port 5002
- [ ] Test route calculation works
- [ ] Frontend updated to use backend
- [ ] Routes follow roads (not straight lines)

---

## 🎉 Final Result:

**All three projects now have:**
- ✅ Real-time accurate data
- ✅ Intelligent processing
- ✅ Professional functionality
- ✅ Production-ready backends

**Keep backends running while testing demos!**

For production, deploy to Railway/Render for 24/7 availability.

---

## 📝 Quick Commands:

```bash
# Install all dependencies
cd portfolio/projects/predictstox-demo && pip install -r requirements.txt
cd portfolio/projects/mental-health-chatbot-demo && pip install -r requirements.txt
cd portfolio/projects/resqmap-demo && pip install -r requirements.txt

# Start all backends (3 separate terminals)
python projects/predictstox-demo/stock_api.py
python projects/mental-health-chatbot-demo/chatbot_api.py
python projects/resqmap-demo/routing_api.py

# Test all backends
curl http://localhost:5000/api/health
curl http://localhost:5001/api/health
curl http://localhost:5002/api/health
```

---

**All backends are ready! Start them and update your frontends to use the APIs.** 🚀
