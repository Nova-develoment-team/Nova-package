module.exports = ({
    name: "help",
    code: `
    $if[$message[1]==] 
    $title[$randomtext[Join the support server!;Add me!]]
    $description[<:moderation:905787390302490624> [Moderation](https://fakelikeishere.lol) [>help mod]
    <:reply:980147502529523752> Search for moderation commands

    <:ticket:912634005470457856> [Ticket](https://fakelikeishere.lol) [>help ticket]
    <:reply:980147502529523752> Search for ticket commands

    📈 [Leveling](https://fakelikeishere.lol) [>help leveling]
    <:reply:980147502529523752> Search for leveling commands

    <a:tadablue:904718144663322669> [Giveaway](https://fakelikeishere.lol) [>help giveaway]
    <:reply:980147502529523752> Search for giveaway commands

    🎵 [Music](https://fakelikeishere.lol) [>help music]
    <:reply:980147502529523752> Search for music commands

    💰 [Economy](https://fakelikeishere.lol) [>help economy]
    <:reply:980147502529523752> Search for economy commands

    ⚙️ [Utility](https://fakelikeishere.lol) [>help utility]
    <:reply:980147502529523752> Search for utility commands

    :flushed: [Nsfw](https://fakelikeishere.lol) [>help nsfw]
    <:reply:980147502529523752> Search for nsfw commands

    <a:fun:910546867962642463> [Fun](https://fakelikeishere.lol) [>help fun]
    <:reply:980147502529523752> Search for fun commands

    <:s_invite:960755956449415168> [Invite](https://fakelikeishere.lol) [>help invite]
    <:reply:980147502529523752> Search for invite commands

    😁 [Reaction roles](https://fakelikeishere.lol) [>help reaction]
    <:reply:980147502529523752> Search for reaction commands

    :robot: [Auto moderation](https://fakelikeishere.lol) [>help automod]
    <:reply:980147502529523752> Search for automod commands

    <a:NewMail:916990093049360394> [ModMail](https://fakelikeishere.lol) [>help modmail]
    <:reply:980147502529523752> Search for modmail commands
    
$addfield[Nova api;[Thermal hosting](https://thermalhosting.com/whmcs/aff.php?aff=4)
[Luxxy hosting](https://discord.gg/P3BQAyc8yY)]
]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the help command]


$elseIf[$message[1]==fun]
$title[<a:fun:910546867962642463> Nova fun]
$description[guess ¦ Play guess the number
hack ¦ Hack a user
jumbo ¦ Enlarge an emote
8ball ¦ Ask the 8ball questions]

$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the fun help category command]
$endelseIf

$elseIf[$message[1]==economy]
$title[💰 Nova economy]
$description[work ¦ for money 
    beg ¦ beg for money
    bal ¦ ballance
    profile ¦ profile
    dep ¦ deopsit money
    with ¦ withdraw
    daily ¦ daily
    open-daily ¦ open daily chest
    heist ¦ heist
    givemoney ¦ share money
    shop ¦ shop for stuff
    open-lucky ¦ open a chest
    rob ¦ rob for money
    steal ¦ steal to get money
    search ¦ search for money
    scrap-car ¦ scrap a car
    scrap-helicopter ¦ scrap a heli
    scrap-truck ¦ scrap a truck
    flip-house ¦ sell a house
    flip-apartment ¦ sell a house
    fish ¦ fish for moey
    lb-bank ¦ bank leaderboard
    lb-wallet ¦ wallet ammount leaderboard]
    $color[$getServerVar[color]]
    $log[[DEBUG] :: $username, used the economy help category command]
$endelseIf
$elseIf[$message[1]==utility]
$title[⚙️ Nova utilitys]
$description[
avatar ¦ shows a users avatar
commandlist ¦ aoi.js functions
whois ¦ check a memeber
invite ¦ invite me
ping ¦ check the ping of the bot
prefix ¦ change the prefix of the bot
quote ¦ Quote a message
editsnipe ¦ Check edited messages
snipe ¦ Snipe recently deleted messages
addemoji ¦ Add an emoji
afk ¦ set a afk status
add-cmd ¦ Add a custom command
del-cmd ¦ Delete custom command
cmd-list ¦ See custom commands]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the utility help category command]
$endelseIf
$elseIf[$message[1]==ticket]
$title[<:ticket:912634005470457856> Nova ticket]
$description[Setup ¦ setup the ticket system
Ticket | create a ticket]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the ticket help category command]
$endelseIf
$elseIf[$message[1]==reaction]
$title[😁 Nova reaction]
$description[rrole ¦ Add new reaction role]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the reaction help category command]
$endelseIf
$elseIf[$message[1]==premium]
$title[⭐ Nova premium]
    $description[PREMIUM COMMANDS COMMING SOON]
    $color[$getServerVar[color]]
    $log[[DEBUG] :: $username, used the levelling help category command]
$endelseIf
$elseIf[$message[1]==nsfw]
$title[:flushed: Nova nsfw]
$description[ass ¦ nsfw
bdsm ¦ nsfw
boobs ¦ nsfw
blowjob ¦ nsfw
futanari ¦ nsfw
hentai ¦ nsfw
lewdneko ¦ nsfw
lewdbomb ¦ nsfw
succubus ¦ nsfw
tentacles ¦ nsfw
yuri ¦ nsfw]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the nsfw help category command]
$endelseIf
$elseIf[$message[1]==music]
$title[🎵 Nova music]
$description[play ¦ Play a song.
playskip  ¦ skip the playing song
pause ¦ pause
resume ¦ resume a song
stop ¦ stop the song
nowplaying ¦ the songs thats playing
loop ¦ loop
shuffle ¦ shuffle
shuffleskip ¦ skip the suffle
pruning ¦ pruning
skip ¦ skip
clearqueue ¦ clear queue
queue ¦ queue
qloop ¦ qloop
seek ¦  seek
remove ¦ remove 
volume ¦ volume
filter ¦ filter
musicsettings ¦ musicsettings
> playlist
playlist ¦ Shows your playlist
playlist-add ¦ add a song to your playlist
playlist-remove ¦ remove a song from your playlist
playlist-play ¦ play something from your playlist]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the music help category command]
$endelseIf
$elseIf[$message[1]==modmail]
$title[<a:NewMail:916990093049360394> Nova mail!]
$description[modMailClose ¦ close the modMail
    modmail ¦ Creat a new mod mail instance
    setupModmail ¦ Setup the mod mail
    modMailSend ¦ Mods send to user
    sendModmail ¦ Send to the mods]
    $color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the modmail help category command]
$endelseIf

$elseIf[$message[1]==mod]
$title[<:moderation:905787390302490624> Nova moderation]
$description[ban ¦ Ban a user.
banalt ¦ Bans a account if younger than 30d.
kick ¦ Kick a user.
setmute ¦ Set the muterole.
mute ¦ Mute a user.
unmute ¦ Unmute a user.
tempmute ¦ Temporarily mute a user.
warn ¦ Warn a user.
infractions ¦ Check user infractions.
clear ¦ Clear messages.
tempban ¦ Temporarily ban a user.
clearwarns ¦ Clear user's warnings.
role ¦ Role a user.
removerole ¦ Remove a user's role.
temprole ¦ give a user a temp role
Lock ¦  lock a channel
Unlock ¦ unlock a channel
enable-antiSwear ¦ Enable antiswear
disable-antiSwear ¦ Disable antiswear]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the mod help category command]
$endelseIf

$elseIf[$message[1]==levelling]
$title[📈 Nova levels]
$description[set-level-channel ¦ set a level channel.
level-message ¦ make a level up message!
level-role ¦ set a level role.
rank ¦ show your rank our someones.
set-card ¦ set your rank background
enable-levelling ¦ enable levelling
disable-levelling ¦ disable levelling]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the levelling help category command]
$endelseIf
$elseIf[$message[1]==invite]
$title[<:s_invite:960755956449415168> Nova invite]
$description[user-invites ¦ See user invites
reset-invites ¦ Reset a users invites]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the invite system help category command]
$endelseIf
$elseIf[$message[1]==giveaway]
$title[🎉 Nova giveaway]
$description[giveaway ¦ start giveaway]
$color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the giveaway help category command]
$endelseIf
$elseIf[$message[1]==automod]
$title[:robot: Nova auto moderation]
    $description[
    enable-antiSwear ¦ Enable antiswear
    disable-antiSwear ¦ Disable antiswear]
    $color[$getServerVar[color]]
$log[[DEBUG] :: $username, used the automod help category command]
$endelseIf

$endif
`
})