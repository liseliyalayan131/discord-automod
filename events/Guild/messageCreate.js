const harmoni = require('../../index.js');
const settings = require('../../settings.json');

const generateId = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

harmoni.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(settings.prefix)) return;
    if (!message.guild) return;

    if (!message.member) {
        message.member = await message.guild.fetchMember(message);
    }

    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;

    let command = harmoni.commands.get(cmd);
    if (!command) {
        command = harmoni.commands.get(harmoni.aliases.get(cmd));
    }

    if (command) {
        try {
            const prefix = settings.prefix || '!';
            await command.run(harmoni, message, args, prefix);
        } catch (error) {
            const errorId = generateId(12);
            console.error(`[ERROR] Error ID: ${errorId}\n`, error);
            await message.reply(`Something went wrong while executing the command! Error ID: \`${errorId}\``);
        }
    }
});