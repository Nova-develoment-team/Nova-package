module.exports = (bot) => {

    bot.status({
        text: "on a vps", 
        type: "STREAMING",
            status: "online",
        url: "https://dashboard.nova-bot.tk/"
        })

     bot.status({
      text: "$commandsCount Commands",
      type: "STREAMING",
      status: "online",
      url: "https://twitch.live/nova-bot"
     })   
        
        bot.status({
          text: "updates",
          type: "WATCHING",
            status: "online",
          time: 12
        })
        
        bot.status({
          text: "for >help",
          type: "WATCHING",
              status: "online",
          time: 12
        })
}