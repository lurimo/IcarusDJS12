const Discord = require('discord.js');

module.exports = {
    name: 'sorteio-dbd',
    category: 'dbd',
    description: 'Sorteia a sequencia de jogadores para auxiliar na criação de customs para o DBD',
    aliases: ['custom'],
    run: async (bot, message, args) => {

        function shuffle(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        let icon = message.author.avatarURL
        let dbdlogo = "https://cdn.steamgriddb.com/logo_thumb/0a54b19a13b6712dc04d1b49215423d8.png"
        let user1 = (args[0]);
        let user2 = (args[1]);
        let user3 = (args[2]);
        let user4 = (args[3]);
        let user5 = (args[4]);

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errMissing = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, missingIcon)
            .setColor("#eb5e34")
            .setDescription(`Você deve mencionar ao menos quatro usuários.`)

        if (!user1) return message.channel.send(errMissing)

        var players = [`${user1}`,
        `${user2}`,
        `${user3}`,
        `${user4}`,
        `${user5}`]
        var resultado = shuffle(players)
        //var guesser = items[Math.floor(Math.random() * items.length)];
        var lista = resultado.join("\n")

        let embed = new Discord.MessageEmbed()
            .setColor("#db0f0f")
            .setDescription(`:knife: **CUSTOMZADA DE DBD** :knife:`)
            .setThumbnail(dbdlogo)
            .addField('\u200b', '\u200b')
            .addField(`A sequência de killers será essa:`, `**${lista}**`,)
            .addField('\u200b', '\u200b')
            .setFooter("Comando solicitado por: " + `${message.author.username}`, icon);
        return message.channel.send(embed)
    }
}