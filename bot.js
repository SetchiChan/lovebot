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

    if(message.content.startsWith("?cookie help")){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "Hello there! Feeling lucky and hungry? Well, use the command '?cookie roll' to roll! You might win a cookie.",
            color: 15158332,
            fields: []
            }
       })
    }

    if(message.content.startsWith("?cookie roll")){
        var d = new Date();
        var currentDate = d.toLocaleTimeString();
        var chars = currentDate.split(" ").join(":").split(":");
        var currentTime = ((parseInt(chars[0], 10) * 2) * 3600) + (parseInt(chars[1], 10) * 60) + parseInt(chars[2], 10);
        //let thetotal;

        con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {

            if(!rows[0]) return message.channel.send("An Error has occured. Please try the command again in a few seconds.");

            if (currentTime-xp < 7200){
                var sec_num = parseInt(currentTime-xp, 10); // don't forget the second param
                var hours   = Math.floor(sec_num / 3600);
                var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                var seconds = sec_num - (hours * 3600) - (minutes * 60);

                if (hours   < 10) {hours   = "0"+hours;}
                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}

                message.channel.send("Sorry, you have " + hours+':'+minutes+':'+seconds + " remaining until you can roll.");
            } else {
                message.channel.send("UwU, you can roll. It is " + currentDate + " or " + currentTime);
                    if (err) throw err;
                    
                    let sql;
            
                    if (rows.length < 1){
                        sql = `INSERT INTO xp (id,xp) VALUES ('${message.author.id}', ${currentTime})`;
                    } else {
                        //let xp = rows[0].xp;
                        sql = `UPDATE xp SET xp = ${currentTime} WHERE id = '${message.author.id}'`;
                    }
            
                    con.query(sql);
            }
        });

        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "Sorry, this command isn't available to you yet! Estimated time until availability: null",
            color: 15158332,
            fields: []
            }
       })
    }
});   

bot.on('ready', () => {
    bot.user.setGame('Feeling jolly!')
});


bot.login(process.env.BOT_TOKEN);
