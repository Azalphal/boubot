exports.run = (client, message) => {
    message.channel.send(`Pong, \`${Date.now() - message.createdTimestamp} ms\``)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping command.',
    usage: 'ping'
  };