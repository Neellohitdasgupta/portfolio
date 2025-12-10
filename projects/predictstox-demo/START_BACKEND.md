# 🚀 Start Stock Price Backend

## Quick Start (3 Steps):

### Step 1: Install Dependencies
```bash
cd portfolio/projects/predictstox-demo
pip install -r requirements.txt
```

### Step 2: Start Backend Server
```bash
python stock_api.py
```

You should see:
```
🚀 Starting Stock Price API...
📊 Server running on http://localhost:5000
✅ CORS enabled for all origins
```

### Step 3: Open PredictStox Demo
Open `index.html` in your browser - it will now fetch REAL live prices!

## Testing the API:

Open these URLs in your browser:
- http://localhost:5000/api/stock/AAPL (Apple - USD)
- http://localhost:5000/api/stock/RELIANCE (Reliance - INR)
- http://localhost:5000/api/stock/TSLA (Tesla - USD)

## What You'll See:

```json
{
  "symbol": "RELIANCE",
  "price": 1540.50,
  "currency": "INR",
  "name": "Reliance Industries Limited",
  "timestamp": "2024-11-25T15:45:00",
  "market": "NSE"
}
```

## Troubleshooting:

**Error: "No module named 'flask'"**
```bash
pip install flask flask-cors yfinance
```

**Error: "Port 5000 already in use"**
Change port in `stock_api.py`:
```python
app.run(host='0.0.0.0', port=5001, debug=True)
```

Then update frontend to use port 5001.

## Keep Backend Running:

The backend must be running while using PredictStox demo.
- Keep the terminal window open
- Press Ctrl+C to stop the server

## Production Deployment:

To deploy for production (free):
1. Create account on Railway.app or Render.com
2. Connect your GitHub repo
3. Deploy the `stock_api.py` file
4. Update frontend URL to deployed backend

**Now your PredictStox will show REAL LIVE PRICES! 🎉**
