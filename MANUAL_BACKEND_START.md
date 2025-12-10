# 🚀 Manual Backend Startup Guide

## Step-by-Step Instructions

### Prerequisites:
Make sure Python is installed:
```bash
python --version
```
Should show Python 3.7 or higher.

---

## 🔴 STEP 1: Install Dependencies

Open Command Prompt (cmd) and run these commands ONE BY ONE:

```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\predictstox-demo
pip install flask flask-cors yfinance
```

```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\mental-health-chatbot-demo
pip install flask flask-cors requests
```

```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\resqmap-demo
pip install flask flask-cors requests
```

---

## 🟢 STEP 2: Start Backend #1 - Stock Price API

**Open NEW Command Prompt window:**

```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\predictstox-demo
python stock_api.py
```

**You should see:**
```
🚀 Starting Stock Price API...
📊 Server running on http://localhost:5000
```

**✅ Test it:** Open browser → http://localhost:5000/api/health

**Keep this window OPEN!**

---

## 🟢 STEP 3: Start Backend #2 - Chatbot AI

**Open ANOTHER NEW Command Prompt window:**

```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\mental-health-chatbot-demo
python chatbot_api.py
```

**You should see:**
```
🤗 Starting Mental Health Chatbot API...
💚 Server running on http://localhost:5001
```

**✅ Test it:** Open browser → http://localhost:5001/api/health

**Keep this window OPEN!**

---

## 🟢 STEP 4: Start Backend #3 - Routing API

**Open ANOTHER NEW Command Prompt window:**

```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\resqmap-demo
python routing_api.py
```

**You should see:**
```
🗺️  Starting ResQMap Routing API...
📍 Server running on http://localhost:5002
```

**✅ Test it:** Open browser → http://localhost:5002/api/health

**Keep this window OPEN!**

---

## 🧪 STEP 5: Test All Backends

Open these URLs in your browser:

1. http://localhost:5000/api/health ← Stock API
2. http://localhost:5001/api/health ← Chatbot API
3. http://localhost:5002/api/health ← Routing API

All should show JSON response with "status": "healthy"

---

## 🌐 STEP 6: Open Your Projects

Now open these HTML files in your browser:

1. `portfolio/projects/predictstox-demo/index.html` ← Stock predictions
2. `portfolio/projects/mental-health-chatbot-demo/index.html` ← Chatbot
3. `portfolio/projects/resqmap-demo/index.html` ← Map routing

---

## ⚠️ Troubleshooting:

### "python is not recognized"
Install Python from python.org

### "No module named 'flask'"
Run: `pip install flask flask-cors requests yfinance`

### "Port already in use"
Close other programs using that port, or restart computer

### "localhost refused to connect"
Make sure backend is running (check the command prompt window)

### Backends stop when I close terminal
That's normal! Keep the terminal windows open while using the projects.

---

## 🛑 To Stop Backends:

Press `Ctrl + C` in each Command Prompt window.

---

## 📝 Quick Reference:

**Backend 1 (Stock):** Port 5000
**Backend 2 (Chatbot):** Port 5001  
**Backend 3 (Routing):** Port 5002

**All must be running simultaneously for all projects to work!**
