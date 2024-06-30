@echo off
title Harmoni Bot Startup

echo Starting Harmoni Bot...
echo -----------------------

REM Run the bot
node . 

REM Check the exit code of the node process
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Harmoni Bot failed to start.
    echo.
) ELSE (
    echo.
    echo Harmoni Bot started successfully!
    echo.
)

REM Wait for user input before closing
echo Press any key to continue...
PAUSE >nul