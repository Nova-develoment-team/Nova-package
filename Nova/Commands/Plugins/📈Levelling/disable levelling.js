module.exports = ({
    name: "disable-levelling",
    code: `$description[<:success:935751098092884020> successfully disabled the levelling plugin]
    $color[#2f3136]
    $setServerVar[levelling;false]
    $onlyIf[$getServerVar[levelling]==true;{description:<:error:935750920598351872> levelling plugin already Disable}{color:#2f3136}]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==true;{description:<:error:935750920598351872> you dont have enough perms}{color:#2f3136}]

$log[[DEBUG] :: $username, disabled levelling for some reason in $servername 🤷‍♂️]`
    })