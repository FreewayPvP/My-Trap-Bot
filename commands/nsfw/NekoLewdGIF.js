//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const request = require('snekfetch');

module.exports = class AsciiTextCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'nekolewdgif',
      group: 'nsfw',
      memberName: 'nekolewdgif',
      description: 'Turns text into ascii art.',
      examples: ['ascii hello']

    }
  )}

    async run(message, args, client) {

      if (message.channel.nsfw) {
          await request.get('https://nekos.life/api/lewd/nsfw_neko_gif')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: "Lewd Nekos >.<",
                      },
                      image: {
                          url: r.body.neko
                      }
                  }
              }).catch(e => console.warn('wew tf happened here ' + e)));
  
      } else {
         await message.channel.send({
              embed: {
                  description: "o.O lewd nekos are shy they can only be found in discord NSFW channels. mew!"
              }
          }).catch(e => console.warn('wew tf happened here ' + e))
      }
  };


}
      