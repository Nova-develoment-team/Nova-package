const akaneko = require('akaneko');
const keysList = require('../assets/keys.js').keys
const mongoose = require('mongoose')
const config = require("/root/novastuff/novaapi/assets/config.json");
const { Database } = require('quickmongo')
const db = new Database(config.api_settings.mongodb);
db.connect();

module.exports = {
  name: "nsfw/ass",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    var image = await akaneko.nsfw.ass()
    res.json({ 
      url: image,  
    })
          db.add("reqs_nsfw",1)
          db.add("reqs_Ass", 1)  }
}