const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
  name: 'clima',
  category: 'info',
  description: 'Monstra as informações climáticas de algum local',
  aliases: ['weather'],
  run: async (bot, message, args) => {
    var msg = args.join(" ")
    let bicon = "https://cdn.discordapp.com/avatars/718336325480218695/92d933ee3af3dac879c6e8fbf5180eb7.png";

    weather.find({ search: msg, degreeType: 'C' }, function (err, result) {
      if (result === undefined || result.length === 0) {

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errMissing = new Discord.MessageEmbed()
          .setAuthor(`ERRO - Conteúdo faltando`, missingIcon)
          .setColor("#eb5e34")
          .setDescription(`Você deve mencionar um local para eu exibir as informações climáticas.`)

        message.channel.send(embed)
        return;
      }
      var current = result[0].current;
      var location = result[0].location;
      let icon = message.author.avatarURL
      var tempo = "https://cdn.discordapp.com/attachments/395219046812876800/529507890269126685/clima-png-2.png"

      let embed = new Discord.MessageEmbed()
        .setColor("#34a5eb")
        .setAuthor("IcarusBot - Clima", bicon)
        .setTitle(`Informações sobre:`)
        .setDescription(`${current.observationpoint}`)
        .addField("**Fuso Horário: **", location.timezone, true)
        .addField("**Temperatura Atual: **", current.temperature,)
        .addField("**Sensação Térmica: **", current.feelslike,)
        .addField("**Ventos: **", current.winddisplay,)
        .addField("**Humildade no ar: **", current.humidity,)
        .setThumbnail(tempo)
        .setTimestamp()
        .setFooter("Comando executado por: " + `${message.author.username}`, icon);

      return message.channel.send(embed)
    });

  }
}