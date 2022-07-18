module.exports = ({
    name: "modmailsetup",
    type: "awaitedCommand",
    code: `
    
    <a:success:947763162705428491> Success! You setup your modMail.
    $setservervar[modmail_channel;$findchannel[$message[3]];yes]
    $setServervar[modmail_setup;true]
    $setServerVar[modmail_modRoleID;$message[1]]
    $setServerVar[modmail_adminRoleID;$message[2]]

    $onlyif[$mentionedchannels[1]!=;Ah oh! you have to mention a channel not channel id!"]
    $onlyif[$message[1]!=0;<a:failed:947763053938757682> Could not find the role!]
    $onlyif[$message[2]!=0;<a:failed:947763053938757682> Could not find the role!]
    $onlyperms[manageserver;<a:failed:947763053938757682> Not enough permissions! You need manage server permissions to execute this!]

    $log[[DEBUG] :: $username, setted up Modmail in $serverName]
`

})