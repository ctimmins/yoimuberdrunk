'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BarSchema = new Schema({
  name: String,
  snippet_text: String,
  snippet_image_url: String,
  image_url: String,
  rating_img_url: String,
  rating: String,
  review_count: Number,
  categories: [{
    title: String,
    id: String
  }],
  phone_number: String,
  id: { type: String, index: true },
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
  },
  crawls: [{
    type: Schema.Types.ObjectId,
    ref: 'Bar'
  }],
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bar', BarSchema);