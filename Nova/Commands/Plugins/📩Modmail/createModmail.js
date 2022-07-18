module.exports = ({
    name: "setupModMail",
    code: `
    <a:success:947763162705428491> Success! You setup your modMail.
    $setservervar[modmail_channel;$findchannel[$message[1]]]
    $setServervar[modmail_setup;true]
    $setServerVar[modmail_modRoleID;$message[2]]
    $setServerVar[modmail_adminRoleID;$message[3]]

    $onlyif[$mentionedchannels[1]!=;Hello to setup mod mail do ">setupModMail <modmail channel> <mod role id> <admin role id>"]
    $onlyif[$message[2]!=0;<a:failed:947763053938757682> Could not find the role!]
    $onlyif[$message[3]!=0;<a:failed:947763053938757682> Could not find the role!]
    $onlyperms[manageserver;<a:failed:947763053938757682> Not enough permissions! You need manage server permissions to execute this!]

    $log[[DEBUG] :: $username, setted up Modmail in $serverName]
    $onlyif[premium==true;You need to be a premium user to use this command!]`})