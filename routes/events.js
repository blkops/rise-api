var express = require('express');
var router = express.Router();

/* GET events listing. */
// Display all events
router.get('/', function(req, res) {
  res.status(200).json([
    {
      
    },
    {
        'twitter': '', 
        'name': 'Lexington Square',
        'address': '13 Depot Square',
        'city': 'Lexington',
        'state': 'MA',
        'postcode': '2420',
        'lat': 42.448558,
        'long': -71.227846,
        'country': 'USA',
        'date': new Date(),
        'time': '12:00PM',
        'hashtag':['blacklivesmatter']
      },
      {
        'twitter': 'eva_shang', 
        'name': 'Harvard Memorial Church',
        'address': '1 Harvard Yard',
        'city': 'Cambridge',
        'state': 'MA',
        'postcode': '2138',
        'lat': 42.374915,
        'long': -71.116053,
        'country': 'USA',
        'date': new Date(),
        'time': '12:00PM',
        'hashtag':['thisstopstoday', 'blacklivesmatter']
      },
      {
        'twitter':'',
        'name': 'Railroad Park',
        'address': '1600 1st Avenue',
        'city': 'Birmingham',
        'state': 'AL',
        'postcode': '35233',
        'lat': 33.509532,
        'long': -86.809481,
        'date': new Date(),
        'time': '4:30PM',
        'hashtag': []
      },
      {
        'twitter':'',
        'name': 'King of Prussia Mall',
        'address': '160 N. Gulph Road',
        'city': 'King of Prussia',
        'state': 'PA',
        'postcode': '19406',
        'lat': 40.094758,
        'long': -75.381481,
        'date': new Date(),
        'time': '5:00PM',
        'hashtag': []
      }
  ])
});

// Create new event form
router.get('/new', function(req, res) {
  res.render('events', { title: 'New Event' }); 
});

// Display specific event info
router.get('/:id', function(req, res) {
  //res.end('specific event:' + ' ' + JSON.stringify(req.query));
  res.status(200).json( 
      {
        'twitter': 'eva_shang', 
        'name': 'Harvard Memorial Church',
        'address': '1 Harvard Yard',
        'city': 'Cambridge',
        'state': 'MA',
        'postcode': '2138',
        'lat': 42.374915,
        'long': -71.116053,
        'country': 'USA',
        'date': new Date(),
        'time': '12:00PM' 
      })
});



// Create new event action
router.post('/new', function(req, res) {
  /*
  Event.create({

  }).save(function(err) {
    if(!err) {
    
    }
  });
  */
});

router.get('/edit/:id', function(req, res) {

});

router.post('/edit/:id', function(req, res) {
  
});

router.get('/delete/:id', function(req, res) {

});

router.post('/delete/:id', function(req, res) {

});

module.exports = router;
