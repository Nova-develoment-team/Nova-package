module.exports = {
  name: "afk",
  code: `
    $title[Set your status to afk!]
    $description[Reason: $noMentionMessage]
    $color[$getServerVar[color]]
    $setUserVar[afk;AFK;$authorID]
    $setUserVar[reason;$noMentionMessage]
  
  $log[[DEBUG] :: $username, Went afk | Reason: $getUserVar[reason]]  `
}