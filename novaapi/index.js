//packages

const { Database } = require("quickmongo");
var https = require('https')
const { exec } = require("child_process");
const express = require('express');
const bodyParser = require("body-parser");
const deeznuts = require("./assets/8ball.json")
const gay = require("./assets/gay.json")
const joke = require("./assets/dadjokes.json")
const num = require("./assets/num.json")
const got = require('got')
const keysList = require("/root/novastuff/novaapi/assets/keys.js").keys
const { Canvas } = require('canvas-constructor/cairo')
const fetch = require('node-fetch');
const canvas = require('canvas');
const axios = require('axios');
const chalk = require("chalk")
const database = 'MongoDB';
const mongoose = require('mongoose')
const config = require('./assets/config.json')
const db = new Database(config.api_settings.mongodb);

//colors
const online = chalk.green;
const error = chalk.red;
const info = chalk.blue;
const warning = chalk.yellow;
const lcsep = chalk.yellow;
const databaseSeperator = chalk.yellow

//stats

//loaded checker
console.log(lcsep('──────[ Loaded checker ] ──────'))
console.log(info('Home page loaded'));
console.log(info('8ball api loaded'));
console.log(info('Number gen api loaded'));
console.log(info('Gay api loaded'));
console.log(info('Joke api loaded'));
console.log(info('Twiter api loaded'));
console.log(info('Nsfw api loaded'));
console.log(lcsep('───────────────────────────────'))
console.log(" ")

const app = express();

//mongodb database. DO NOT CHANGE!!!! it works
db.on("ready", () => {
console.log(databaseSeperator("───────────────────────── [ Database ] ─────────────────────────"))
console.log(online(`${database} Gateway: Connecting.`))
console.log(online(`${database} Gateway: Connecting..`))
console.log(online(`${database} Gateway: Connecting...`))
console.log(online(`${database} Gateway: Connected`))
console.log(info(`${database} Gateway: Getting Ready, loading database value...`))
console.log(databaseSeperator("────────────────────────────────────────────────────────────────"))
});

db.connect();

require("./routes")(app)

const PORT = 5377

app.use(bodyParser.json());

//endpoints
app.get('/fun/8ball', (req, res) => {      
    console.log(info('Someone used the 8ball api'))
const {key} = req.query;
if (!key || !keysList.includes(key)) return res.json({ error: "invalid key" })
    
    rand_deeznuts = deeznuts[Math.floor(Math.random() * deeznuts.length)]
    res.json({ response: rand_deeznuts })
    db.add("req_fun", 1)
        db.add("req_8ball", 1);

});


app.get('/fun/gay', (req, res) => {   
console.log(info('Someone used the gay api'))  
    
const {key} = req.query;
if (!key || !keysList.includes(key)) return res.json({ error: "invalid key" })
                                        
    rand_gay = gay[Math.floor(Math.random() * gay.length)]
    res.json({ response: rand_gay })
    
    db.add("req_fun", 1)
        db.add("req_gay", 1);
});

app.get('/fun/joke', (req, res) => {       
console.log(info('Someone used the joke api'))
    
const {key} = req.query;
if (!key || !keysList.includes(key)) return res.json({ error: "invalid key" })
  
    rand_joke = joke[Math.floor(Math.random() * joke.length)]
    res.json({ response: rand_joke })
    
    db.add("req_fun", 1)
        db.add("req_joke", 1);});


app.get('/misc/num', (req, res) => { 
console.log(info('Someone used the num api'))
    
const {key} = req.query;
if (!key || !keysList.includes(key)) return res.json({ error: "invalid key" })
  
    rand_num = num[Math.floor(Math.random() * num.length)]
    res.json({ response: rand_num })
    
    db.add("req_misc", 1)
        db.add("req_num", 1);
});

app.get('/fun/twiter/:feed', async (req, res) => {

    console.log(info('Someone used the twiter api'))
    
const {key} = req.query;
if (!key || !keysList.includes(key)) return res.json({ error: "invalid key" })
    
    const img = await canvas.loadImage('https://teckspace.files.wordpress.com/2011/08/twitter1.jpg')

    let image = new Canvas(550, 267)
    .printImage(img, 0, 0, 550, 267)
    .setTextFont('28px Impact')
    .printText(req.params.feed, 40, 145)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})//setting content type as png image!
    res.send(image)//sending the image!

    db.add("req_fun", 1)
        db.add("req_twitter", 1);
});

app.get('/api', (req,res) => {
    res.sendFile('api.html', {root: __dirname})
});

app.get('/', (req, res) => {
    console.log(info('Someone is on the homepage'))

	res.sendFile('index.html', {root: __dirname })
});

app.get('/*',(req,res)=>{
res.send({error:`Hm...... The endpoint you put in is invalid`})
})

app.use(function (err, req, res, next) {
    console.error(error(err.stack))
    res.status(500).send('{response: "Something is still in writing or code failure!"}')
    
  })






//port listener
app.listen(6229, () => {
  console.log(online("┌────────────── [ Staticstics ] ──────────────┐"))
  console.log(online(`│ NodeJS: 16.0.1                              │`))
  console.log(online("├─────────────────────────────────────────────┤"))
  console.log(online("│ Successfully loaded all elements and codes  │"))
  console.log(online("├─────────────────────────────────────────────┤"))
  console.log(online("│ Nova api is up! ✅                           │"))
  console.log(online("├─────────────────────────────────────────────┤"));
  console.log(online("│ Connected to - https://api.nova-bot.tk ✅    │"));
  console.log(online("└─────────────────────────────────────────────┘"));
  console.log(" ")
})
 