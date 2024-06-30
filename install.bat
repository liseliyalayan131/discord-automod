@echo off
echo Installing npm packages...
npm install
IF %ERRORLEVEL% NEQ 0 (
  echo.
  echo [ERROR] Failed to install npm packages.
  echo.
) ELSE (
  echo.
  echo npm packages installed successfully!
  echo.
)
pause