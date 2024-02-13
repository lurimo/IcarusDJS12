const Discord = require('discord.js');

module.exports = {
    name: 'todo',
    category: 'info',
    description: 'Lista de afazeres.',
    aliases: ['t', 'to-do', 'do', 'td'],
    run: async (bot, message, args) => {

        let user = message.author.username
        let local = args[0]
        let data = args.join(" ");
        let task = data.replace(local, '')
        let todoCH = bot.channels.cache.get("778343804301738014+")

        let iconTODO = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png";
        let iconHMR = "https://tf2maps.net/attachments/hammer_hd_icon_g-png.65613/"
        let iconERR = "https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsconflicting_93497.png";

        const errMissing = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, iconERR)
            .setColor("#660606")
            .setDescription(`Você não me disse qual é essa tarefa.`)

        const errLocal = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, iconERR)
            .setColor("#660606")
            .setDescription(`Você precisa me dizer o local da mudança.`)

        const errPerm = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Permissões insuficientes.`, iconERR)
            .setColor("#660606")
            .setDescription(`Você não possui permissão para executar este comando.`)

        if (!args[0]) return message.channel.send(errLocal)
        if (!args[1]) return message.channel.send(errMissing)
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(errPerm)

        try {
            (async () => {

                const msgFinal = new Discord.MessageEmbed()
                    .setAuthor('de_Alori', iconHMR)
                    .setTitle("NOVA TAREFA")
                    .setThumbnail(iconTODO)
                    .addField('\u200b', '\u200b')
                    .addField('Usuário:', user, true)
                    .addField('Local:', local, true)
                    .addField('\u200b', '\u200b')
                    .addField('Tarefa:', task)
                    .addField('\u200b', '\u200b')
                    .setColor('RANDOM')
                    .setTimestamp()

                let msg = await todoCH.send(msgFinal);

                await msg.react('✔️');
                await msg.react('❌');
                await msg.react('🔧');
            })();
        } catch (err) {
            message.channel.send('Ocorreu um erro!\n' + err).catch();

        }
    }
}