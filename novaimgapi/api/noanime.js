const Canvas = require('canvas')
const Data = {}

module.exports = async function noAnime(query) {
    const obj = {}

    let reason = query.reason
    let location = query.location
    let author = query.author
    let target = query.target
    let penalty = query.penalty

    const none = [{reason},{location},{author},{target},{penalty}].find(que => typeof que[Object.keys(que)[0]] != 'string' || que[Object.keys(que)[0]] == '')

    if (none) {
        obj.message = `Invalid ${Object.keys(none)[0]} text query!`
				obj.code = '400'
        return obj
    }

    try {
        reason = decodeURI(reason)
        location = decodeURI(location)
        author = decodeURI(author)
        target = decodeURI(target)
        penalty = decodeURI(penalty)
    } catch {
        obj.message = "An unexpected error occured while decoding query!"
				obj.code = '400'
        return obj
    }

		if (!Data.img) {
			Data.img = await Canvas.loadImage('https://cdn.xzusfin.repl.co/noanime.png')
		}

		if (!Data.cross) {
			Data.cross = await Canvas.loadImage('https://cdn.xzusfin.repl.co/cross.png')
		}

    const canvas = Canvas.createCanvas(512, 341.2)
    const ctx = canvas.getContext('2d')
    const img = Data.img
    const cross = Data.cross
    
    ctx.fillStyle = 'black'
    ctx.font = '500 12px Arial'

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

    if (reason.toLowerCase() == 'anime meme') {
        ctx.drawImage(cross, 16.8, 139.6, 14.4, 14.4)
    } else if (reason.toLowerCase() == 'anime game') {
        ctx.drawImage(cross, 138.4, 139.6, 14.4, 14.4)
    } else if (reason.toLowerCase() == 'anime girl') {
        ctx.drawImage(cross, 259.6, 139.6, 14.4, 14.4)
    } else if (reason.toLowerCase() == 'manga') {
        ctx.drawImage(cross, 381.6, 139.6, 14.4, 14.4)
    } else if (reason.toLowerCase() == 'hentai') {
        ctx.drawImage(cross, 16.8, 164, 14.4, 14.4)
    } else if (reason.toLowerCase() == 'trap') {
        ctx.drawImage(cross, 138.4, 164, 14.4, 14.4)
    }  else if (reason.toLowerCase() == 'uwu speech') {
        ctx.drawImage(cross, 259.6, 164, 14.4, 14.4)
    } else if (reason.toLowerCase() == 'weeb music') {
        ctx.drawImage(cross, 381.6, 164, 14.4, 14.4)
    } else {
        ctx.drawImage(cross, 16.8, 189.6, 14.4, 14.4)

        ctx.textAlign = 'left'

        ctx.fillText(reason.substr(0, 50), 80, 196.8, 262)
    }

    ctx.textAlign = 'center'

    ctx.fillText(location.substr(0, 24), 74, canvas.height - 25.2, 100)
    ctx.fillText(author.substr(0, 24), 197.6, canvas.height - 52.8, 100)
    ctx.fillText(target.substr(0, 24), 197.6, canvas.height - 25.2, 100)

    ctx.textAlign = 'left'
    ctx.font = '500 16px Arial'

    ctx.fillText(penalty.substr(0, 10).trim(), 264, canvas.height - 52.8, 100)
    ctx.fillText(penalty.substr(10, 20).trim(), 264, canvas.height - 37.6, 100)
    ctx.fillText(penalty.substr(20, 29).trim(), 264, canvas.height - 24.8, 100)

		obj.stream = true
    obj.contentType = 'image/png'
		obj.code = '200'
    obj.data = canvas.createPNGStream()

    return obj
}

module.exports.type = 'query'
module.exports.route = 'noanime'
module.exports.usage = '?reason=text&location=text&author=text&target=text&penalty=text'