//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const request = require('snekfetch');

module.exports = class YuriCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'futanari',
      group: 'nsfw',
      memberName: 'futanari',
      description: 'feet are Best :3',

    }
  )}

    async run(message, args, client) {

      if (message.channel.nsfw) {
          await request.get('https://nekos.life/api/v2/img/futanari')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: "Futa's aren't gay! :3 | >.<",
                      },
                      image: {
                         url: r.body.url
                      }
                  }
              }).catch(e => console.warn('wew tf happened here ' + e)));
  
      } else {
         await message.channel.send({
              embed: {
                  description: "o.O lewd Futa's are shy they can only be found in discord NSFW channels."
              }
          }).catch(e => console.warn('wew tf happened here ' + e))
      }
  };


}
      