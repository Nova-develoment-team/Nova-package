module.exports = ({
    name: "redeempremium",
    code: `
    $if[$message[1]==]
    $elseif[$message[1]==30d]
    $setTimeout[30d;serverid:$guildid]
    $setTimeout[30d;userid:$authorid]
    $setTimeout[30d;servername:$servername]

    $description[<:success:935751098092884020> Activated Premium]
    $color[$getServerVar[color]]
    $setServerVar[premium;true]
    $setVar[premiumcode;]
    $onlyIf[$getServerVar[premium]==false;{description:<:error:935750920598351872> premium is already claimed for this server}{color:#2f3136}]
    $onlyIf[$message==$getVar[premiumcode];{description:<:error:935750920598351872> Premium code is invalid}{color:#2f3136}]
    
    $log[[DEBUG] :: $serverName Redeemed premium]
    $endelseif

    $elseif[$message[1]==6m]
    $setTimeout[182d;serverid:$guildid]
    $setTimeout[182d;userid:$authorid]
    $setTimeout[182d;servername:$servername]

    $description[<:success:935751098092884020> Activated Premium]
    $color[$getServerVar[color]]
    $setServerVar[premium;true]
    $setVar[premiumcode;]
    $onlyIf[$getServerVar[premium]==false;{description:<:error:935750920598351872> premium is already claimed for this server}{color:#2f3136}]
    $onlyIf[$message==$getVar[premiumcode6m];{description:<:error:935750920598351872> Premium code is invalid}{color:#2f3136}]
    
    $log[[DEBUG] :: $serverName Redeemed premium]
    $endelseif

    $elseif[$message[1]==1y]
    $setTimeout[365d;serverid:$guildid]
    $setTimeout[365d;userid:$authorid]
    $setTimeout[365d;servername:$servername]

    $description[<:success:935751098092884020> Activated Premium]
    $color[$getServerVar[color]]
    $setServerVar[premium;true]
    $setVar[premiumcode1y;]
    $onlyIf[$getServerVar[premium]==false;{description:<:error:935750920598351872> premium is already claimed for this server}{color:#2f3136}]
    $onlyIf[$message==$getVar[premiumcode1y];{description:<:error:935750920598351872> Premium code is invalid}{color:#2f3136}]
    
    $log[[DEBUG] :: $serverName Redeemed premium]
    $endelseif

    $endif
    `
})