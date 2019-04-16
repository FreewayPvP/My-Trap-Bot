const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const bot = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'nsfw',
            group: 'pages',
            memberName: 'nsfw',
            description: 'NSFW Help Page!',
            guildOnly: false
        });
    }

async run(message, args) {
  message.channel.send({embed: {
      color: 3447003,
      title: "TrapHouse | NSFW Help Page",
      description: "=NekoLewd\n=NekoLewdGif\n\n=Feet\n=FeetGif\n\n=Pussy\n=Cum\n=CumGif\n=Boobs\n=SoloGif\n=Anal\n=Femdom\n\n=FoxGirl\n=Yuri\n=Trap\n=Futanari\n=Blowjob\n=Spank\n\n=Hentai\n=HentaiGif",
      footer: {
        text: "© TrapHouse Staff"
      }
    }
  })
}};

module.exports = EmbedCommand;
