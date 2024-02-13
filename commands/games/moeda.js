const Discord = require('discord.js');

module.exports = {
    name: 'moeda',
    category: 'games',
    description: 'Jogo de cara ou coroa.',
    aliases: ['coinflip', 'caraoucoroa', 'flip', 'coin'],

    run: async (bot, message, args) => {
        var list = [
            'Cara',
            'Coroa'
        ];

        var rand = list[Math.floor(Math.random() * list.length)];

        await message.channel.send(`Resultado: **${rand}**`)
    }
}