const Discord = require('discord.js');

module.exports = {
  name: 'clear',
  category: 'moderation',
  description: 'Limpa certo número de mensagens.',
  aliases: ['cc', 'limpar'],
  run: async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("você não tem permissão.");
    if (!args[0])
      return message.reply("você precisa colocar o número de mensagens que quer apagar.");
    if (args[0] > 100)
      return message.reply("o máximo de mensagens que posso apagar por vez é: 100.");
    message.channel.bulkDelete(args[0])
  }
}