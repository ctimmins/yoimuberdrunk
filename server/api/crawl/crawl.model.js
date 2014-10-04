'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CrawlSchema = new Schema({
  name: String,
  description: String,
  dateCreated: Date,
  dateHosted: Date,
  hosts: [],
  comments: [{body: String, date: Date}],
  itinerary: {},
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Crawl', CrawlSchema);