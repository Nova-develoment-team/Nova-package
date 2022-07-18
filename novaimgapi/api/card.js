const Canvas = require('canvas')
const defaults = {
	text: '#FFFFFF',
	avatarborder: '#FFFFFF',
	avatarbg: '#1F1F1F',
	background: ''
}

Canvas.registerFont('/root/novastuff/novaimgapi/Uni Sans Heavy.otf', { family: 'Uni-Sans-Heavy' })

module.exports = async function card(reqQuery) {
	const query = {}
	const obj = {}

	Object.assign(query, reqQuery)

	for (const prop of Object.entries(defaults)) {
		if (typeof query[prop[0]] != 'string' || !query[prop[0]].length) query[prop[0]] = prop[1]
	}

	let { avatar } = query
	let { middle } = query
	let { name } = query
	let { bottom } = query
	let { text } = query
	let { avatarborder } = query
	let { avatarbg } = query
	let { background } = query

	const none = [{ avatar }, { middle }, { name }, { bottom }].find(que => typeof Object.values(que)[0] != 'string' || !Object.values(que)[0].length)

	if (none) {
		obj.message = `Invalid ${Object.keys(none)[0]} query!`
		obj.code = '400'
		return obj
	}

	const data = { avatar, middle, name, bottom, text, avatarborder, avatarbg, background }

	for (const arr of Object.entries(data)) {
		try {
			data[arr[0]] = decodeURI(arr[1])
		} catch {
			obj.message = `An error occured while decoding ${arr[0]} query!`
			obj.code = '400'
			return obj
		}
	}

	avatar = data.avatar
	middle = data.middle.toUpperCase()
	name = data.name.toUpperCase()
	bottom = data.bottom.toUpperCase()
	text = data.text
	avatarborder = data.avatarborder
	avatarbg = data.avatarbg
	background = data.background

	try {
		avatar = await Canvas.loadImage(avatar)
	} catch {
		obj.message = 'Invalid image url at avatar query!'
		obj.code = '400'
		return obj
	}

	if (/^https:\/\/.+$/.test(background)) {
		try {
			const image = await Canvas.loadImage(background)
			background = image
		} catch { }
	}

	const canvas = Canvas.createCanvas(768, 375)
	const ctx = canvas.getContext('2d')

	if (background instanceof Object) {
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
	} else if (typeof background == 'string' && background.length) {
		ctx.fillStyle = background
		ctx.fillRect(0, 0, canvas.width, canvas.height)
	}

	ctx.textAlign = 'center'
	ctx.fillStyle = text
	ctx.strokeStyle = 'rgba(0, 0, 0, 0)'
	ctx.shadowColor = '#000000'
	ctx.lineWidth = 4

	ctx.font = '700 50px Uni-Sans-Heavy'

	ctx.shadowBlur = 7

	ctx.strokeText(middle, 384, 275, 500)

	ctx.shadowBlur = 0

	ctx.fillText(middle, 384, 275, 500)

	ctx.font = '700 40px Uni-Sans-Heavy'

	ctx.shadowBlur = 7

	ctx.strokeText(name, 384, 315, 600)

	ctx.shadowBlur = 0

	ctx.fillText(name, 384, 315, 600)

	ctx.font = '700 30px Uni-Sans-Heavy'

	ctx.shadowBlur = 7

	ctx.strokeText(bottom, 384, 350, 700)

	ctx.shadowBlur = 0

	ctx.fillText(bottom, 384, 350, 700)

	ctx.beginPath()
	ctx.arc(384, 130, 105, 0, 2 * Math.PI, true)
	ctx.closePath()

	ctx.shadowBlur = 7

	ctx.stroke()

	ctx.shadowBlur = 0

	ctx.clip()

	ctx.lineWidth = 12

	ctx.fillStyle = avatarbg
	ctx.strokeStyle = avatarborder

	ctx.fill()
	
	ctx.drawImage(avatar, 279, 25, 210, 210)

	ctx.stroke()

	obj.stream = true
	obj.contentType = 'image/png'
	obj.code = '200'
	obj.data = canvas.createPNGStream()

	return obj
}

module.exports.type = 'query'
module.exports.route = 'card'
module.exports.usage = '?avatar=url&middle=text&name=text&bottom=text[&text=hex|rgba&avatarborder=hex|rgba&avatarbg=hex|rgba&background=url|hex|rgba]'