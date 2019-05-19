var htmlcoinjs = require('bitcoinjs-lib')

Object.assign(htmlcoinjs.networks, require('./networks'))

htmlcoinjs.utils = require('./utils')

module.exports = htmlcoinjs
