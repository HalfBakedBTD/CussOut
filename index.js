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
	    if(!logschannel) return message.channel.send("Please create a '#logs' channel so I can report and delete vulgar!");
            message.delete().catch(O_o=>{});
            message.channel.send("**__VULGAR DELETED__**").then(msg => msg.delete(2000));
            logschannel.send(`:skull_crossbones: Cleared ${message.author.username}'s message.`)
            return;
        }
    }
  if (message.content === ',help') {
    message.channel.send("DMed you! Check it out for all the info!")
    return message.author.send("**My Commands:** *all commands start with `,` prefix.*\n\t`help` shows this message.\n\t`test` tests if the bot is properly set up.\n\t`invite` gives an invite link to add the bot to your server.\n\n**Info:**\n\tThis bot was created by <@346687165868015616> who was allways finding trouble with having to type all the cuss words into Dyno, Mee6, or any other bot which you can add banned words to. He allways found a lot of trouble with these bots so finally he decided to do something about it. This bot was created soon after and now will work to bleep out all them curse words used by *cancer* discord users. This bot is currently a work in progress so if you find any vulgar which the bot doesnt delete, please DM <@346687165868015616> with the glitch!\n\n\n**NOTE:** The bot may only delete vulgar 90% of the time. It reports the user who cusses 100% of the time.")
  }
  if (message.content === ',invite') {
    message.channel.send("I DMed you a link to add me to your server!")
    return message.author.send("**Invite me** to your discord:\n:link: https://discordapp.com/api/oauth2/authorize?client_id=421154212899192832&permissions=8&scope=bot :link:")
  }
  if (message.content === ',inv') {
    message.channel.send("I DMed you a link to add me to your server!")
    return message.author.send("**Invite me** to your discord:\n:link: https://discordapp.com/api/oauth2/authorize?client_id=421154212899192832&permissions=8&scope=bot :link:")
  }
  if (message.content === ',test') {
    let logschannel = message.guild.channels.find(`name`, "logs");
    if(!logschannel) return message.channel.send("You don't have a **#logs** channel in the server! Please create one then type `,test`!");
    message.channel.send("**__ALL SYSTEMS OPERATIONAL!__** In other words you did everything right and CussOut can run properly!")
  }
});

bot.login(process.env.BOT_TOKEN);
