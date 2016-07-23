var app = require('express')()
var http = require('http').Server(app)
var bodyParser = require('body-parser')
var glob = require('glob')
var log = require('./log/log').getLog('SERVER')

// parse application/json
app.use(bodyParser.json())

// Routes initialization
app.get('/', function (req, res) {
  res.send('Free Cooworking server')
})

// find all express route files
var routes = glob.sync('src/{dao,socket,routes}/*.js')

function addToServer (path) {
  require(path)(app)
  log.info(path + ' added to express')
}

routes.forEach(function (route) {
  route = route.replace('src', '.')
  addToServer(route)
})

http.listen(8082, function () {
  log.info('Node server running on http://localhost:8082')
})

module.exports = app
