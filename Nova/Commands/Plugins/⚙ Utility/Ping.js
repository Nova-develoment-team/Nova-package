module.exports = {
    name: "ping",
    description: "Shows bot Ping",
    category: "General Commands",
    usage: `$getServerVar[prefix]ping`,
    code: ` $color[$getServerVar[color]]
$description[
  Websocket Ping   : $numberSeparator[$ping]ms
  API       Ping   : $numberSeparator[$botPing]ms
  Database  Ping   : $numberSeparator[$dbPing]ms
  Average   Ping   : $numberSeparator[$truncate[$divide[$sum[$ping;$botPing;$dbPing];3]]]ms
  $setGlobalUserVar[commanduserused;$sum[$getGlobalUserVar[commanduserused];1]]
  $cooldown[3s;Please wait **%time%** before using again.]
  
  $log[[DEBUG] :: $username, used the ping command]`
}