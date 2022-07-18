const fs = require("fs")
const chalk = require("chalk")

const info = chalk.blue

module.exports = function (app){
  fs.readdirSync(__dirname).forEach(function(file){
    if (file === "index.js") return;
    let name = file.substr(0, file.indexOf("."));
    const route = require(`./${name}`);
    app.get(`/${route.name}`, async (req, res) => {
      console.log(info(`Someone used /${route.name} endpoint`));
      console.log(info(`Somebody sure was horny`))
      route.run(req, res);
    });
  })
};
