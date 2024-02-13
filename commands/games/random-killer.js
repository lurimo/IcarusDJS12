const Discord = require('discord.js');

module.exports = {
    name: 'random-killer',
    category: 'dbd',
    description: 'Sorteia um assassino aleatório do Dead By Daylight',
    aliases: ['random', 'rk', 'killer'],
    run: async (bot, message, args) => {
        let icon = message.author.avatarURL
        var dbdlogo = "https://cdn.steamgriddb.com/logo_thumb/0a54b19a13b6712dc04d1b49215423d8.png"

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var respostas = ["Trapper",
            "Wraith",
            "Hillbilly",
            "Nurse",
            "Myers",
            "Hag",
            "Doctor",
            "Huntress",
            "Letherface / BUBBA",
            "Krueger",
            "Pig",
            "Clown",
            "Spirit",
            "Legion",
            "Plague",
            "Ghost Face",
            "Demogorgon",
            "Oni",
            "Deathslinger",
            "Pyramid Head",
            "The Blight",
            "KPopper",
            "Nemesis",
            "The Twins",
            "Pinhead"]
        var resultado = Math.floor((Math.random() * respostas.length));

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let embed = new Discord.MessageEmbed()
            .setColor("#db0f0f")
            .setDescription(`:dagger: **Killer Aleatório** :dagger:`)
            .addField('\u200b', '\u200b')
            .addField(`O assassino terá que jogar com o(a):`, `**${respostas[resultado]}**`)
            .addField('\u200b', '\u200b')
            .setThumbnail(dbdlogo)
            .setFooter("Comando solicitado por: " + `${message.author.username}`, icon);



        return message.channel.send(embed)
    }
}