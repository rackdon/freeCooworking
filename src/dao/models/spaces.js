var mongoose = require('mongoose')
var Schema = mongoose.Schema

var spaceSchema = new Schema({
  name: String,
  place: String,
  pictures: [String],
  description: String,
  phone: Number,
  email: String,
  freePlaces: Number,
  schedules: Date,
  services: {
    pets: Boolean,
    wifi: Boolean,
    coffee: Boolean,
    conditionedAir: Boolean,
    parking: Boolean
  }
})

module.exports = mongoose.model('Space', spaceSchema)
