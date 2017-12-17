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
const config = require('./config.json');
const fs = require('fs');
const moment = require('moment');
require('.core/util/eventLoader.js')(client);

client.on('ready', () => {
  console.log(`
      Bot ready. Currently in:
      ${client.channels.size} Channels,
      ${client.guilds.size} Servers,
      With a ${client.users.size} total user.
      `)
});
































/*client.commands = new discord.Collection();
client.aliases = new discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`Loading Command: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});*/

/*
client.elevation = message => {
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', config.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', config.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};*/

/*
const prefix = ">";
client.on("message", (message) => {
  if (!message.content.indexOf(prefix) !== 0 || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  }

  if (message.content.startsWith(prefix + "av")) {
    let target = message.mentions.users.size === 0 ? message.author : message.guild.member(message.mentions.users.first()).user;
    return message.channel.send(target.avatarURL);
  }

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});*/



client.login(process.env.TOKEN)
//client.login(config.token);