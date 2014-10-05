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
  Bar.create(
    {
    "is_claimed": true,
    "rating": 5,
    "mobile_url": "http://m.yelp.com/biz/the-whining-pig-phoenix-2",
    "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
    "review_count": 151,
    "name": "The Whining Pig",
    "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/ST3L26O86EEO1mZRqlO0nQ/ms.jpg",
    "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
    "url": "http://www.yelp.com/biz/the-whining-pig-phoenix-2",
    "phone": "6026332134",
    "snippet_text": "This has to be the coolest little place to get a drink in Phoenix. It's super cozy which makes it easy to get lost in conversations with the people you come...",
    "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/KRwhteSi0OdsIk7wvlfEmQ/ms.jpg",
    "categories": [
        [
            "Wine Bars",
            "wine_bars"
        ],
        [
            "Lounges",
            "lounges"
        ],
        [
            "Pubs",
            "pubs"
        ]
    ],
    "display_phone": "+1-602-633-2134",
    "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
    "id": "the-whining-pig-phoenix-2",
    "is_closed": false,
    "location": {
        "city": "Phoenix",
        "display_address": [
            "1612 E Bethany Home Rd",
            "Phoenix, AZ 85016"
        ],
        "geo_accuracy": 9,
        "postal_code": "85016",
        "country_code": "US",
        "address": [
            "1612 E Bethany Home Rd"
        ],
        "coordinate": {
            "latitude": 33.523744,
            "longitude": -112.0467307
        },
        "state_code": "AZ"
        },
        "crawls": []
    },
    {
    "is_claimed": true,
    "rating": 4.5,
    "mobile_url": "http://m.yelp.com/biz/second-story-liquor-bar-scottsdale",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
    "review_count": 82,
    "name": "Second Story Liquor Bar",
    "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/U42_91vIfc_sDebjEmMiYQ/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/second-story-liquor-bar-scottsdale",
    "phone": "4809455555",
    "snippet_text": "Yea I went with 5 whole stars, why you ask? That's simple because they earned them. \n\nFor being as small as the space is they really aren't in your face...",
    "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/QK4ZA9gST1vB73-V7X8joA/ms.jpg",
    "categories": [
        [
            "Bars",
            "bars"
        ],
        [
            "American (New)",
            "newamerican"
        ]
    ],
    "display_phone": "+1-480-945-5555",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "id": "second-story-liquor-bar-scottsdale",
    "is_closed": false,
    "location": {
        "city": "Scottsdale",
        "display_address": [
            "4166 N Scottsdale Rd",
            "Scottsdale, AZ 85251"
        ],
        "geo_accuracy": 9,
        "postal_code": "85251",
        "country_code": "US",
        "address": [
            "4166 N Scottsdale Rd"
        ],
        "coordinate": {
            "latitude": 33.496647,
            "longitude": -111.926503
        },
        "state_code": "AZ"
        }
    },
    {
    "is_claimed": true,
    "rating": 4.5,
    "mobile_url": "http://m.yelp.com/biz/four-peaks-brewing-co-tempe-2",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
    "review_count": 1167,
    "name": "Four Peaks Brewing Co",
    "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/HJjOisnuc5R5WQC8MFtDZg/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/four-peaks-brewing-co-tempe-2",
    "menu_date_updated": 1387596854,
    "phone": "4803039967",
    "snippet_text": "Atmosphere: Pretty cool! Nice and big patio, industrial feel inside with all of the brewing equipment in view, and a mix of yuppies and college kids for...",
    "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/yJrAytEndrJKzSq2JwWuxQ/ms.jpg",
    "categories": [
        [
            "Pubs",
            "pubs"
        ],
        [
            "American (New)",
            "newamerican"
        ],
        [
            "Breweries",
            "breweries"
        ]
    ],
    "display_phone": "+1-480-303-9967",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "menu_provider": "single_platform",
    "id": "four-peaks-brewing-co-tempe-2",
    "is_closed": false,
    "location": {
        "city": "Tempe",
        "display_address": [
            "1340 E 8th St",
            "Ste 104",
            "Tempe, AZ 85281"
        ],
        "geo_accuracy": 9,
        "postal_code": "85281",
        "country_code": "US",
        "address": [
            "1340 E 8th St",
            "Ste 104"
        ],
        "coordinate": {
            "latitude": 33.419568,
            "longitude": -111.916097
        },
        "state_code": "AZ"
        }
    },
    {
    "is_claimed": true,
    "rating": 4.5,
    "mobile_url": "http://m.yelp.com/biz/four-peaks-tasting-room-tempe",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
    "review_count": 50,
    "name": "Four Peaks Tasting Room",
    "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/IR-N8_ItQD3zmjYWww9dPg/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/four-peaks-tasting-room-tempe",
    "phone": "4806342976",
    "snippet_text": "Cool place. I have always liked Four Peaks. I am not a local but I never fail to have something they make when I come to the area. It is a pretty damn good...",
    "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/EW-mQCLRgRiIabg4X5zV3Q/ms.jpg",
    "categories": [
        [
            "Breweries",
            "breweries"
        ],
        [
            "Pubs",
            "pubs"
        ]
    ],
    "display_phone": "+1-480-634-2976",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "id": "four-peaks-tasting-room-tempe",
    "is_closed": false,
    "location": {
        "city": "Tempe",
        "display_address": [
            "2401 S Wilson St",
            "Tempe, AZ 85282"
        ],
        "postal_code": "85282",
        "country_code": "US",
        "address": [
            "2401 S Wilson St"
        ],
        "state_code": "AZ"
        }
    },
    {
    "is_claimed": true,
    "rating": 4,
    "mobile_url": "http://m.yelp.com/biz/old-town-tavern-scottsdale-2",
    "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
    "review_count": 114,
    "name": "Old Town Tavern",
    "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/Y11IsQIbPWCZlY0Zz8QXHg/ms.jpg",
    "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
    "url": "http://www.yelp.com/biz/old-town-tavern-scottsdale-2",
    "phone": "4809452882",
    "snippet_text": "This place does not feel like Arizona.  This looks more like an old German building.  They have a great small patio upstairs with a neat view of an old...",
    "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/JZk-toypF5JVrgnuiph0Dw/ms.jpg",
    "categories": [
        [
            "Bars",
            "bars"
        ],
        [
            "Music Venues",
            "musicvenues"
        ]
    ],
    "display_phone": "+1-480-945-2882",
    "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
    "id": "old-town-tavern-scottsdale-2",
    "is_closed": false,
    "location": {
        "city": "Scottsdale",
        "display_address": [
            "7320 E Scottsdale Mall",
            "Scottsdale, AZ 85251"
        ],
        "geo_accuracy": 9,
        "postal_code": "85251",
        "country_code": "US",
        "address": [
            "7320 E Scottsdale Mall"
        ],
        "coordinate": {
            "latitude": 33.4932316,
            "longitude": -111.9240949
        },
        "state_code": "AZ"
        }
    },
    {
    "is_claimed": true,
    "rating": 4.5,
    "mobile_url": "http://m.yelp.com/biz/crudo-phoenix-2",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
    "review_count": 194,
    "name": "Crudo",
    "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/wwpjMd0s5VaQTIW323_RXw/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/crudo-phoenix-2",
    "menu_date_updated": 1399877507,
    "phone": "6023588666",
    "snippet_text": "Hit up crudo for the restaurant week menu last weekend. Great place! It's tucked back behind a strip mall but when you walk in that is totally forgotten....",
    "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/lf--qmiPl6pNeZ0Yy16Tug/ms.jpg",
    "categories": [
        [
            "Italian",
            "italian"
        ],
        [
            "Bars",
            "bars"
        ],
        [
            "American (Traditional)",
            "tradamerican"
        ]
    ],
    "display_phone": "+1-602-358-8666",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "menu_provider": "single_platform",
    "id": "crudo-phoenix-2",
    "is_closed": false,
    "location": {
        "city": "Phoenix",
        "display_address": [
            "3603 E Indian School Rd",
            "Ste B",
            "Phoenix, AZ 85018"
        ],
        "postal_code": "85018",
        "country_code": "US",
        "address": [
            "3603 E Indian School Rd",
            "Ste B"
        ],
        "state_code": "AZ"
        }
    },
    {
    "is_claimed": true,
    "rating": 4.5,
    "mobile_url": "http://m.yelp.com/biz/taste-of-tops-tempe",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
    "review_count": 87,
    "name": "Taste of Tops",
    "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/z3tY8qIMPyzhUpd4W4FC3g/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/taste-of-tops-tempe",
    "phone": "4809672520",
    "snippet_text": "Lots of Craft Beers! So many choices....\nThey do not serve food, but you are welcome to get something next door & bring it in.\nBartender was very nice &...",
    "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/N33y3mQt4NWTlHmxPlqPFQ/ms.jpg",
    "categories": [
        [
            "Wine Bars",
            "wine_bars"
        ],
        [
            "Pubs",
            "pubs"
        ]
    ],
    "display_phone": "+1-480-967-2520",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "id": "taste-of-tops-tempe",
    "is_closed": false,
    "location": {
        "city": "Tempe",
        "display_address": [
            "403 W University Dr",
            "Tempe, AZ 85281"
        ],
        "postal_code": "85281",
        "country_code": "US",
        "address": [
            "403 W University Dr"
        ],
        "state_code": "AZ"
        }
    },
    {
    "is_claimed": true,
    "rating": 4.5,
    "mobile_url": "http://m.yelp.com/biz/filmbar-phoenix",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
    "review_count": 194,
    "name": "FilmBar",
    "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/NfwNzCHKGdQsr1JaTVLTaQ/ms.jpg",
    "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
    "url": "http://www.yelp.com/biz/filmbar-phoenix",
    "phone": "6025959187",
    "snippet_text": "This is one of the cool hidden gems in the art district in Phoenix.  Lots of people from out of state say that we don't have any culture and this will...",
    "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/Umr2nyaI2z7TXL-v7zgw3g/ms.jpg",
    "categories": [
        [
            "Cinema",
            "movietheaters"
        ],
        [
            "Lounges",
            "lounges"
        ]
    ],
    "display_phone": "+1-602-595-9187",
    "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "id": "filmbar-phoenix",
    "is_closed": false,
    "location": {
        "city": "Phoenix",
        "display_address": [
            "815 N 2nd St",
            "Phoenix, AZ 85004"
        ],
        "postal_code": "85004",
        "country_code": "US",
        "address": [
            "815 N 2nd St"
        ],
        "state_code": "AZ"
        }
    },
      {
    "is_claimed": false,
    "rating": 4.5,
    "review_count": 164,
    "name": "The Davis Beer Shoppe",
    "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/39PtuaL0WuGYeJ-ZS5vKiw/ms.jpg",
    "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
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