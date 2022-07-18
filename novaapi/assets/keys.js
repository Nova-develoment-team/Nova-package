const config = require("/root/novastuff/novaapi/assets/config.json");

// const Database = require("@replit/database");
// const db = new Database();
module.exports = {
  keys: [
    config.api_key.masterkey, // Owner key aka master key
    config.api_key.tester,
    '' // Tester and developer key   
            // Testing key here
      ]
}
// yall have leaked my API keys, this means war.