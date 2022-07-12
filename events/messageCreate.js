const { PREFIX } = require(`../config.json`);
const { MessageEmbed } = require(`discord.js`)

module.exports = async (client, message) => {
	if(message.author.bot) return;
	if(!message.guild) return;

	if (!message.content.startsWith(PREFIX)) return;

	const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    

    let command = client.commands.get(cmd);
   
  
    if (command) 
        command.run(client, message, args);
	
};