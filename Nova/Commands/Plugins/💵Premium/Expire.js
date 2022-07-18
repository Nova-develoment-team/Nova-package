module.exports =  ({
    type: "timeoutCommand",
    code: `
    $senddm[$timeoutdata[userid];{description:Oh no! Your premium subscription has expired! You can still use the bot, but you will not be able to use premium features. To renew your subscription, visit https://dashboard.nova-bot.tk/premium (Still in making for now dm duckey#4200)}{color:$getServerVar[color]}]}]
    $setServerVar[premium;false;$timeoutdata[guildid]]]
    
    $log[[DEBUG] :: $timeoutdata[servername]'s premium expired]
    `
})