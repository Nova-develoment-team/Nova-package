const Canvas = require('canvas')
const Options = {
  1: {
    width: 210.6,
    height: 283.8,
    url: 'https://cdn.xzusfin.repl.co/wanted1.png',
    img: {
      w: 36,
      h: 100,
      mw: 140,
      mh: 140
    }
  },
  2: {
    width: 210.6,
    height: 276.51,
    url: 'https://cdn.xzusfin.repl.co/wanted2.png',
    img: {
      w: 50.7,
      h: 105.3,
      mw: 117,
      mh: 117
    }
  },
  3: {
    width: 199.584,
    height: 299.556,
    url: 'https://cdn.xzusfin.repl.co/wanted3.png',
    img: {
      w: 45,
      h: 105,
      mw: 110,
      mh: 110
    }
  }
}

module.exports = async function wanted(query) {
  const obj = {}

  let image = query.image
  const style = query.style || '1'

  const data = Options[style]

  if (!data) {
    obj.message = 'Invalid style, available style is 1, 2, or 3!'
    obj.code = '400'
    return obj
  }

  if (!image) {
    obj.message = 'Image query not provided!'
    obj.code = '400'
    return obj
  }

  try {
    image = decodeURI(image)
  } catch {
    obj.message = 'An error occured while decoding image query!'
    obj.code = '400'
    return obj
  }

  try {
    image = await Canvas.loadImage(image)
  } catch {
    obj.message = 'Invalid image url at image query!'
    obj.code = '400'
    return obj
  }

  if (!data.data) {
    data.data = await Canvas.loadImage(data.url)
  }

  const { img } = data
  const bgimg = data.data
  const canvas = Canvas.createCanvas(data.width, data.height)
  const ctx = canvas.getContext('2d')

  ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#362419'
  ctx.fillRect(img.w, img.h, img.mw, img.mh)

  ctx.drawImage(image, img.w, img.h, img.mw, img.mh)

  ctx.lineWidth = 2
  ctx.strokeStyle = 'BLACK'
  ctx.strokeRect(img.w, img.h, img.mw, img.mh)

  obj.stream = true
  obj.contentType = 'image/png'
  obj.code = '200'
  obj.data = canvas.createPNGStream()

  return obj
}

module.exports.type = 'query'
module.exports.route = 'wanted'
module.exports.usage = '?image=url[&style=int]'