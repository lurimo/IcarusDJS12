const Discord = require('discord.js');
const fs = require('fs')
const config = require('./config.json')
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['GUILD_MESSAGES']
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
bot.queues = new Map();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

["event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on("ready", () => {
    var chBase = bot.channels.cache.get('1059667358727286856');
    let bicon = bot.user.avatarURL

    const log = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setAuthor("IcarusBot", bicon)
        .setDescription(`O bot foi iniciado.`, Date.now)
        .setTimestamp()
    chBase.send(log)
}

);

bot.login(config.token)
