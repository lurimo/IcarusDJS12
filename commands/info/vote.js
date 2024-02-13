const Discord = require('discord.js');

module.exports = {
  name: 'vote',
  category: 'info',
  description: 'Permite o usuário a criar uma votação dentro do servidor.',
  aliases: ['ideia', 'sugestao', 'idea'],
  run: async (bot, message, args) => {
    let icon = message.author.avatarURL

    message.delete();

    try {
      if (!args.join(' ')) return message.reply('Defina sobre o que é a votação');

      let embed = new Discord.MessageEmbed()
        .setTitle("**Votação de**: " + message.author.username)
        .setDescription(`"**` + args.join(' ') + `**"` +
          `
            
          Reaja aos emojis abaixo para votar!
          Caso queira criar uma votação utilize **>vote**`)
        .setColor(`RANDOM`)
        .setFooter("Votação criada por: " + `${message.author.username}`, icon);

      let msg = await message.channel.send(embed);

      await msg.react('👍');
      await msg.react('👎');
      await msg.react('🤷');

    } catch (err) {
      message.channel.send('Ocorreu um erro!\n' + err).catch();

    }
  }
}