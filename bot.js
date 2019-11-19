const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {
  
});     

bot.on('ready', () => {
    bot.user.setGame('yes?')
})


bot.login(process.env.BOT_TOKEN);
