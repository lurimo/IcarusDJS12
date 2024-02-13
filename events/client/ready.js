const Discord = require('discord.js')
const { default_prefix } = require('../../config.json');

module.exports = async (bot, message) => {

    var activities = [
        `.ajuda ou .comandos`,
        `o bot SECRETO`,
    ]

    i = 0;
    setInterval(() => bot.user.setActivity(activities[i++ % activities.length], {
        type: "PLAYING"
    }), 8000);
    console.log('Todos os sistemas inicializados.')
    console.log('IcarusBot está online.')
    console.log(`'-------------------------'`)
}
