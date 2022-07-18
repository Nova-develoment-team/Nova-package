module.exports = [{
name: "user-invites",
code: `
$if[$message==]
$username's invite info
Total: $sum[$userInfo[real];$userInfo[fake]]
Real: $userInfo[real]
Fake: $userInfo[fake]
---------------------
Invited By: $userTag[$userInfo[inviter]]

$log[[DEBUG] :: $username, used the user-invites command]]
$else
$username[$get[user]]'s invite info
Total: $sum[$userInfo[real];$userInfo[fake;$get[user]]]
Real: $userInfo[real;$get[user]]
Fake: $userInfo[fake;$get[user]]
---------------------
Invited By: $userTag[$userInfo[inviter]]

$let[user;$mentioned[1]]
$endIf`
,
}, {
name: "reset-invites",
code: `
$description[Successfully reset invites for $mentioned[1]]
$resetInvites[$guildID;$mentioned[1]]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:$getServerVar[color]}
$suppressErrors[{description:you diden't mention the person to remove the invites from!}{color:$getvar[color]}]
$color[$getServerVar[color]]

$log[[DEBUG] :: $username, used the reset-invites command]]`,
}]