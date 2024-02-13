const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  category: 'fun',
  description: 'Envia ao executor do comando o avatar dele ou o de quem ele mencionou.',
  aliases: ['foto', 'photo', 'avatra', 'logo'],
  run: async (bot, message, args) => {


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let icon = message.author.avatarURL
    let user = message.mentions.users.first() || message.author;

    let embed = new Discord.MessageEmbed()
      .setDescription(`:frame_photo: Avatar de **${user.username}** é este aqui:`)
      .setImage("https://cdn.discordapp.com/avatars/" + user.id + "/" + user.avatar + ".jpeg")
      .setColor('RANDOM')
      .setFooter("Avatar solicitado por: " + `${message.author.username}`, icon);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (args[0] === ' ') {
      return message.channel.send(embed);
    }
    return message.channel.send(embed);
  }
}
