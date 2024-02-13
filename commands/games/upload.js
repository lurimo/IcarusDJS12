const Discord = require('discord.js');

module.exports = {
    name: 'upload',
    category: 'games',
    description: 'Comando auxiliar aos testes de mapas.',
    aliases: ['up', 'att', 'alori-att'],
    run: async (bot, message, args) => {

        let versao = args[0]
        let url = args.join(" ");
        let link = url.replace(versao, '')
        let downloadCH = bot.channels.cache.get("774196393065054208")

        let iconHMR = "https://tf2maps.net/attachments/hammer_hd_icon_g-png.65613/"
        let iconERR = "https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsconflicting_93497.png";
        let layout = 'https://cdn.discordapp.com/attachments/774196406675308565/777656240033497108/de_alori_radar.png'

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errMissingVER = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, missingIcon)
            .setColor("#eb5e34")
            .setDescription(`Você deve inserir a versão do mapa.`)

        const errMissingLink = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, missingIcon)
            .setColor("#eb5e34")
            .setDescription(`Você deve inserir o URL de download.`)

        const errPerm = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Permissões insuficientes.`, iconERR)
            .setColor("#660606")
            .setDescription(`Você não possui permissão para executar este comando.`)

        if (!args[0]) return message.channel.send(errMissingVER)
        if (!args[1]) return message.channel.send(errMissingLink)
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(errPerm)

        const final = new Discord.MessageEmbed()
            .setAuthor(versao, iconHMR)
            .setTitle('DOWNLOAD')
            .setURL(link)
            .setDescription('Verifique as mensagens fixadas para saber onde instalar.')
            .setThumbnail('https://cdn.discordapp.com/attachments/759618063426650163/777663110458769448/My_Post_2.jpg')
            .addField('\u200b', '\u200b')
            .setColor('#57d4a6')
            .setTimestamp()

        downloadCH.send(final)

    }
}