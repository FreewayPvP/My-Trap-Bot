const { Command } = require('../../commando');
const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const request = require('snekfetch');
const { hugP } = require('../../assets/json/actions.json');

module.exports = class HugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            aliases: ['cuddle'],
            group: 'nsfw',
            memberName: 'hug',
            guildOnly: true,
            description: 'Hugs the user you mentioned!',
            examples: ['~hug <user>'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    async run(message, args, client) {
        var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var hug = hugP[Math.round(Math.random() * (hugP.length - 1))]

        if (!recipient) {
                      await request.get('https://nekos.life/api/v2/img/hug')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: `You can't Hug yourself, But I'll hug you, ${message.author}~`,
                      },
                      image: {
                          url: r.body.neko
                      }
                  }

	}))}
          

        } else if (message.mentions.users.first() == message.author) {
                      await request.get('https://nekos.life/api/v2/img/hug')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: `You can't Hug yourself, But I'll hug you, ${message.author}~`,
                      },
                      image: {
                          url: r.body.neko
                      }
                  }

	}))}

        } else if (message.mentions.users.first() == this.client.user) {
                      await request.get('https://nekos.life/api/v2/img/hug')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: `ల(\*´= ◡ =｀\*) Such a warm hug..thank you~~ Nyaa~~`,
                      },
                      image: {
                          url: r.body.neko
                      }
                  }

	}))}

        } else {
            const embed = new Discord.MessageEmbed()
                      await request.get('https://nekos.life/api/v2/img/hug')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: `${message.author} hugs ${recipient}!`,
                      },
                      image: {
                          url: r.body.neko
                      }
                  }

	}))}
