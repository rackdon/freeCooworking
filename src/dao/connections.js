var db = require('../../config').db
var mongoose = require('mongoose')
var log = require('../log/log').getLog('MONGO')

module.exports = function setup (app) {

  mongoose.connect(db, function (err, res) {
    if (err) {
      log.error('ERROR: connectiong to Database. ' + err)
    } else {
      log.info('Connected to Database ' + db)
    }
  })
}
