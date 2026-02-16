@echo off
echo ========================================
echo   WADAJE MOTORS - Production Build
echo ========================================
echo.

echo Building for production...
call npm run build

if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Build Complete!
echo ========================================
echo.
echo Production files are in the 'dist' folder
echo You can now deploy these files to your web server
echo.
echo To preview the build locally, run:
echo   npm run preview
echo.

pause
