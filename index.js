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
  
  if (message.content.toLowerCase().includes('ping')) {
    message.delete().catch(O_o=>{});
    message.channel.send(`PING!`).then(msg => msg.delete(2000));
  }
});

bot.login(process.env.BOT_TOKEN);
