const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("578966008858148885")
setInterval(function() {
channel.send(`kimbo xd kimnob ffjghfjghfjghf fg fg fg f f gfg f gfg fg fg fg fgf f gf g hyj uk uik`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
