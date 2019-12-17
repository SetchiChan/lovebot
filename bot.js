const Discord = require('discord.js');
const Storage = require('discord-storage').Storage;
const client = new Discord.Client();

client.once('ready', () => {
	client.storage = new Storage(client, '509890599093141516');
	client.storage.sync().then(() => {
        client.channels.get("509890599093141516").send("Hello mate!")
	});
}); 

client.on('ready', () => {
    bot.user.setGame('WIP? Mate?')
})

client.login(process.env.BOT_TOKEN);
