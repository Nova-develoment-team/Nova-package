const gradient = require('gradient-string');
var figlet = require('figlet');
const Aoijs = require("aoi.js");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const chalk = require("chalk");
const up = chalk.green; // ok working color
const static = chalk.hex("#03fcca");// Staticstics and lines color
const blurplexd = chalk.hex("#7289DA"); // xd blurple color
const on = chalk.yellow; // process turned on color
const error = chalk.red;
const fs = require('fs');
let idkwhatisthis = false
const Discord = require("discord.js");
const { default: axios } = require('axios')
const exec = require('child_process').exec;
const config = require("./handler/botconfigs/config.js");

//Github puller (WARNING: BROKEN)
//if(true){
//  setInterval(async () => {
//      await exec(`git pull https://duckytutorials-team:config.git.PAT@github.com/nova-develoment-team/Nova-package.git`, async (error, stdout) => {
//          let response = (error || stdout);
//          if (!error) {
//                 if (!response.includes("Already up to date.")){
//                     console.log(`${chalk.red('[ GitHub ]')} Update found on github. downloading now!`);
//                     await client.channels.cache.get(966700897491120249).send({content: "**RESTARTING . . .**", embeds:[
//                         new Discord.MessageEmbed()
//                         .setTitle(`**[PULL FROM GITHUB]** New update on GitHub. Pulling.`)
//                         .setColor(`BLUE`)
//                         .setDescription(`Logs:\n\`\`\`\n${response}\`\`\``)
//                     ]})
//                    console.log(`${chalk.red('[ GitHub ]')} the new version had been installed. Restarting now . . .`)
//                     process.exit()
//                 }else {
//                     if(!idkwhatisthis) {console.log(`${chalk.green('[ GitHub ]')} Bot is up to date\n`); idkwhatisthis = true}
//                 }
//             }else
//                 console.log(`${chalk.red('[ GitHub ]')} Error: ${error}\n`)
//             }
//         })
//     }, 30000)
//   }



const msg = `Nova`;

figlet(msg, (err, data) => {
  console.log(gradient.pastel.multiline(data));
});

const bot = new Aoijs.Bot(config.Bot)

require('./website/dashboard/index.js')(bot,2416,'./Commands/Plugins/', 'NovaPass', '7122011')

bot.loadCommands(`./Commands/Plugins`)


const disbut = require('discord-buttons') 
disbut(bot.client)
//Allows to execute Command

bot.variables(require('./handler/botconfigs/Variables.js'))
require('./handler/botconfigs/status')(bot)
require('./handler/botconfigs/callbacks')(bot)