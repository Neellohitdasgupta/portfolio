@echo off
echo ========================================
echo   Starting Stock Price API Backend
echo ========================================
echo.
echo Installing dependencies...
pip install -r requirements.txt
echo.
echo Starting server...
echo.
python stock_api.py
pause
