const express = require('express')

const app = express()

app.set('json spaces', 2)

let i = 1

app.use(function timedOut(req, res, next) {
	process.stderr.write(`${i++}\n`)
res.setTimeout(3000, function timeOut() {
		if (!res.headersSent) {
			res.status(408).json({
				message: 'Timed out!',
				code: '408'
			})
		}

		return
	})

	next()
})

setTimeout(process.exit, 3600000)

app.use('/', require('./router.js'))

app.listen(3000, () => console.log('https://api.xzusfin.repl.co'))

