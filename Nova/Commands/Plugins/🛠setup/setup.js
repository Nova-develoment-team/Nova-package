module.exports = ({
name: "setup",
code: `
$if[$message[1]==]
$description[What would you like to do? \n \n 
> ) >setup settings \n
> ) >setup ticket \n
> ) >setup modmail \n
> ) >setup (enable/disable) antiswear]

$elseif[$message[1]==settings]
> Ticket: $replacetext[$replacetext[$getServerVar[ticketsetup];true;<:On:968910683280404480>];false;<:off:968910682873544764>]
> Modmail: $replacetext[$replacetext[$getServerVar[isModmail];true;<:On:968910683280404480>];false;<:off:968910682873544764>]
> AntiSwear: $replacetext[$replacetext[$getServerVar[antiSwear];true;<:On:968910683280404480>];false;<:off:968910682873544764>]
$endelseif
$elseIf[$message[1]==ticket]
$awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
$sendMessage[**Which Category Do you want to make For Ticket System.
Provide the Category ID. 
This Command will be cancelled after** \`30 seconds\`.;no]
$onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
$suppressErrors[]
$endelseif
$elseIf[$message[1]==modmail]
$awaitMessages[$authorID;30s;everything;modmailsetup;Too slow! Pls run again]
Pls respond with the following: mod role id, admin role id, channel where you want it to send
$endelseif
$elseIf[$message[1]==enable-antiSwear]
$description[<:success:935751098092884020> successfully enabled the antiSwear plugin]
    $color[$GetServervar[color]]
    $setServerVar[antiSwear;true]
    $onlyIf[$getServerVar[antiSwear]==false;{description:<:error:935750920598351872> AntiSwear plugin already enabled}{color:$GetServervar[color]}]
    $onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:$GetServervar[color]}
    
    $log[[DEBUG] :: $username, used the enable-AntiSwear command]
$endelseIf
$elseIf[$message[1]==disable-antiSwear]
$description[<:success:935751098092884020> successfully disabled the antiSwear plugin]
    $color[$GetServervar[color]]
    $setServerVar[antiSwear;false]
    $onlyIf[$getServerVar[antiSwear]==true;{description:<:error:935750920598351872> AntiSwear plugin already Disable}{color:$GetServervar[color]}]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:$GetServervar[color]}]

$log[[DEBUG] :: $username, used the disable-antiswear command]
$endelseif
$endif
`
})