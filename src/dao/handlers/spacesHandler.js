var Spaces = require('../models/spaces')
var log = require('../../log/log').getLog('MONGO')

exports.getSpaces = function (query) {
  return Spaces.find(query)
    .exec()
    .then(function (spaces) {
      log.info('GET ', JSON.stringify.query)
      return spaces.map(function (space) {
        return space
      })
    })
    .catch(function (err) {
      log.error('ERR: ', err.message)
      throw err
    })
}

exports.getSpace = function (id) {
  return Spaces.findById(id)
    .exec()
    .then(function (space) {
      log.info('GET ', id)
      return space
    })
    .catch(function (err) {
      log.error('ERR: ', err.message)
      throw err
    })
}

exports.addSpace = function (data) {
  return Spaces.create(data)
    .then(function (space) {
      log.info('ADDED ', space)
      return space
    })
    .catch(function (err) {
      log.warn('ERR: ', err.message)
      return err
    })
}

//exports.deleteAll = function () {
  //return Pictures.remove()
    //.then(function (foo) {
      //log.info('DELETE success')
    //})
    //.catch(function (err) {
      //log.error('ERR: ', err.message)
      //throw err
    //})
//}
