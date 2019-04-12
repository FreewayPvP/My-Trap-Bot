const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const bot = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'priv',
            group: 'moderation',
            memberName: 'priv',
            description: 'Verify system for this bot',
            guildOnly: true,
            args: [{
            key: 'text',
            prompt: 'What do you want to Mass DM People?',
            type: 'string'
        }]
        });
    }
    
    hasPermission(msg) {
    if (!this.client.isOwner(msg.author)) return 'Only the bot owner(s) may use this command.';
    return true;
}

async run(message, args) {
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
    });
}

};
