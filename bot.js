const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const scores = require("./scores.json");
typeof scores; // object

bot.on('message', async message => {
    if (message.content.startsWith("!cookie Time")){
        if(message.author.bot) return;
        if(!scores[message.author.tag]){ 
            scores[message.author.id] = { 
                money: 0 
            };
        }
        scores[message.author.tag].money += 25;
        fs.writeFileSync("./scores.json", JSON.stringify(scores));
        message.channel.send('UwU Notices Buldge?');
    }
});     

bot.on('ready', () => {
    bot.user.setGame('asdsd')
})


bot.login(process.env.BOT_TOKEN);
