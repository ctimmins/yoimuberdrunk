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
  comments: [{body: String, date: Date}],
  itinerary: [{
    bar: { type: Schema.Types.ObjectId, ref: 'Bar' },
    index: Number,
    active: { type: Boolean, default: true }
  }],
  active: Boolean
});

module.exports = mongoose.model('Crawl', CrawlSchema);