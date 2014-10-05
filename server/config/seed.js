/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Bar = require('../api/bar/bar.model');
var Crawl = require('../api/crawl/crawl.model');
var User = require('../api/user/user.model');

Crawl.find({}).remove(function() {
  Crawl.create({
    name: 'test crawl',
    descritption: 'Super awesome crawl dude'
  },
  {
    name: 'Awesome crawl',
    descritption: 'Super awesome crawl dude'
  },
  {
    name: 'Berkeley crawl',
    descritption: 'Super awesome crawl dude'
  });
});

Bar.find({}).remove(function() {
  Bar.create({
    "is_claimed": false,
    "rating": 4.5,
    "review_count": 164,
    "name": "The Davis Beer Shoppe",
    "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/39PtuaL0WuGYeJ-ZS5vKiw/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/the-davis-beer-shoppe-davis",
    "phone": "5307565212",
    "snippet_text": "Still my favorite go to spot in Davis. Friendly and knowledgable staff, great environment, awesome beer selection, and a great place that doesn't have that...",
    "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/-iwjNoBP_fMU_88LT-JKZg/ms.jpg",
    "categories": [
        [
            "Pubs",
            "pubs"
        ],
        [
            "Beer, Wine & Spirits",
            "beer_and_wine"
        ]
    ],
    "display_phone": "+1-530-756-5212",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "id": "the-davis-beer-shoppe-davis",
    "is_closed": false,
    "location": {
        "city": "Davis",
        "display_address": [
            "211 G St",
            "Davis, CA 95616"
        ],
        "postal_code": "95616",
        "country_code": "US",
        "address": [
            "211 G St"
        ],
        "state_code": "CA"
    }
},
{
    "is_claimed": true,
    "rating": 4.5,
    "mobile_url": "http://m.yelp.com/biz/vini-wine-bar-davis",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
    "review_count": 70,
    "name": "VINI Wine Bar",
    "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/fLRDQZOkyFYW-GQiAGErWw/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/vini-wine-bar-davis",
    "phone": "5307565722",
    "snippet_text": "Stopped in a few weeks ago after dinner.  \nWhat a great concept. Excellent way to meet people and chat. \nThe entire staff was friendly and accommodating. \nI...",
    "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/GvBIIsQn9IGvBhwNuHDniw/ms.jpg",
    "categories": [
        [
            "Wine Bars",
            "wine_bars"
        ]
    ],
    "display_phone": "+1-530-756-5722",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "id": "vini-wine-bar-davis",
    "is_closed": false,
    "location": {
        "city": "Davis",
        "display_address": [
            "611 2nd St",
            "Davis, CA 95616"
        ],
        "geo_accuracy": 9,
        "postal_code": "95616",
        "country_code": "US",
        "address": [
            "611 2nd St"
        ],
        "coordinate": {
            "latitude": 38.5434392,
            "longitude": -121.7406685
        },
        "state_code": "CA"
    }
},
{
    "is_claimed": true,
    "rating": 4,
    "mobile_url": "http://m.yelp.com/biz/de-veres-irish-pub-davis-2",
    "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
    "review_count": 232,
    "name": "de Vere's Irish Pub",
    "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/fRO0RwNUyKNTcusuDrjCtw/ms.jpg",
    "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
    "url": "http://www.yelp.com/biz/de-veres-irish-pub-davis-2",
    "phone": "5302045533",
    "snippet_text": "So I stopped for dinner on the way to the movies and ordered a pint at a very crowded bar. For dinner I had a Reuben: corned beef with Swiss cheese and...",
    "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/1XLkue473SS80N3STWNOWw/ms.jpg",
    "categories": [
        [
            "Beer, Wine & Spirits",
            "beer_and_wine"
        ],
        [
            "Irish",
            "irish"
        ],
        [
            "Pubs",
            "pubs"
        ]
    ],
    "display_phone": "+1-530-204-5533",
    "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
    "id": "de-veres-irish-pub-davis-2",
    "is_closed": false,
    "location": {
        "city": "Davis",
        "display_address": [
            "217 E St",
            "Davis, CA 95616"
        ],
        "postal_code": "95616",
        "country_code": "US",
        "address": [
            "217 E St"
        ],
        "state_code": "CA"
    }
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});