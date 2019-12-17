const Discord = require('discord.js');
const bot = new Discord.Client();

const mysql = require("mysql");

var con = mysql.createConnection({
    host: "sql9.freemysqlhosting.net",
    user: process.env.SQL_NAME,
    password: process.env.SQL_PASSWORD,
    database: "sql9316030"
});

con.connect(err => {
    if(err) throw err;
    bot.on('message', async message => {
        bot.channels.get("509890599093141516").sendMessage("Connected to database.");
    });  
    console.log("Connected to database.");
    con.query("SHOW TABLES",console.log);
});

function generateCookie(){
    return Math.floor(Math.random() * (30-20 + 1)) + 20;
}

bot.on('message', async message => {

    con.query(`SELECT * FROM id ='${message.author.id}'`, (err, rows) => {
        if (err) throw err;
        console.log(rows);
    })

    if (message.content.startsWith("write")){
        
    }
});   

bot.on('ready', () => {
    bot.user.setGame('TEsting stuff')
});


bot.login(process.env.BOT_TOKEN);
