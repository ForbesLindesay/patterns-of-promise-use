'use strict'

var jadelib = require('jade')
var hljs = require('highlight.js')
var jade = require('transform')('jade', jadelib)
var express = require('express')
var app = express()

jadelib.filters.javascript = function (src) {
  return '<pre class="hljs"><code>' + hljs.highlight('javascript', src.trim()).value + '</code></pre>'
}

app.get('/', jade('./index.jade'))
app.use(express.static(__dirname))

app.listen(3000)
