const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");

bot.msgs = require("./scores.json");

bot.on('message', async message => {
    if (message.content.startsWith("write")){
        editedmessage = message.content.slice(6);
        bot.msgs[message.author.username] = {
            message: editedmessage
        }
        fs.writeFile(".scores.json", JSON.stringify(bot.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send('UwU Notices Buldge?');
        })
    }
});     

bot.on('ready', () => {
    bot.user.setGame('asdsd Dued')
})


bot.login(process.env.BOT_TOKEN);
