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
    con.query("SHOW TABLES",console.log);
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
        }
        sql = `UPDATE xp SET xp = ${xp + generateCookie()} WHERE id = '${message.author.id}'`;
        con.query(sql, console.log)
    });

    if (message.content.startsWith("write")){
        
    }
});   

bot.on('ready', () => {
    bot.user.setGame('TEsting stuff')
});


bot.login(process.env.BOT_TOKEN);
