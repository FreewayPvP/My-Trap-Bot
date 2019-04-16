//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const request = require('snekfetch');

module.exports = class AsciiTextCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'pussy',
      group: 'nsfw',
      memberName: 'pussy',
      description: 'Turns text into ascii art.',
      examples: ['ascii hello']

    }
  )}

    async run(message, args, client) {

          await request.get('https://nekos.life/api/v2/img/pussy')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: "Meow! >.<",
                      },
                      image: {
                          url: r.body.url
                      }
                  }

          }).catch(e => console.warn('wew tf happened here ' + e))
        )}};
      