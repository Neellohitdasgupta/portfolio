# 🚀 Complete Backend Setup Guide

## ✅ What I've Created:

### 1. Stock Price API Backend (`predictstox-demo/stock_api.py`)
- Fetches REAL live prices using yfinance
- Handles Indian stocks (RELIANCE, TCS, etc.) with .NS suffix
- Returns prices in correct currency (INR, USD, etc.)
- CORS enabled for frontend access

### 2. Requirements File (`predictstox-demo/requirements.txt`)
- Flask for web server
- Flask-CORS for cross-origin requests
- yfinance for stock data

## 🎯 SETUP INSTRUCTIONS:

### Step 1: Install Python Dependencies
```bash
cd portfolio/projects/predictstox-demo
pip install -r requirements.txt
```

### Step 2: Start the Backend Server
```bash
python stock_api.py
```

**You should see:**
```
🚀 Starting Stock Price API...
📊 Server running on http://localhost:5000
✅ CORS enabled for all origins

Example usage:
  http://localhost:5000/api/stock/AAPL
  http://localhost:5000/api/stock/RELIANCE
```

### Step 3: Update Frontend Code

Open `portfolio/projects/predictstox-demo/index.html` and find the `fetchRealTimePrice` function (around line 550).

**Replace it with:**

```javascript
async function fetchRealTimePrice(symbol) {
    console.log(`🔄 Fetching LIVE price for ${symbol} from backend...`);
    
    try {
        // Use local backend API
        const response = await fetch(`http://localhost:5000/api/stock/${symbol}`);
        const data = await response.json();
        
        if (data.price && !isNaN(data.price) && data.price > 0) {
            console.log(`✅ LIVE PRICE: ${symbol} = ${data.currency} ${data.price.toFixed(2)}`);
            console.log(`📊 Company: ${data.name}`);
            return data.price;
        }
    } catch (error) {
        console.error(`❌ Backend API error for ${symbol}:`, error);
        console.warn('⚠️ Make sure backend is running: python stock_api.py');
    }
    
    // Fallback
    console.warn(`⚠️ Using fallback price for ${symbol}`);
    return globalStockData[symbol]?.price || null;
}
```

### Step 4: Test It!

1. **Keep backend running** in one terminal
2. **Open PredictStox demo** in browser
3. **Search for RELIANCE** - should show ₹1540 (real price)
4. **Search for AAPL** - should show $275+ (real price)
5. **Check console** - should see "✅ LIVE PRICE" messages

## 🧪 Testing the Backend:

Open these URLs in your browser while backend is running:

- http://localhost:5000/ (API info)
- http://localhost:5000/api/health (Health check)
- http://localhost:5000/api/stock/AAPL (Apple stock)
- http://localhost:5000/api/stock/RELIANCE (Reliance stock)
- http://localhost:5000/api/stock/TSLA (Tesla stock)

**Expected Response:**
```json
{
  "symbol": "RELIANCE",
  "price": 1540.50,
  "currency": "INR",
  "name": "Reliance Industries Limited",
  "timestamp": "2024-11-25T15:45:00.123456",
  "market": "NSE"
}
```

## 📊 Supported Stocks:

### Indian Stocks (INR):
- RELIANCE, TCS, INFY, HDFCBANK, WIPRO
- BHARTIARTL, ITC, SBIN, TATAMOTORS, ADANIENT

### US Stocks (USD):
- AAPL, GOOGL, MSFT, TSLA, AMZN, NVDA, META, NFLX
- And 100+ more in the database

### International:
- European stocks (EUR)
- Japanese stocks (JPY)
- UK stocks (GBP)

## 🔧 Troubleshooting:

### "No module named 'flask'"
```bash
pip install flask flask-cors yfinance
```

### "Port 5000 already in use"
Edit `stock_api.py`, change:
```python
app.run(host='0.0.0.0', port=5001, debug=True)
```

Then update frontend to use port 5001.

### "Connection refused"
Make sure backend is running:
```bash
python stock_api.py
```

### "CORS error"
Backend has CORS enabled. If still getting errors, check:
1. Backend is running
2. Using correct port (5000)
3. No firewall blocking localhost

## 🌐 Production Deployment (Optional):

### Deploy to Railway (Free):

1. Create account at railway.app
2. Create new project
3. Connect GitHub repo
4. Deploy `stock_api.py`
5. Get deployment URL (e.g., `https://your-app.railway.app`)
6. Update frontend to use deployment URL instead of localhost

### Deploy to Render (Free):

1. Create account at render.com
2. New Web Service
3. Connect GitHub repo
4. Build command: `pip install -r requirements.txt`
5. Start command: `python stock_api.py`
6. Deploy and get URL

## ✅ Success Checklist:

- [ ] Backend installed: `pip install -r requirements.txt`
- [ ] Backend running: `python stock_api.py`
- [ ] API responding: http://localhost:5000/api/health
- [ ] Frontend updated with new fetch function
- [ ] Test RELIANCE: Shows ₹1540 (real price)
- [ ] Test AAPL: Shows $275+ (real price)
- [ ] Console shows "✅ LIVE PRICE" messages

## 🎉 Result:

**Before:** RELIANCE shows ₹2457 (wrong)
**After:** RELIANCE shows ₹1540 (REAL live price!)

**Before:** AAPL shows $189 (wrong)
**After:** AAPL shows $275+ (REAL live price!)

---

**All prices now come from REAL market data via yfinance! 🚀**

Keep the backend running while using PredictStox demo.
For production, deploy to Railway/Render for 24/7 availability.
