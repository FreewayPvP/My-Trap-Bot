const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const bot = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'give-nsfw',
            group: 'moderation',
            memberName: 'give-nsfw',
            description: 'Verify system for this bot',
            guildOnly: true
        });
    }

async run(message, args) {
    message.delete('10000')
    message.member.addRole('560151982891991051').then(console.log).catch(console.error);
    message.author.sendMessage({embed: {
        color: 3447003,
        description: `${message.author.username}(${message.author.id}) has now Recieved the 「NSFW PASS」`}}).then(message.delete('60000'));
  }};



module.exports = EmbedCommand;