// When hosting on glitch.com
/*
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
*/

const discord = require('discord.js');
const client = new discord.Client();
// When not hosting on glitch.com 
// const settings = require('./settings.json');
const fs = require('fs');

client.on('ready', () => {
  console.log(`
      Bot ready. Currently in:
      ${client.channels.size} Channels,
      ${client.guilds.size} Servers,
      With a ${client.users.size} total user.
      `)
});

const prefix ) ">";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  }

  if (message.content.startsWith(prefix + "av")) {
    let target = message.mentions.users.size === 0 ? message.author : message.guild.member(message.mentions.users.first()).user;
    return message.channel.send(target.avatarURL);
  }
});


//client.login(process.env.TOKEN)
client.login(settings.token);