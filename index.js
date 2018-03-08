const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if (message.content.toLowerCase().includes('fuck')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('dick')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('cunt')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('nigger')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('nigga')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('fu')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('crap')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('bitch')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('wtf')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('lmao')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
  if (message.content.toLowerCase().includes('lma')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`**__VULGAR DELETED__**`).then(msg => msg.delete(2000));
  }
});

bot.login(process.env.BOT_TOKEN);
