'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CrawlSchema = new Schema({
  name: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  dateHosted: Date,
  hosts: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    text: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now }
  }],
  itinerary: [{
    bar: { type: Schema.Types.ObjectId, ref: 'Bar' },
    index: Number,
    active: { type: Boolean, default: true }
  }],
  active: { type: Boolean, default: false }
});

module.exports = mongoose.model('Crawl', CrawlSchema);