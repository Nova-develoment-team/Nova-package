const akaneko = require('akaneko');
const keysList = require("/root/novastuff/novaapi/assets/keys.js").keys
const { Database } = require('quickmongo')
const mongoose = require('mongoose')
const config = require("/root/novastuff/novaapi/assets/config.json");
const db = new Database(config.api_settings.mongodb);
db.connect();

module.exports = {
  name: "nsfw/hentai",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    var image = await akaneko.nsfw.hentai()
    res.json({ 
      url: image,  
    })
          db.add("reqs_nsfw",1)
          db.add("reqs_Hentai", 1)
  }
}