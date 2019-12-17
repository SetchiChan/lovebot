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

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
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

    if (message.content.startsWith("?cookie Roll")){
        var d = new Date();
        var currentDate = d.toLocaleTimeString();
        var chars = currentDate.split(" ").join(":").split(":");
        var currentTime = ((parseInt(chars[0], 10) * 2) * 3600) + (parseInt(chars[1], 10) * 60) + parseInt(chars[2], 10);
        let thetotal;

        if (chars[3] == "AM"){
            thetotal = (parseInt(chars[0], 10) * 3600) + (parseInt(chars[1], 10) * 60) + parseInt(chars[2], 10);
        } 
        else if (chars[3] == "PM")
        {
            thetotal = ((parseInt(chars[0], 10) * 2) * 3600) + (parseInt(chars[1], 10) * 60) + parseInt(chars[2], 10);
        }

        if (3 == 3){
            message.channel.send(thetotal);
            message.channel.send(currentTime);
            message.channel.send("Sorry, you still have" + (currentTime - 30460).toHHMMSS());
        } 
        //message.channel.send(d.toLocaleTimeString());
    }

    if (message.content.startsWith("?test")){
        let target = message.mentions.first() || message.guild.memebers.get(args[1]) || message.author;

        con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {

            let xp = rows[0].xp;
            message.channel.send(xp);
        });
    }
});   

bot.on('ready', () => {
    bot.user.setGame('TEsting stuff')
});


bot.login(process.env.BOT_TOKEN);
