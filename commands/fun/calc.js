const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'calc',
    category: 'fun',
    description: 'Calculadora',
    aliases: ['calcule', 'calculo', 'calculadora', 'matematica', 'mat'],
    run: async (bot, message, args) => {

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
        const errMissing = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Conteúdo faltando.`, missingIcon)
            .setColor("#eb5e34")
            .setDescription(`Você precisa digitar uma expressão matemática para eu resolver.`)

        const errInvalid = new Discord.MessageEmbed()
            .setAuthor(`ERRO - Cálculo Inválido`, missingIcon)
            .setColor("#eb5e34")
            .setDescription(`Não consegui executar este cálculo, acho que faltei nesse dia de aula.`)

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        if (!args[0]) {
            return message.channel.send(errMissing)
        }

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) { message.channel.send(errInvalid) }

        const result = new Discord.MessageEmbed()
            .setTitle(":1234: Resultado do cálculo")
            .setColor("YELLOW")
            .addField('**Questão**', `\`\`\`css\n${args.join(" ")}\`\`\``)
            .addField('**Resposta**', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(result)
    }
}