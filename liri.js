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
//console.log(readMe);

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
//var liriInfoChoice = process.argv[3];

var artistChoice = process.argv[2];

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '2d8887942dd7463e8315102df1bc9651',
  secret: 'b96cad0de3984e0a95be833a1cce376b'
});


spotify.search({ type: 'artist', query: artistChoice, limit: 5}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  } 
  

  const results = data.artists;
  const artists = results.items;

  

  for (let i = 0 ; i < artists.length ; i++) {
    console.log(artists[i].name
      
    );
  }



});




// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");
//var movieName = "";
var movieThis = process.argv[2];


// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=" + movieThis + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("Title of the movie: " + response.data.Title);
    console.log("---------------Data---------------");
    console.log("Year the movie came out: " + response.data.Year);
    console.log("---------------Data---------------");
    console.log("IMDB Rating of the movie: " + response.data.imdbRating);
    console.log("---------------Data---------------");
    console.log("The movie's rating is: " + response.data.Country);
    console.log("---------------Data---------------");
    console.log("Language of the movie: " + response.data.Language);
    console.log("---------------Data---------------");
    console.log("Plot of the movie: " + response.data.Plot);
    console.log("---------------Data---------------");
    console.log("Actors in the movie: " + response.data.Actors);

  }
);
