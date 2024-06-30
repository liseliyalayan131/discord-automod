const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
const settings = require("./settings.json");
const express = require('express');
const chalk = require('chalk');

const harmoni = new Client({
    intents: 32767
});

harmoni.commands = new Collection();
harmoni.slash_commands = new Collection();
harmoni.aliases = new Collection();
harmoni.events = new Collection();
harmoni.categories = fs.readdirSync("./command");

module.exports = harmoni;

["prefix", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(harmoni);
});

process.on('unhandledRejection', err => {
    console.error(`[ERROR] Unhandled promise rejection: ${err.message}.`);
    console.error(err);
});

const AUTH = process.env.TOKEN || settings.harmoni.TOKEN;
if (!AUTH) {
    console.warn("[WARN] Please make sure your token is correct!");
    process.exit(1);
} else {
    harmoni.login(AUTH)
        .then(() => console.log(chalk.green("Bot logged in successfully!")))
        .catch(err => {
            console.error("[ERROR] The token appears to be invalid, please check again. If this error is still showing, enable 3 Intent.");
            console.error(`[ERROR DETAILS] ${err.message}`);
            process.exit(1);
        });
}

console.clear();
console.log(chalk.blue.bold(`System`), chalk.white(`>>`), chalk.green(`Starting Up`));
console.log(`\u001b[0m`);
console.log(chalk.blue.bold(`©Harmoni`), chalk.white(`|`), chalk.green(`2023 - ${new Date().getFullYear()}`), chalk.white(`|`), chalk.red(`All Rights Reserved`));