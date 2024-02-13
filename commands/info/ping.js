const Discord = require("discord.js");

module.exports = {
    name: 'stats',
    category: 'info',
    description: 'Envia ao usuário algumas informações sobre o bot, como UPTIME, Ping e etc.',
    aliases: ['ping', 'latency', 'latencia', 'uptime', 'sistema'],
    run: async (bot, message, args) => {


        let icon = message.author.avatarURL
        let bicon = "https://cdn.discordapp.com/avatars/639541678281326608/b0553771b2b546c9d6395e206d830667.png?size=128";

        //COLETA DO UPTIME
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let uptime = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;

        //PING & API

        let botMsg = await message.channel.send("🖨️ Calculando as informações...")
        var ping = botMsg.createdAt - message.createdAt

        //MSG EMBED

        let embed = new Discord.MessageEmbed()
            .setColor("#eb4034")
            .setTitle("📶 IcarusBot - Status", bicon)
            .setDescription("O IcarusBot atualmente se encontra **ONLINE**.")
            .addField('\u200b', '\u200b')
            .addField(`Ping:`, ping + `ms`)
            .addField(`API:`, ping - 7 + `ms`)
            .addField(`UPTime:`, uptime)
            .addField('\u200b', '\u200b')
            .addField(`INFO:`, `Digite **.bot**.`, true)
            .setFooter("Comando por: " + `${message.author.username}`, icon);
        return message.channel.send(embed);
    }
}


