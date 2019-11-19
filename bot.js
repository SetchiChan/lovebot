const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {

    if (message.content.startsWith("tacobell")) {
        message.channel.send('Yes?');
    }    

});     

bot.on('ready', () => {
    bot.user.setGame('do "?hot')
})


bot.login(process.env.BOT_TOKEN);
