const Discord = require('discord.js');
const bot = new Discord.Client();
const Storage = require('discord-storage').Storage;

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.once('ready', () => {
	bot.storage = new Storage(bot, '537127370423926844');
	bot.storage.sync().then(() => {
		bot.channel.get('537127370423926844').send("AHHH?");
	});
});

bot.on('ready', () => {
    bot.user.setGame('IM READY!!!')
})

bot.login(process.env.BOT_TOKEN);
