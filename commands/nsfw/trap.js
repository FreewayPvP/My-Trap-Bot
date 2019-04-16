//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const request = require('snekfetch');

module.exports = class YuriCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'trap',
      group: 'nsfw',
      memberName: 'trap',
      description: 'feet are Best :3',

    }
  )}

    async run(message, args, client) {

      if (message.channel.nsfw) {
          await request.get('https://nekos.life/api/v2/img/trap')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: "Traps are gay! | >.<",
                      },
                      image: {
                         url: r.body.url
                      }
                  }
              }).catch(e => console.warn('wew tf happened here ' + e)));
  
      } else {
         await message.channel.send({
              embed: {
                  description: "o.O lewd Traps are shy they can only be found in discord NSFW channels."
              }
          }).catch(e => console.warn('wew tf happened here ' + e))
      }
  };


}
      