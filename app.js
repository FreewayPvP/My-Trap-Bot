const music = require('telk-music');
const { Discord, Client, MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');
const chalk = require('chalk');
const token = process.env.token;

const client = new Commando.Client({
    commandPrefix: '=',
    owner: ['367910644181368833'],
    unknownCommandResponse: false
});

music(client, {
  apikey: 'AIzaSyAUngFok2hzJs9KH-JuoNpOnM2qs_a8iCw', //dont show this to anyone!
    prefix: '=',
    global: false,
    maxQueueSize: 25,
    deletemsg: false,
  searchmsg: '[Trap] FINDING \`{song}\` . . . please wait',
  addedmsg: '[Trap] I HAVE Added **{song}** to the queue!',
  playmsg: '[Trap] :notes: . . . im now playing **{song}**!',
  loopmsg: '[Trap] LOOOP has been turned **{toggle}**!'
});

function GameStatus() {
      let status = [
        `over ${client.users.size} Users!`,
        `over Trap's & Femboy's`,
        `over you ;)`
      ]; 
      let rstatus = Math.floor(Math.random() * status.length);
      client.user.setActivity(rstatus, {
          "type": "WATCHING"
      });
    }; setInterval(GameStatus, 15000)

client.on("ready", () => {
  console.log(chalk.blue.bgRed.bold(`Bot has started, with ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`));
    client.user.setStatus('online');
});


client.on('guildMemberAdd', member => {
	  console.log(chalk.yellow.bgRed.bold(`User "${member.user.username}" has joined "${member.guild.name}"`));
	let target = member.guild.channels.find('name', 'chillroom')
	if (!target) return;
    target.send(`${member.user.tag} has been invited!\nWell, hello and welcome ${member.user.tag} onto this Server! I hope you will have a splendid stay and will make some new friends along the way.\nGet Starter by reading #rules and See our staff in #info, Select your Customizable Roles in #self-roles (Not Yet Added) `);
  });

const path = require('path');

client.registry
  .registerGroups([
    ['help', 'Help Page'],
    ['nsfw', 'NSFW Commands'],
    ['pages', 'All Pages'],
    ['moderation', 'Mod Commands']
  ])

    .registerDefaultGroups()
    .registerDefaultTypes()
    .registerDefaultCommands({ help: false, ping: true })
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.login(token);
