'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BarSchema = new Schema({
  name: String,
  snippet_text: String,
  snippet_image_url: String,
  image_url: String,
  rating: String,
  review_count: Number,
  categories: [{
    title: String,
    id: String
  }],
  phone_number: String,
  id: String,
  is_closed: Boolean,
  location: {
    city: String,
    display_address: [],
    geo_accuracy: Number,
    postal_code: Number,
    country_code: String,
    address: [],
    coordinate: {
      latitude: String,
      longitude: String
    },
    state_code: String
  }
});

module.exports = mongoose.model('Bar', BarSchema);