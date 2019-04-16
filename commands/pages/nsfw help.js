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
      description: "y>NekoLewd\ny>NekoLewdGif\n\ny>Feet\ny>FeetGif\n\ny>Pussy\ny>Cum\ny>CumGif\ny>Boobs\ny>SmallBoobs\ny>SoloGif\ny>Anal\ny>Femdom\n\ny>FoxGirl\ny>Yuri\ny>Trap\ny>Futanari\ny>Blowjob\ny>Spank\n\ny>Hentai\ny>HentaiGif",
      footer: {
        text: "© TrapHouse Staff"
      }
    }
  })
}};

module.exports = EmbedCommand;