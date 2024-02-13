const Discord = require('discord.js');
const os = require('os');
const ms = require('ms');

module.exports = {
    name: 'bot',
    category: 'info',
    description: 'Mostra as informações do IcarusBot.',
    alises: ['bot-info', 'botinfo', 'infobot'],
    run: async (bot, message, args) => {

        const core = os.cpus()[0];

        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("INFORMAÇÕES")
            .setAuthor(`IcarusBot`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .addFields({
                name: 'Número de servidores que eu estou',
                value: bot.guilds.cache.size
            }, {
                name: 'Número de pessoas que eu conheço',
                value: bot.users.cache.size
            }, {
                name: 'Versão do Node.Js',
                value: process.version
            }, {
                name: 'Versão do Discord.Js',
                value: Discord.version
            }, {
                name: 'Prefixo neste servidor',
                value: '"."'
            }, {
                name: 'Fui criado por',
                value: 'Murilo'
            })
            .addField('Sistema', [
                `**Plataforma:** ${process.platform}`,
                `**Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
                `**CPU:**`,
                `\u200b Núcleos: ${os.cpus().length}`,
                `\u200b Modelo: ${core.model}`,
                `\u200b Velocidade: ${core.speed}MHz`,
            ])
            .setTimestamp()

        message.channel.send(embed)

    }
}