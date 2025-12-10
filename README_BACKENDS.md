# 📚 Backend Setup - Complete Guide

## 🎯 What You Need to Know:

Your portfolio projects now have **3 backend servers** that provide:
1. **Real live stock prices** (not fake data)
2. **Intelligent chatbot responses** (not repetitive)
3. **Real road routing** (not straight lines)

---

## 🚀 EASIEST WAY TO START:

### Option 1: Double-Click Method
1. Double-click `INSTALL_AND_START.bat`
2. Wait for 3 windows to open
3. Done!

### Option 2: Manual Method
Read `START_HERE.md` for step-by-step commands

---

## 📁 Important Files:

| File | Purpose |
|------|---------|
| `INSTALL_AND_START.bat` | One-click setup (EASIEST) |
| `START_HERE.md` | Simple step-by-step guide |
| `MANUAL_BACKEND_START.md` | Detailed manual instructions |
| `TEST_LOCALHOST.html` | Test if backends are working |
| `TROUBLESHOOTING.md` | Fix common problems |
| `ALL_BACKENDS_GUIDE.md` | Complete technical documentation |

---

## 🧪 How to Test:

1. Start all backends (using one of the methods above)
2. Open `TEST_LOCALHOST.html` in browser
3. Click the 3 test buttons
4. All should show green ✅

---

## 📊 What Each Backend Does:

### Backend 1: Stock Price API (Port 5000)
**File:** `projects/predictstox-demo/stock_api.py`

**What it fixes:**
- ❌ Before: RELIANCE shows ₹2457 (wrong)
- ✅ After: RELIANCE shows ₹1540 (REAL price!)

**Test:** http://localhost:5000/api/stock/RELIANCE

---

### Backend 2: Chatbot AI (Port 5001)
**File:** `projects/mental-health-chatbot-demo/chatbot_api.py`

**What it fixes:**
- ❌ Before: Repetitive, generic responses
- ✅ After: Intelligent, varied, helpful responses

**Test:** http://localhost:5001/api/health

---

### Backend 3: Routing API (Port 5002)
**File:** `projects/resqmap-demo/routing_api.py`

**What it fixes:**
- ❌ Before: Straight line between points
- ✅ After: Follows actual roads with directions

**Test:** http://localhost:5002/api/health

---

## ⚠️ Common Issues:

### "Localhost not opening"
1. Make sure backends are running (check Command Prompt windows)
2. Open `TEST_LOCALHOST.html` to diagnose
3. Read `TROUBLESHOOTING.md`

### "Python not found"
Install Python from https://python.org

### "No module named 'flask'"
Run: `pip install flask flask-cors requests yfinance`

### "Port already in use"
Restart computer or change ports in Python files

---

## 🎓 Understanding the Setup:

### Why 3 backends?
Each project needs different functionality:
- PredictStox needs stock data
- Chatbot needs AI processing
- ResQMap needs routing calculations

### Why keep windows open?
Backends are servers that must run continuously while you use the projects.

### Can I close them?
Yes, but then the projects won't work. Restart them when needed.

---

## 📱 Using Your Projects:

Once backends are running, open these files:

1. **PredictStox:**
   `projects/predictstox-demo/index.html`
   - Search for any stock
   - See REAL live prices
   - Generate predictions

2. **Mental Health Chatbot:**
   `projects/mental-health-chatbot-demo/index.html`
   - Chat with AI
   - Get varied responses
   - No repetition

3. **ResQMap:**
   `projects/resqmap-demo/index.html`
   - Select destination
   - See road-based route
   - Get turn-by-turn directions

---

## 🌐 For Production (Optional):

To deploy backends online (so they run 24/7):

1. Create account on Railway.app or Render.com (free)
2. Deploy each Python file as separate service
3. Update frontend URLs to use deployed URLs
4. No need to keep Command Prompt open anymore

See `ALL_BACKENDS_GUIDE.md` for deployment instructions.

---

## ✅ Quick Checklist:

Before using projects:
- [ ] Python installed
- [ ] Dependencies installed (`pip install...`)
- [ ] 3 Command Prompt windows open
- [ ] Each shows "Server running on..."
- [ ] TEST_LOCALHOST.html shows all green
- [ ] No error messages

---

## 🆘 Need Help?

1. **First:** Open `TEST_LOCALHOST.html` - shows what's wrong
2. **Second:** Read `TROUBLESHOOTING.md` - fixes common issues
3. **Third:** Check Command Prompt windows for error messages
4. **Fourth:** Check browser console (F12) for errors

---

## 📝 Summary:

**To use your portfolio projects:**
1. Start 3 backends (double-click `INSTALL_AND_START.bat`)
2. Test with `TEST_LOCALHOST.html`
3. Open project HTML files
4. Everything works with REAL data!

**Keep backends running while using projects.**
**Press Ctrl+C in each window to stop.**

---

**That's it! Your portfolio now has professional backend services!** 🎉
