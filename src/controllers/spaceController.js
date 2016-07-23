var spacesHandler = require('../dao/handlers/spacesHandler')
var isValidId = require('mongoose').Types.ObjectId.isValid
var utils = require('../utils/commonUtils')
//var queryBuilder = require('../dao/request-params/query-builder')
var log = require('../log/log').getLog('CONTROLLERS')

module.exports = function setup (app) {

  app.get('/spaces', function (req, res) {
    log.info('GET /spaces?' + JSON.stringify(req.query))
      //var query = queryBuilder.getQuery(req.query)
      var query = {}
    spacesHandler.getSpaces(query)
      .then(function (spaces) {
        return res.status(200).json(spaces)
      })
    .catch(function (err) {
      return res.status(500).send(err.message)
    })
  })

  app.get('/spaces/:id', function (req, res) {
    log.info('GET /spaces/' + req.params.id)
      if (!isValidId(req.params.id)) {
        return res.status(400).send('Invalid id')
      }
    spacesHandler.getSpace(req.params.id)
      .then(function (space) {
        return space ? res.status(200).json(space) :
          res.status(404).send('Space not found')
      })
    .catch(function (err) {
      return res.status(500).send(err.message)
    })
  })

  app.post('/spaces', function (req, res) {
    log.info('POST /spaces')
      if(!utils.isValidSpaceObject(req.body)) {
        return res.status(400).send('Invalid Space data')
      }
    spacesHandler.addSpace(utils.getSpaceObject(req.body))
      .then(function(space) {
        return res.status(201).send('Space created')
      })
    .catch(function (err) {
      return res.status(500).send(err.message)
    })
  })

  app.put('/spaces/:id', function (req, res) {
    log.info('PUT /spaces/' + req.params.id)
      if (!isValidId(req.params.id)) {
        return res.status(400).send('Invalid id')
      }
    spacesHandler.getSpace(req.params.id)
      .then(function(space) {
        if(!space) {
          res.status(404).send('Not Found')
        }
      })
    space.save(utils.updateSpaceObject(req.body, space))
      .then(function(space) {
        return res.status(200).json(space)
      })
    .catch(function (err) {
      return res.status(500).send(err.message)
    })
  })
}
