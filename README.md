# Harmoni Discord Bot

Harmoni is used to get an automod badge for the Discord bot.

## Prerequisites

- Node.js (version 16.6.0 or higher)
- Discord account
- A Discord server where you have administrative privileges

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/liseliyalayan131/discord-automod.git
    cd harmoni-discord-bot
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Configure the bot by editing the `settings.json` file:
    ```json
    {
        "prefix": "!",
        "harmoni": {
            "TOKEN": "your-bot-token",
            "ID": "your-client-id"
        }
    }
    ```

## Usage

1. Start the bot:
    ```sh
    npm start
    ```
   Or run the batch file:
    ```sh
    ./start.bat
    ```

2. The bot will log in and start listening for commands and events.
