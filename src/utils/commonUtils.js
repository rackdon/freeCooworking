var _ = require('lodash')

exports.isValidSpaceObject = function(space) {
  var expected = ['name', 'place', 'pictures', 'description', 'phone', 'email', 'schedules']
  return _.hasIn(space, expected)
}

exports.getSpaceObject = function(data) {
  return {
      name: data.name,
      place: data.place,
      pictures: data.pictures,
      description: data.description,
      phone: data.phone,
      email: data.email,
      schedules: data.schedules,
      services: {
        pets: data.pets || false,
        wifi: data.wifi || false,
        coffee: data.coffee || false,
        conditionedAir: data.coditionedAir || false,
        parking: data.parking || false
      }
  }

}

exports.updateSpaceObject = function(newData, oldData) {
  return {
      name:  newData.name || oldData.name,
      place: newData.place || oldData.place,
      pictures: newData.pictures || oldData.pictures,
      description: newData.description || oldData.description,
      phone: newData.phone || oldData.phone,
      email: newData.email || oldData.email,
      schedules: newDdata.schedules || oldData.schedules,
      services: {
        pets: newData.pets || oldData.pets,
        wifi: newData.wifi || oldData.wifi,
        coffee: newData.coffee || oldData.coffee,
        conditionedAir: newData.coditionedAir || oldData.conditionedAir,
        parking: newData.parking || oldData.parking
      }
  }

}
