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
    console.log("Connected to database.");
});

function generateCookie(){
    return Math.floor(Math.random() * (30-20 + 1)) + 20;
}

bot.on('message', async message => {
    if(message.author.bot) return;

    con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
        if (err) throw err;
        
        let sql;

        if (rows.length < 1){
            sql = `INSERT INTO xp (id,xp) VALUES ('${message.author.id}', ${generateCookie()})`;
        } else {
            let xp = rows[0].xp;
            sql = `UPDATE xp SET xp = ${xp + generateCookie()} WHERE id = '${message.author.id}'`;
        }

        con.query(sql)
    });

    if (message.content.startsWith("write")){
        var d = new Date();
        var currentDate = d.toLocaleTimeString()
        var chars = currentDate.split(" ").join(":").split(":");
        let total;
        //EXPECTED (8:04:41 AM)
        if (chars[3] == "AM"){
            total = (chars[1] * 60) + chars[2];
            message.channel.send(chars[0] * 3600);
            message.channel.send(chars[1] * 60);
            message.channel.send(chars[2]);
            message.channel.send(total);
        } 
        else if (chars[3] == "PM")
        {
            total = (parseInt(chars[0], 10) * 3600) + (parseInt(chars[1], 10) * 60) + parseInt(chars[2], 10)
            message.channel.send(total);
        }
        message.channel.send(d.toLocaleTimeString());
    }
});   

bot.on('ready', () => {
    bot.user.setGame('TEsting stuff')
});


bot.login(process.env.BOT_TOKEN);
