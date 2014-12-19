// Bring Mongoose into the project
var mongoose = require('mongoose');

// Build the connection string
/*
var dbURI = 'mongodb://ds063330.mongolab.com:63330/blacklivesmatter';
var dbOptions = {
  'user': 'xango',
  'pass': '`R#IIV,w|"N1h'
};
//mongoose.connect(dbURI, dbOptions);
*/
var dbURI = 'mongodb://localhost/blacklivesmatter';
mongoose.connect(dbURI);

// Build the Schema
var eventSchema = new mongoose.Schema({ 
  contactName: String,
  contactEmail: String,
  locationName: String,
  eventName: String,
  url: String,
  description: String,
  address: String,
  city: String,
  state: String,
  postcode: String,
  latitude: Number,
  longitude: Number,
  country: String,
  date: Date,
  time: Date,
  hashtag: [String]
});

// Convert Schema to into a Model
var Event = mongoose.model('Event', eventSchema);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected');
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error');
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});


