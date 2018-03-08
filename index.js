const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const badWords = [
    'nigga',
    'nigger',
    'fuck',
    'shit',
    'asshole',
    'cunt',
    'fag',
    'fuk',
    'fck',
    'fcuk',
    'assfuck',
    'assfucker',
    'fucker',
    'dick'
];

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    for (i = 0; i < badWords.length; i++) {
        var rgx = new RegExp(badWords[i], 'gi');
        if (rgx.test(message.content)) {
            message.delete().catch(O_o=>{});
            message.channel.send("**__VULGAR DELETED__**").then(msg => msg.delete(2000));
            return;
        }
    }
});

bot.login(process.env.BOT_TOKEN);
