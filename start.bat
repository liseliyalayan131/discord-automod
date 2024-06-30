@echo off
title Harmoni Bot Startup

echo Starting Harmoni Bot...
echo -----------------------

REM Prompt for Discord bot token and client ID
set /p token="Enter your Discord bot token: "
set /p clientId="Enter your Discord client ID: "

REM Write to settings.json
(
echo {
echo     "prefix": "!",
echo     "harmoni":
echo     {
echo         "TOKEN": "%token%",
echo         "ID": "%clientId%"
echo     }
echo }
) > settings.json

echo.
echo settings.json created with the provided token and client ID.
echo.

REM Install npm packages
echo Installing npm packages...
npm install
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Failed to install npm packages.
    echo.
    goto end
)

REM Pause to see if npm install succeeded
PAUSE

REM Run the bot
echo Running Harmoni Bot...
node .
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Harmoni Bot failed to start.
    echo.
    goto end
) ELSE (
    echo.
    echo Harmoni Bot started successfully!
    echo.
)

REM Pause to see if the bot ran successfully
PAUSE

:end
REM Wait for user input before closing
echo.
echo Press any key to continue...
PAUSE >nul
