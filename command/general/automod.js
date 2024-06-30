const Discord = require('discord.js');
const settings = require('../../settings.json');

module.exports = {
    name: 'automod',
    aliases: [],
    category: "general",
    description: "automode badge",
    usage: "automod",
    examples: [],
    run: async (harmoni, message, args, prefix) => {
        const harmoni_guild = message.guild;
        const harmoni_message = message;

        const createAutoModRule = async (name, triggerType, triggerMetadata, successMessage) => {
            try {
                const rule = await harmoni_guild.autoModerationRules.create({
                    name,
                    creatorId: settings.harmoni.ID,
                    enabled: true,
                    eventType: 1,
                    triggerType,
                    triggerMetadata,
                    actions: [{
                        type: 1,
                        metadata: {
                            channel: harmoni_message.channel,
                            durationSeconds: 10,
                            customMessage: 'This message has been blocked.'
                        }
                    }]
                });

                if (rule) {
                    const embed = new Discord.MessageEmbed()
                        .setDescription(successMessage)
                        .setColor("#5FFD0A");
                    harmoni_message.reply({ embeds: [embed] });
                }
            } catch (err) {
                console.log(err);
                await harmoni_message.reply('Transaction Successful. discord.gg/spmAAJQZXH');
            }
        };

        await createAutoModRule('Automod Harmoni-1', 4, { presets: [1, 2, 3] }, 'Automod rule 1 was created successfully.');
        await createAutoModRule('Automod Harmoni-2', 1, { keywordFilter: ['tram stalker'] }, 'Automod rule 2 was created successfully.');
        await createAutoModRule('Automod Harmoni-3', 1, { keywordFilter: ['enter text'] }, 'Automod rule 3 was created successfully.');
        await createAutoModRule('Automod Harmoni-4', 1, { keywordFilter: ['Enter offensive text'] }, 'Automod rule 4 was created successfully.');
        await createAutoModRule('Automod Harmoni-5', 1, { keywordFilter: ['porn'] }, 'Automod rule 5 was created successfully.');
        await createAutoModRule('Automod Harmoni-6', 1, { keywordFilter: ['porno'] }, 'Automod rule 6 was created successfully.');
    }
};