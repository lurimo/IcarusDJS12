const Discord = require('discord.js');

module.exports = {
    name: 'ship',
    category: 'fun',
    description: 'Mostra uma probabilidade aleatória entre dois usuários.',
    aliases: ['shippar'],
    run: async (bot, message, args) => {
        let icon = message.author.avatarURL
        var coracao = "https://cdn.discordapp.com/attachments/529328658528337920/529701068066521108/8dc0259e6cfbd2bb9492e3ec812fa763.png"
        let user = message.mentions.users.first() || message.author

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errMissing = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, missingIcon)
            .setColor("#eb5e34")
            .setDescription(`Você precisa mencionar dois usuários.`)

        if (!user) return message.channel.send(errMissing)

        var respostas = ["0% [..........]", "10% [█.........]", "20% [██........]", "30% [███.......]", "40% [████......]",
            "50% [█████.....]", "60% [██████....]", "70% [███████...]", "80% [████████..]", "90% [█████████.]", "100% [██████████]",
            "11% [█.........]", "12% [█.........]", "13% [█.........]", "14% [█.........]", "15% [█.........]",
            "16% [█.........]", "17% [█.........]", "18% [█.........]", "19% [█.........]", "21% [██........]",
            "22% [██........]", "23% [██........]", "24% [██........]", "25% [██........]", "26% [██........]",
            "27% [██........]", "28% [██........]", "29% [██........]", "31% [███.......]", "32% [███.......]",
            "33% [███.......]", "34% [███.......]", "35% [███.......]", "36% [███.......]", "37% [███.......]",
            "38% [███.......]", "39% [███.......]", "41% [████......]", "42% [████......]", "43% [████......]",
            "44% [████......]", "45% [████......]", "46% [████......]", "47% [████......]", "48% [████......]",
            "49% [████......]", "51% [█████.....]", "52% [█████.....]", "53% [█████.....]", "54% [█████.....]",
            "55% [█████.....]", "56% [█████.....]", "57% [█████.....]", "58% [█████.....]", "59% [█████.....]",
            "61% [██████....]", "62% [██████....]", "63% [██████....]", "64% [██████....]", "65% [██████....]",
            "66% [██████....]", "67% [██████....]", "68% [██████....]", "69% [██████....]", "71% [███████...]",
            "72% [███████...]", "73% [███████...]", "74% [███████...]", "75% [███████...]", "76% [███████...]",
            "77% [███████...]", "78% [███████...]", "79% [███████...]", "81% [████████..]", "82% [████████..]",
            "83% [████████..]", "84% [████████..]", "85% [████████..]", "86% [████████..]", "87% [████████..]",
            "88% [████████..]", "89% [████████..]", "91% [█████████.]", "92% [█████████.]", "93% [█████████.]",
            "94% [█████████.]", "95% [█████████.]", "96% [█████████.]", "97% [█████████.]", "98% [█████████.]",
            "99% [█████████.]",]

        var resultado = Math.floor((Math.random() * respostas.length));

        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`:sparkling_heart: **Será que nós temos um novo casal aqui?**`)
            .addField("Chance de dar certo:", `${respostas[resultado]}`)
            .setThumbnail(coracao)
            .setFooter("Comando por: " + `${message.author.username}`, icon);


        return message.channel.send(embed)
    }
}