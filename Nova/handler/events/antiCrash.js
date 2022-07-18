const chalk = require('chalk')

const error = chalk.red

module.exports = (bot) => {
    process.on('unhandledRejection', (reason, p) => {
        console.log(error(' [antiCrash] :: Unhandled Rejection/Catch'));
        console.log(error(reason, p));
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(error(' [antiCrash] :: Uncaught Exception/Catch'));
        console.log(error(err, origin));
    }); process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(error(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)'));
        console.log(error(err, origin));
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log(error(' [antiCrash] :: Multiple Resolves'));
    });
}
