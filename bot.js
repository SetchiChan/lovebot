const Discord = require('discord.js');
const bot = new Discord.Client();

const mysql = require("mysql");

var con = mysql.createConnection({
    host: "sql9.freemysqlhosting.net",
    user: "	sql9316027",
    password: "bmLPP5bgfb",
    database: "sql9316027"
});

function sendMessage(){
    bot.on('message', async message => {
        bot.channels.get("509890599093141516").send("Connected to database.");
    });  
}
con.connect(err => {
    if(err) throw err;
    sendMessage();
    console.log("Connected to database.");
})

bot.on('message', async message => {
    if (message.content.startsWith("write")){
        
    }
});   

bot.on('ready', () => {
    bot.user.setGame('TEsting stuff')
})


bot.login(process.env.BOT_TOKEN);
