const Canvas = require('canvas')
const SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"]
const defaults = {
	rank: '',
	text: '#FFFFFF',
	avatarborder: '#FF1493',
	avatarbackground: '#FF1493',
	bar: '#FFFFFF',
	barbackground: '#5f5f6f',
	background: '#2f2f3c',
	border: '#1f1f2f',
	image: ''
}

Canvas.registerFont('/root/novastuff/novaimgapi/Uni Sans Heavy.otf', { family: 'Uni-Sans-Heavy' })

function abbreviateNumber(number) {
	const tier = Math.log10(number) / 3 | 0;

	if (tier == 0) return number;

	const suffix = SI_SYMBOL[tier];
	const scale = Math.pow(10, tier * 3);
	const scaled = number / scale;

	return scaled.toFixed(1) + suffix;
}

module.exports = async function rankCard(reqQuery) {
	const query = {}
	const obj = {}

	Object.assign(query, reqQuery)

	for (const prop of Object.entries(defaults)) {
		if (typeof query[prop[0]] != 'string' || !query[prop[0]].length) query[prop[0]] = prop[1]
	}

	let { avatar } = query
	let { name } = query
	let { exp } = query
	let { maxexp } = query
	let { level } = query
	let { rank } = query
	let { text } = query
	let { avatarborder } = query
	let { avatarbackground } = query
	let { bar } = query
	let { barbackground } = query
	let { background } = query
	let { border } = query
	let { image } = query

	const none = [{ avatar }, { name }, { exp }, { maxexp }, { level }].find(que => typeof Object.values(que)[0] != 'string' || !Object.values(que)[0].length)

	if (none) {
		obj.message = `Invalid ${Object.keys(none)[0]} query!`
		obj.code = '400'
		return obj
	}

	const data = { avatar, name, exp, maxexp, level, rank, text, avatarborder, avatarbackground, bar, barbackground, background, border }

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
	name = data.name
	exp = Math.max(0, data.exp)
	maxexp = Math.max(exp, Math.max(0, data.maxexp))
	level = data.level
	rank = data.rank
	text = data.text
	avatarborder = data.avatarborder
	avatarbackground = data.avatarbackground
	bar = data.bar
	barbackground = data.barbackground
	background = data.background
	border = data.border

	try {
		avatar = await Canvas.loadImage(avatar)
	} catch {
		obj.message = 'Invalid image url at avatar query!'
		obj.code = '400'
		return obj
	}

	if (/^https:\/\/.+$/.test(image)) {
		try {
			const img = await Canvas.loadImage(image)
			image = img
		} catch { }
	}

	const canvas = Canvas.createCanvas(934, 282)
	const ctx = canvas.getContext('2d')

	if (image instanceof Object) {
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	}

	ctx.fillStyle = background
	ctx.fillRect(22, 22, canvas.width-44, canvas.height-44)

	ctx.lineWidth = 45
	ctx.strokeStyle = border
	ctx.strokeRect(0, 0, canvas.width, canvas.height)

	ctx.textAlign = 'left'

	ctx.font = '600 30px Arial'
	ctx.fillStyle = text

	ctx.fillText(name.substr(0, 36), 270, 175, 380)

	ctx.textAlign = 'right'

	ctx.font = '600 30px Uni-Sans-Heavy'
	ctx.fillText(`${abbreviateNumber(exp)}/${abbreviateNumber(maxexp)}`, 865, 175, 200)

	ctx.font = '500 33px Uni-Sans-Heavy'
	ctx.fillText(`${rank.length ? `RANK ${rank}    ` : ''}LEVEL ${level}`, 880, 70, 550)

	ctx.save()

	ctx.beginPath()

	ctx.arc(140, 141, 100, 0, 2 * Math.PI, true)

	ctx.closePath()

	ctx.clip()

	ctx.lineWidth = 10
	ctx.strokeStyle = avatarborder
	ctx.fillStyle = avatarbackground

	ctx.fillRect(40, 41, 200, 200)
	ctx.drawImage(avatar, 40, 41, 200, 200)
	ctx.stroke()

	ctx.restore()

	ctx.beginPath()

	ctx.moveTo(270, 195)
	ctx.arcTo(250, 195, 250, 215, 20)
	ctx.arcTo(250, 235, 270, 235, 20)
	ctx.lineTo(860, 235)
	ctx.arcTo(880, 235, 880, 215, 20)
	ctx.arcTo(880, 195, 860, 195, 20)

	ctx.closePath()

	ctx.fillStyle = barbackground

	ctx.fill()

	const size = ((exp / maxexp) || 0) * 590

	ctx.beginPath()

	ctx.moveTo(270, 195)
	ctx.arcTo(250, 195, 250, 215, 20)
	ctx.arcTo(250, 235, 270, 235, 20)
	ctx.lineTo(270 + size, 235)
	ctx.arcTo(20 + 270 + size, 235, 20 + 270 + size, 215, 20)
	ctx.arcTo(20 + 270 + size, 195, 270 + size, 195, 20)

	ctx.closePath()

	ctx.fillStyle = bar

	ctx.fill()

	ctx.restore()

	obj.stream = true
	obj.contentType = 'image/png'
	obj.code = '200'
	obj.data = canvas.createPNGStream()

	return obj
}

module.exports.type = 'query'
module.exports.route = 'rankcard'
module.exports.usage = '?avatar=url&name=text&exp=int&maxexp=int&level=int[&rank=int&text=hex|rgba&avatarborder=hex|rgba&avatarbackground=hex|rgba&bar=hex|rgba&barbackground=hex|rgba&background=hex|rgba&border=hex|rgba&image=url]'