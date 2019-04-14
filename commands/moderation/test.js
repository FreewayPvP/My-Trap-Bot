const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()



class GetAltCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'zenalts',
            group: 'cool',
            memberName: 'zenalts',
            description: 'Every 30Min 1 Free ALT!',
            guildOnly: true,
            throttling: {
                usages: 1,
                duration: 1800
            },
            args: [{
            key: 'fagg',
            prompt: 'What role do you want?',
            type: 'string'
        }]
        })
    };

    


async run(message, args) {
    var fagg = Math.floor(Math.random() * 4) +1
    if (fagg == 1) {
        message.channel.send({embed: {
            color: 3447003,
            description: "Alt 1",
          }
        })
        }
        if (fagg == 2) {
            message.channel.send({embed: {
                color: 3447003,
                description: "Alt 2",
              }
            })
            }
            if (fagg == 3) {
                message.channel.send({embed: {
                    color: 3447003,
                    description: "Alt 3",
                  }
                })
                }    if (fagg == 4) {
                    message.channel.send({embed: {
                        color: 3447003,
                        description: "Alt 4",
                      }
                    })
                    }
}}

module.exports = GetAltCommand;
