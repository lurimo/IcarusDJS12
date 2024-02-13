const Discord = require('discord.js');
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    category: 'fun',
    description: 'Transforma o input de texto do usuário em ASCII',
    aliases: ['asci', 'texto', 'acsii'],
    run: async (bot, message, args) => {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errMissing = new Discord.MessageEmbed()
        .setAuthor(`ERRO - Conteúdo faltando.`, missingIcon) 
        .setColor("RED")
        .setDescription(`Você deve inserir algum texto para que eu transforme em ASCII.`)

        const errLong = new Discord.MessageEmbed()
        .setAuthor(`ERRO - Limite do comando.`, missingIcon) 
        .setColor("RED")
        .setDescription(`O máximo de caractéres permitidos para a execução deste comando é: 2000.`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        if(!args[0]) {
            return message.channel.send(errMissing)
        }

        msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if(err) {
                console.log(err)
            }
            if(data.length > 2000) {
                return message.channel.send(errLong)
            }

            message.channel.send('```' + data + '```')
        })
    }
}