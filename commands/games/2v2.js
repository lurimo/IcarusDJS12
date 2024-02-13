const Discord = require('discord.js');
const { index } = require("mathjs");

module.exports = {
    name: '2v2',
    category: 'games',
    description: 'Sorteia uma dupla entre 4 membros.',
    aliases: ['times', 'teams', '2x2', 'x2', 'dupla'],
    run: async (bot, message, args) => {

        let icon = message.author.avatarURL
        let user1 = (args[0]);
        let user2 = (args[1]);
        let user3 = (args[2]);
        let user4 = (args[3]);

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errMissing = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, missingIcon)
            .setColor("#eb5e34")
            .setDescription(`Você deve mencionar ao menos quatro usuários.`)

        if (!user1) return message.channel.send(errMissing)
        if (!user2) return message.channel.send(errMissing)
        if (!user3) return message.channel.send(errMissing)
        if (!user4) return message.channel.send(errMissing)

        var time2 = []
        var time1 = [`${user1}`,
        `${user2}`,
        `${user3}`,
        `${user4}`]
        var resultado1a = Math.floor((Math.random() * time1.length));
        time2.push(time1[resultado1a])
        time1.slice(resultado1a, resultado1a)
        var resultado1b = Math.floor((Math.random() * time1.length));
        time2.push(time1[resultado1b])
        time1.slice(resultado1b, resultado1b)

        let embed = new Discord.MessageEmbed()
            .setColor("#db0f0f")
            .setDescription(`:gun: **Gerador de DUPLA** :gun:`)
            .addField('\u200b', '\u200b')
            .addField(`Dupla sorteada:`, `**${time2[0]}** e **${time2[1]}**`)
            .addField('\u200b', '\u200b')
            .setFooter("Comando solicitado por: " + `${message.author.username}`, icon);


        return message.channel.send(embed)

    }
}