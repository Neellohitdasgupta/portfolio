@echo off
echo ========================================
echo   VERCEL DEPLOYMENT SCRIPT
echo ========================================
echo.

echo Checking if Vercel CLI is installed...
where vercel >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install Vercel CLI
        echo Please install Node.js first from: https://nodejs.org/
        pause
        exit /b 1
    )
)

echo.
echo Vercel CLI is ready!
echo.
echo ========================================
echo   DEPLOYMENT OPTIONS
echo ========================================
echo.
echo 1. Deploy to Preview (Test)
echo 2. Deploy to Production (Live)
echo 3. Login to Vercel
echo 4. Exit
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Deploying to preview...
    vercel
) else if "%choice%"=="2" (
    echo.
    echo Deploying to production...
    vercel --prod
) else if "%choice%"=="3" (
    echo.
    echo Opening Vercel login...
    vercel login
) else if "%choice%"=="4" (
    echo.
    echo Exiting...
    exit /b 0
) else (
    echo.
    echo Invalid choice!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your portfolio is now live on Vercel!
echo.
echo Next steps:
echo 1. Copy the deployment URL
echo 2. Test your website
echo 3. Share it on LinkedIn, resume, etc.
echo.
pause
