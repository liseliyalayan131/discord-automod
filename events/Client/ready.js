const ms = require("ms");
const chalk = require('chalk');
const harmoni = require("../../index.js");
const settings = require("../../settings.json");

const logInfo = (label, value) => {
  console.log(chalk.blue(chalk.bold(label)), chalk.white(`>>`), chalk.green(value));
};

harmoni.once('ready', async () => {
  try {
    logInfo('User', harmoni.user.username);
    logInfo('Situation', 'Online!');

    harmoni.user.setActivity(`${settings.prefix}automod`);
  } catch (error) {
    console.error(chalk.red.bold('Error during bot initialization:'), error);
  }
});