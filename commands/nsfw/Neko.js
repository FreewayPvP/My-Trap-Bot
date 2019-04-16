//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const request = require('snekfetch');

module.exports = class AsciiTextCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'neko',
      group: 'nsfw',
      memberName: 'neko',
      description: 'Turns text into ascii art.',
      examples: ['ascii hello']

    }
  )}

    async run(message, args, client) {

          await request.get('https://nekos.life/api/neko')
              .then(r => message.channel.send({
                  embed: {
                      author: {
                          name: "Nekos >.<",
                      },
                      image: {
                          url: r.body.neko
                      }
                  }

          }).catch(e => console.warn('wew tf happened here ' + e))
        )}};
      