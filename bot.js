const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {
    const vartom = message.guild.members.random();
    const varnom = message.guild.members.random();

    const ship1 = message.guild.members.random();
    const ship2 = message.guild.members.random();
    const ship3 = message.guild.members.random();

    var rademor = getRandomInt(101)
    var rademorr = 200 - rademor

    const rando_imgs = [
        'youtube.com',
        ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };

    if (message.content.startsWith("!ship")) {
        message.channel.send("Congratulations to our new couple! " + vartom + " and " + varnom + " are a beautiful couple!");
    }


});     

bot.on('ready', () => {
    bot.user.setGame('finding love')
})


bot.login(process.env.BOT_TOKEN);
