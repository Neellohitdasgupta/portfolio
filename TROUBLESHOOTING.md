# 🔧 Troubleshooting Guide

## Problem: Localhost websites aren't opening

### Solution 1: Check if Python is installed
```bash
python --version
```
Should show: `Python 3.x.x`

If not installed:
1. Download from https://python.org
2. Install with "Add to PATH" checked
3. Restart Command Prompt

---

### Solution 2: Check if backends are actually running

Open Command Prompt and run:
```bash
netstat -ano | findstr :5000
netstat -ano | findstr :5001
netstat -ano | findstr :5002
```

If you see output, backends are running.
If no output, backends are NOT running.

---

### Solution 3: Start backends correctly

**Open 3 SEPARATE Command Prompt windows:**

**Window 1:**
```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\predictstox-demo
python stock_api.py
```
Wait for: "Server running on http://localhost:5000"

**Window 2:**
```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\mental-health-chatbot-demo
python chatbot_api.py
```
Wait for: "Server running on http://localhost:5001"

**Window 3:**
```bash
cd C:\Users\Neellohit Dasgupta\Downloads\rayu_store_scaffold\portfolio\projects\resqmap-demo
python routing_api.py
```
Wait for: "Server running on http://localhost:5002"

---

### Solution 4: Test backends are working

Open `portfolio/TEST_LOCALHOST.html` in your browser.

Click the test buttons. All should show green "✅ Connected successfully!"

---

### Solution 5: Check firewall

Windows Firewall might be blocking localhost:

1. Open Windows Defender Firewall
2. Click "Allow an app through firewall"
3. Find Python
4. Check both Private and Public
5. Click OK
6. Restart backends

---

### Solution 6: Try different browser

If Chrome doesn't work, try:
- Firefox
- Edge
- Brave

---

### Solution 7: Check if ports are blocked

Run as Administrator:
```bash
netsh interface ipv4 show excludedportrange protocol=tcp
```

If 5000, 5001, or 5002 are in the excluded range, change ports in the Python files.

---

### Solution 8: Restart everything

1. Close ALL Command Prompt windows
2. Restart computer
3. Start backends again
4. Try opening localhost

---

## Problem: "No module named 'flask'"

### Solution:
```bash
pip install flask flask-cors requests yfinance
```

If pip doesn't work:
```bash
python -m pip install flask flask-cors requests yfinance
```

---

## Problem: "Port already in use"

### Solution:
Find what's using the port:
```bash
netstat -ano | findstr :5000
```

Last number is PID. Kill it:
```bash
taskkill /PID <number> /F
```

Or restart computer.

---

## Problem: Backends start but immediately close

### Solution:
Don't double-click the .py file!

Instead:
1. Open Command Prompt
2. Navigate to folder
3. Run: `python stock_api.py`
4. Keep window open

---

## Problem: "python is not recognized"

### Solution:
Python not in PATH. Two options:

**Option 1: Add to PATH**
1. Search "Environment Variables"
2. Edit System Environment Variables
3. Add Python folder to PATH
4. Restart Command Prompt

**Option 2: Use full path**
```bash
C:\Python39\python.exe stock_api.py
```

---

## Problem: Frontend shows old/wrong data

### Solution:
1. Make sure backends are running
2. Clear browser cache (Ctrl+Shift+Delete)
3. Hard refresh (Ctrl+F5)
4. Check browser console (F12) for errors

---

## Problem: CORS errors in browser console

### Solution:
All backends have CORS enabled. If still getting errors:

1. Make sure backend is running
2. Check you're using correct port
3. Try different browser
4. Check backend console for errors

---

## Quick Diagnostic Checklist:

- [ ] Python installed and in PATH
- [ ] Dependencies installed (flask, flask-cors, etc.)
- [ ] 3 Command Prompt windows open
- [ ] All 3 backends showing "Server running..."
- [ ] TEST_LOCALHOST.html shows all green
- [ ] Browser console (F12) shows no errors
- [ ] Firewall allows Python
- [ ] No antivirus blocking localhost

---

## Still Not Working?

### Last Resort Steps:

1. **Uninstall and reinstall Python**
   - Download latest from python.org
   - Check "Add to PATH"
   - Install

2. **Install dependencies again**
   ```bash
   pip install --upgrade flask flask-cors requests yfinance
   ```

3. **Use different ports**
   Edit Python files, change:
   ```python
   app.run(host='0.0.0.0', port=5003, debug=True)
   ```

4. **Check Windows version**
   - Windows 10/11 required
   - Update Windows if needed

5. **Disable antivirus temporarily**
   - Test if it works
   - If yes, add Python to whitelist

---

## Contact Information:

If nothing works, check:
1. Python version: `python --version`
2. Pip version: `pip --version`
3. Windows version: `winver`
4. Error messages in Command Prompt
5. Error messages in browser console (F12)

Share these details for better help.
