@echo off
echo ========================================
echo  Starting FundAI Frontend
echo ========================================
echo.

cd /d "%~dp0"

echo Installing required dependencies...
call npm install recharts react-hot-toast zustand

echo.
echo Starting development server...
call npm run dev

pause
