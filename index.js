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
    'dick',
    'ass',
    'cum',
    'penis',
    'dildo',
    'vegina',
    'condom',
    'condum',
    'wtf',
    'lmao',
    'lma0',
    'crap',
    'lmfoa',
    'lmfa0',
    'hell'
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
            let logschannel = message.guild.channels.find(`name`, "logs");
		    if(!logschannel) return message.channel.send("Please create a '#logs' channel!");
            message.delete().catch(O_o=>{});
            message.channel.send("**__VULGAR DELETED__**").then(msg => msg.delete(2000));
            logschannel.send(`:skull_crossbones: Cleared ${message.author.username}'s message.`)
            return;
        }
    }
});

bot.login(process.env.BOT_TOKEN);
