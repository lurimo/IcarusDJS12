const Discord = require('discord.js');

module.exports = {
    name: 'say',
    category: 'moderation',
    description: 'Faz o bot falar o que você quiser',
    aliases: ['speak', 'falar', 'fala'],
    run: async (bot, message, args) => {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        message.channel.send(sayMessage);
    }
}