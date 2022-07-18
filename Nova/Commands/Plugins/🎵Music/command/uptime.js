module.exports = {
  name: "uptime",
  code: `\`\`\`
$client[readytimestamp]
\`\`\`
$setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
$cooldown[3s;Please wait **%time%** before using again.]

$log[[DEBUG] :: $username, used the uptime command]`
}
