const client = require("nekos.life")
const neko = new client()
const keysList = require("/root/novastuff/novaapi/assets/keys.js").keys
const { Database } = require('quickmongo')
const mongoose = require('mongoose')
const config = require("/root/novastuff/novaapi/assets/config.json");
const db = new Database(config.api_settings.mongodb);
db.connect();


module.exports = {
  name: "nsfw/boobs",
  run: async(req,res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    const BOOBAS = await neko.nsfw.boobs();
    res.json({ url: BOOBAS.url })
          db.add("reqs_nsfw",1)
    db.add("reqs_Boobs", 1);  }
}