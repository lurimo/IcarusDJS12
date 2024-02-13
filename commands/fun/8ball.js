const Discord = require('discord.js');

module.exports = {
	name: '8ball',
	category: 'fun',
	description: 'Faça uma pergunta que o bot irá responder.',
	aliases: ['q', 'pergunta', 'perguntar', '8blal'],

	run: async (bot, message, args) => {

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		let missingIcon = "https://blog.sqlauthority.com/wp-content/uploads/2009/04/document-error-flat.png";
		const errMissing = new Discord.MessageEmbed()
			.setAuthor(`ERRO - Conteúdo faltando`, missingIcon)
			.setColor("RED")
			.setDescription(`Você deve inserir uma pergunta para que eu possa responder.`)

		let msgm = args.join(" ");
		if (!msgm) return message.channel.send(errMissing)

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		let replies = [
			'talvez.',
			'claro que não.',
			'espero que sim.',
			'nem sonhando.',
			'é bem provável.',
			'é provável.',
			'eu acho que sim.',
			'eu acho que não.',
			'tomara.',
			'NUNCA MANO.',
			'eu lá vou saber.',
			'OBVIO QUE SIM.',
			'OBVIO QUE NÃO.',
			'isso daí ta nas mãos do futuro.',
			'prefiro não responder.',
			'ninguém liga.',
			'possivelmente.',
			'nunca, nunca e nunca.',
			'tem uma chance.',
			'sim!',
			'lol não.',
			'problema teu.',
			'OBVIO QUE SIM QUE PERGUNTA BURRA.'];

		let result = Math.floor((Math.random() * replies.length));
		message.reply(replies[result])

	}
}