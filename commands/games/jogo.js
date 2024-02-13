const Discord = require('discord.js');

module.exports = {
    name: 'jogo',
    category: 'games',
    description: 'Sorteia um jogo aleatório pro pessoal jogar',
    aliases: ['random-game', 'rg', 'randomgame'],
    run: async (bot, message, args) => {


        var respostas = ["Valorant",
            "Dead by Daylight",
            "League of Legends",
            "Devour",
            "Phasmofobia",
            "Minecraft",
            "Raft",
            "Tricky Towers",
            "Bloons TD 6"]

        var resultado = Math.floor((Math.random() * respostas.length));

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let embed = new Discord.MessageEmbed()
            .setColor("#db0f0f")
            .setDescription(`**Jogo Aleatório**`)
            .addField('\u200b', '\u200b')
            .addField(`Que tal jogar `, `**${respostas[resultado]}**`)
            .addField('\u200b', '\u200b')
            .setFooter("Comando solicitado por: " + `${message.author.username}`);



        return message.channel.send(embed)
    }
}
