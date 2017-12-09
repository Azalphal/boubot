if (message.content.startsWith(prefix + "av")) {
    let target = message.mentions.users.size === 0 ? message.author : message.guild.member(message.mentions.users.first()).user;
    return message.channel.send(target.avatarURL);
  }