@echo off
title Harmoni Bot Startup

echo Starting Harmoni Bot...
echo -----------------------

REM
set /p token="Enter your Discord bot token: "
set /p clientId="Enter your Discord client ID: "

REM
(
echo {
echo   "prefix": "!",
echo   "harmoni": {
echo     "TOKEN": "%token%",
echo     "ID": "%clientId%"
echo   }
echo }
) > settings.json

echo.
echo settings.json created with the provided token and client ID.
echo.

REM
echo Running Harmoni Bot in the foreground...
node index.js

REM
IF %ERRORLEVEL% EQU 0 (
    echo Harmoni Bot started successfully in the foreground!
)

goto :eof

:end
REM
echo.
echo [ERROR] An error occurred during startup.
echo.

:eof
REM
echo.
echo Press any key to close the window...
pause >nul
