const Discord = require('discord.js');

module.exports = {
    name: 'atencao',
    category: 'audio',
    description: 'Faz o bot sair e entrar do canal de voz para chamar a atenção de alguém.',
    aliases: ['barulho'],
    run: async (bot, message, args) => {

        let voip = message.member.voice.channel;

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errPerm = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Permissão faltando`, missingIcon)
            .setColor("RED")
            .setDescription(`Você não possui permissão para executar este comando.`)

        const errMissing = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando`, missingIcon)
            .setColor("RED")
            .setDescription(`Você precisa estar em um canal de voz para executar este comando.`)

        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send(errPerm)

        if (!voip)
            return message.channel.send(errMissing)

        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()
        voip.join()
        voip.leave()


        message.channel.send("Pronto!")

    }
}