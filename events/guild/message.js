const Discord = require('discord.js');

module.exports = async (bot, message) => {

    let prefix = "."

    //if(message.author.bot) return;
    let msg = message.content.toLowerCase()

    if (msg === "oi icarus") {
        message.channel.send(`fala`)
    };

    if (msg == `icarus` || message.content == `bot`) {
        return message.channel.send(`ooiii`)
    };

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let command;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);

    } else if (bot.aliases.get(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    else return message.channel.send('Comando desconhecido.')

    console.log(message.author.username + " tentou executar o comando ." + cmd)


    command.run(bot, message, args);
}