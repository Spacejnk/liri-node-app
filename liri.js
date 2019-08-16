// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");


//You should then be able to access your keys information like so
//

// Not working yet -- from ReadMe instructions Aug 14th 2019
//var spotify = new Spotify(keys.spotify);

// GET request for remote image

//------------------------------------ 

var fs = require('fs');
var readMe = fs.readFileSync('random.txt', 'utf8');
console.log(readMe);

//------------------------------------ 

// // Must require
// const axios = require('axios');
// const url = 'https://jsonplaceholder.typicode.com/users';
 
// // Make a request for a user with a given ID
// axios.get(url)
//   .then(function (response) {
//     // handle success
//     console.log(response.data[0].address);
//     console.log(response.data[1].name);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '2d8887942dd7463e8315102df1bc9651',
  secret: 'b96cad0de3984e0a95be833a1cce376b'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
