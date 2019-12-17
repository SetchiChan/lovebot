const Discord = require('discord.js');
const Storage = require('discord-storage').Storage;
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('This is SCP. 1')
})

client.login(process.env.BOT_TOKEN);
