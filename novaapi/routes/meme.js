const got = require('got')
module.exports = {
  name: 'fun/meme',
  run: async (req, res) => {
    got(`https://api.testiestsauce43.repl.co/sus/memes`).then(response => {
       let content = JSON.parse(response.body)
       res.json({
         subreddit: content.subreddit,
         title: content.title,
         author: content.author,
         image: content.image,
         ups: content.ups,
         downs: content.downs,
         comments: content.comments
       })
    })
  }
}