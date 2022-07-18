const func = require('./fn')
const fs = require('fs')
const express = require('express')
const router = express.Router();


const files = fs.readdirSync('/root/novastuff/novaimgapi/api').filter(file => file.endsWith('.js'))
const fn = []

for (const file of files) {
    const obj = require(`./api/${file}`)
    fn.push(obj)
}

router.get('/', function(req, res) {
    const endpoints = fn.map(endpoint => `GET /${endpoint.route}${endpoint.usage || ''}`)
    const data = {
				author: 'Azusfin#9887',
        endpoints,
				code: '200'
    }
    res.status(200).json(data)
		res.end()
})

for (const get of fn) {
    router.get(`/${get.route}`, func.bind({}, get))
}

router.get('*', function(req, res) {
	res.status(404).json({
		message: 'Not Found',
		code: '404'
	})
})

module.exports = router