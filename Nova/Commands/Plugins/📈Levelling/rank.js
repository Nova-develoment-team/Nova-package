module.exports = ({
    name:"rank",
    aliases:"level",
    category:"Levelling",
    description:"Check the rank of a user.",
    usage:"rank <optional user>",
    code:`$if[$message==]
$attachment[https://api2.nova-bot.tk/rankcard?avatar=$replaceText[$userAvatar[$findmember[$message;yes]];webp;png]&name=$get[username]&exp=$getUserVar[exp;$get[user]]&maxexp=$getUserVar[req;$get[user]]&level=$getUserVar[rank;$get[user]]&rank=%23$getLeaderboardInfo[rank;$get[user];user;top]&text=#FFFF00&avatarborder=&avatarbackground=&bar=#f8d64f&barbackground=#f8d64f&background=hex&border=&image=url]
    $let[user;$authorid]
    $let[username;$username]
    $else
$suppresserrors
$attachment[https://api2.nova-bot.tk/rankcard?avatar=$replaceText[$userAvatar[$get[user]];webp;png]&name=$username[$get[user]]&exp=$getUserVar[exp;$get[user]]&maxexp=$getUserVar[req;$get[user]]&level=$getUserVar[rank;$get[user]]&rank=%23$getLeaderboardInfo[rank;$get[user];user;top]&text=#FFFF00&avatarborder=&avatarbackground=&bar=#f8d64f&barbackground=#f8d64f&background=hex&border=&image=url]
$let[user;$mentioned[1]]
$let[username;$username[$mentioned[1]]]
$endif
$onlyif[$getservervar[levelling]==true;The levelling system is disabled!]

$log[[DEBUG] :: $username, used the rank command]`})