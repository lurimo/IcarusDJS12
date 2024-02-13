const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    category: 'mod',
    description: 'Expulsa alugem do server.',
    aliases: ['kickar', 'k', 'expulsar'],

    run: async (bot, message, args) => {


        let botIcon = "https://cdn.discordapp.com/avatars/718336325480218695/92d933ee3af3dac879c6e8fbf5180eb7.png";
        let aicon = "https://cdn.discordapp.com/emojis/480512404229193736.gif?v=1";
        let reason = args.join(" ").slice(22);
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        //////////////////////
        //REGISTRO DE EMBEDS/
        ////////////////////

        const embedERRPerm = new Discord.MessageEmbed()
            .setAuthor(`IcarusBot - Erro`, botIcon)
            .setColor("#eb4034")
            .setDescription(`Você não possui permissão para executar este comando.`)
        const embedERRUser = new Discord.MessageEmbed()
            .setAuthor(`IcarusBot - Erro`, botIcon)
            .setColor("#eb4034")
            .setDescription(`Você deve mencionar um usuário para que eu aplique a punição.`)
        const embedERRReason = new Discord.MessageEmbed()
            .setAuthor(`IcarusBot - Erro`, botIcon)
            .setColor("#eb4034")
            .setDescription(`Você deve dizer o motivo da punição.`)
        const embedERRAdm = new Discord.MessageEmbed()
            .setAuthor(`IcarusBot - Erro`, botIcon)
            .setColor("#eb4034")
            .setDescription(`Você não pode aplicar uma punição a esta pessoa.`)

        /////////////
        //CHECKERS//
        ///////////

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(embedERRPerm)
        if (!user) return message.channel.send(embedERRUser)
        if (!reason) return message.channel.send(embedERRReason)
        if (user.hasPermission("ADMINISTRATOR")) return message.channel.send(embedERRAdm)

        //////////////
        //MAIN-CODE//
        ////////////

        let banEmbed = new Discord.MessageEmbed()
            .setColor("#3ddbff")
            .setAuthor("IcarusBot - Punição", botIcon)
            .setTitle("Informações:")
            .addField("Punição efetuada:", "Expulsão", true)
            .addField("Autor da punição:", `@${message.author.tag}`)
            .addField("Vítima:", `${user}`, true)
            .addField("Razão:", `${reason}`, true)
            .setTimestamp()
            .setFooter("Kick efetuado em:", aicon);

        user.send(`Venho tristemente lhe informar que você foi **KICKADO** de algum dos servidores que eu estou.`)
        message.channel.send(banEmbed);
        user.kick({ reason: reason })


        return;
    }
}