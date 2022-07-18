module.exports = {
  name: "stats",
  aliases: ["stats","clientinfo"],
  code: `$thumbnail[$userAvatar[$clientID]]
  $color[$GETsERVERvAR[color]]
  $addTimestamp
 $description[
  \`\`\`\
  Total commands used: $getGlobalUserVar[commandusersused]
  Total commands used by you: $getGlobalUserVar[commanduserused]
  Server info
  Server id: g5Z6y-2F6qRLS
  Server Release: $djseval[require('os').release();yes]
  Server Platform: $djseval[require('os').platform();yes]
  Server Arch: $djseval[require('os').arch();yes]
  Server Cores: $djseval[require('os').cpus().length;yes]
  Server Ram: 4GB
  Server uptime: $uptime
  \`\`\`\
]
$title[$userTag[$clientID] - \`(5.6.7)\`]
  $log[[DEBUG] :: $username, used the stats command]`
}