const client = require("nekos.life")
const neko = new client()
const keysList = require("/root/novastuff/novaapi/assets/keys.js").keys
const { Database } = require('quickmongo')
const mongoose = require('mongoose')
const config = require("/root/novastuff/novaapi/assets/config.json");
const db = new Database(config.api_settings.mongodb);
db.connect();

module.exports = {
  name: "nsfw/futanari",
  run: async(req,res) => {
    var {key} = req.query;
    if(!keysList.includes(key) || !key) {
      return res.json({ error: require("../assets/utils.json").KeyError })
    }
    var futa = await neko.nsfw.futanari()
    res.json({ url: futa.url })
          db.add("reqs_nsfw",1)
    db.add("reqs_Futanari", 1);

  }
}