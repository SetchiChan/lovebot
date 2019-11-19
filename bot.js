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

bot.once('ready', () => {
	bot.storage = new Storage(bot, '537127370423926844');
	bot.storage.sync().then(() => {
		message.channel.send("Hello");
	});
});

bot.on('ready', () => {
    bot.user.setGame('do "?commandlist" for commands! Welcome to the universe!')
})


bot.login(process.env.BOT_TOKEN);
