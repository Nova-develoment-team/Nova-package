const akaneko = require('akaneko');
//const keyz = require('../assets/keys.js').keys
const { Database } = require('quickmongo')
const mongoose = require('mongoose')
const config = require('/root/novastuff/novaapi/assets/config.json')
const db = new Database(config.api_settings.mongodb);
module.exports = {
  name: "test/lewdbomb",
  run: async(req, res) => {
    let {key} = req.query;
    if (key !== process.env.faizen_key) return res.json({ error: "Owner only endpoint!" })
    var {limit} = req.query;
    if(isNaN(limit)) return res.json({ error: "Not a number" })
    const image = await akaneko.lewdBomb(limit)
    res.json({ 
      data: image  
    })
    }
}
