const discord = require('discord.js');
const client = new discord.Client();
const settings = require('./settings.json');
const fs = require('fs');

client.on('ready', () => {
  console.log(`
      Bot ready. Currently in:
      ${client.channels.size} Channels,
      ${client.guilds.size} Servers,
      With a ${client.users.size} total user.
      `)
});

client.on("message", (message) => {
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  if (message.content.startsWith(settings.prefix + "ping")) {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  }

  if (message.content.startsWith(settings.prefix + "av")) {
    let target = message.mentions.users.size === 0 ? message.author : message.guild.member(message.mentions.users.first()).user;
    return message.channel.send(target.avatarURL);
  }
});



client.login(settings.token);