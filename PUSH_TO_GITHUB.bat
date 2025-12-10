@echo off
echo ========================================
echo   PUSH PORTFOLIO TO GITHUB
echo ========================================
echo.

echo This will prepare your portfolio for GitHub and Vercel deployment.
echo.

echo Step 1: Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating commit...
git commit -m "Portfolio ready for Vercel deployment"

echo.
echo ========================================
echo   NEXT STEPS
echo ========================================
echo.
echo 1. Create a new repository on GitHub:
echo    https://github.com/new
echo.
echo 2. Name it: portfolio or neellohit-portfolio
echo.
echo 3. Copy the repository URL
echo.
echo 4. Run these commands (replace YOUR_REPO_URL):
echo.
echo    git remote add origin YOUR_REPO_URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo 5. Then go back to Vercel and import from GitHub!
echo.
pause
