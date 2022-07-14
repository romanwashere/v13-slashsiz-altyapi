module.exports = {
	name: `taslak`,

	run: async(client, message, args) => {

		const { author, guild, channel } = message;

		message.reply({ content: `Merhaba! ${author.tag}` })


	}

};
