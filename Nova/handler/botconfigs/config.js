module.exports = {
    Bot: {
    token: "ODk2MzAzOTQ3MzExMTA0MDQx.Goada2.VqrMQoWYf8O9gZc8Zj4IVL0l7RtDrsbMY61O5o",
    prefix: ["$getServerVar[prefix]","<@$clientID>"],
    intents: "all", },
    respondOnEdit: {
        commands: true
    },
    debug: {
        interpreter : true 
},
    suppressAllErrors: {
        errorMessage: ["", "$log[[ERROR] :: $username had a error in $servername | ERROR ID: $randomString[$random[4;10]]]{newEmbed:{title:Ah oh!}{description:There was a error | ERROR ID: $randomString[$random[4;10]]}{color:fcbfcb}}"]
    }
}
