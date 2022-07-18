const akaneko = require('akaneko');
const keysList = require('../assets/keys.js').keys
const { Database } = require('quickmongo')
const mongoose = require('mongoose')
const config = require('/root/novastuff/novaapi/assets/config.json')
const db = new Database(config.api_settings.mongodb);
module.exports = {
  name: "nsfw/lewdneko",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    const image = await akaneko.lewdNeko()
    res.json({ 
      url: image,  
    })
    db.add("reqs_nsfw",1)
    db.add("reqs_lewdneko",1)
    }
}
