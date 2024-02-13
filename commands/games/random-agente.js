const Discord = require('discord.js');

module.exports = {
    name: 'random-agente',
    category: 'dbd',
    description: 'Sorteia um agente aleatório no Valorant.',
    aliases: ['ra', 'agent', 'valorant'],
    run: async (bot, message, args) => {
        let icon = message.author.avatarURL

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var respostas = ["Brimstone",
            "Phoenix",
            "Sage",
            "Sova",
            "Viper",
            "Cypher",
            "Reyna",
            "Killjoy",
            "Breach",
            "Omen",
            "Jett",
            "Raze",
            "Skye",
            "Yoru",
            "Astra",
            "Kay/o",
            "Chamber",
            "Neon",
            "Harbor",
            "Iso",
            "Deadlock",
            "Fade"]
        var resultado = Math.floor((Math.random() * respostas.length));

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let embed = new Discord.MessageEmbed()
            .setColor("#db0f0f")
            .setDescription(`**AGENTE ALEATÓRIO**`)
            .addField('\u200b', '\u200b')
            .addField(`DÚVIDO jogar com o(a):`, `**${respostas[resultado]}**`)
            .addField('\u200b', '\u200b')
            .setFooter("Comando solicitado por: " + `${message.author.username}`, icon);



        return message.channel.send(embed)
    }
}