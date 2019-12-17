const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('This is SCP.')
})

client.login(process.env.BOT_TOKEN);
