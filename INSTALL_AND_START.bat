@echo off
echo ========================================
echo   Portfolio Backend Setup
echo ========================================
echo.
echo This will:
echo   1. Install all dependencies
echo   2. Start all 3 backend servers
echo.
echo Press any key to continue...
pause >nul
echo.

echo ========================================
echo   Step 1: Installing Dependencies...
echo ========================================
pip install flask flask-cors requests yfinance
echo.
echo Dependencies installed!
echo.
timeout /t 2 /nobreak >nul

echo ========================================
echo   Step 2: Starting Backends...
echo ========================================
echo.
echo Opening 3 terminal windows...
echo.

start "Stock Price API (Port 5000)" cmd /k "cd projects\predictstox-demo && echo Starting Stock Price API... && python stock_api.py"
timeout /t 2 /nobreak >nul

start "Chatbot AI (Port 5001)" cmd /k "cd projects\mental-health-chatbot-demo && echo Starting Chatbot AI... && python chatbot_api.py"
timeout /t 2 /nobreak >nul

start "Routing API (Port 5002)" cmd /k "cd projects\resqmap-demo && echo Starting Routing API... && python routing_api.py"
timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   All backends are starting!
echo ========================================
echo.
echo Check the 3 opened windows for status.
echo Each should show "Server running on..."
echo.
echo Next steps:
echo   1. Open TEST_LOCALHOST.html to test
echo   2. Open your project HTML files
echo.
echo To stop: Press Ctrl+C in each window
echo.
pause
