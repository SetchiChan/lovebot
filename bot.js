const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {
    const vartom = message.guild.members.random();
    const varnom = message.guild.members.random();

    if (message.content.startsWith("!mistletoe")) {
        message.channel.send("↑ \n| \nThe person above me and the person below me now have to kiss! \n| \n↓");
    }


});     

bot.on('ready', () => {
    bot.user.setGame('finding love')
})


bot.login(process.env.BOT_TOKEN);
