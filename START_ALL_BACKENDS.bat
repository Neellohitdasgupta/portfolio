@echo off
echo ========================================
echo   Starting All Backend Services
echo ========================================
echo.
echo This will start 3 backend servers:
echo   1. Stock Price API (Port 5000)
echo   2. Mental Health Chatbot AI (Port 5001)
echo   3. ResQMap Routing API (Port 5002)
echo.
echo Press Ctrl+C in each window to stop
echo ========================================
echo.

start "Stock Price API" cmd /k "cd projects\predictstox-demo && pip install -r requirements.txt && python stock_api.py"
timeout /t 2 /nobreak >nul

start "Chatbot AI API" cmd /k "cd projects\mental-health-chatbot-demo && pip install -r requirements.txt && python chatbot_api.py"
timeout /t 2 /nobreak >nul

start "Routing API" cmd /k "cd projects\resqmap-demo && pip install -r requirements.txt && python routing_api.py"

echo.
echo ========================================
echo   All backends starting...
echo   Check the opened windows for status
echo ========================================
pause
