// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");
var fs = require('fs');
var readMe = fs.readFileSync('random.txt', 'utf8');

var userInputChoice = process.argv[2];

// Not working yet -- from ReadMe instructions Aug 14th 2019
//var spotify = new Spotify(keys.spotify);

// -------------------------------------------------- spotify.search
 var Spotify = require('node-spotify-api');
//spotifyThisSong(userInputChoice);
// spotify-this-song function
function spotifyThisSong(userInputChoice) {
var spotify = new Spotify({
id:  SPOTIFY_ID,
secret:  SPOTIFY_ID
});

// Spotify Error Needs Work
spotify.search({ type: 'artist', query: userInputChoice, limit: 5}, function(err, data) {


  if (err) {
    return console.log('Error occurred: ' + err);
    
  } 
  
  const results = data.artists;
  const artists = results.items;

  for (let i = 0 ; i < artists.length ; i++) {
    console.log(artists[i].name);
  };

  
});

};

// --------------------------------------------------  
var mrNobody = "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/";
var netflix = "It's on Netflix!";
// Function movieThis
//movieThis(userInputChoice);
function movieThis(userInputChoice){
//var userInputChoice = process.argv[2];
axios.get("http://www.omdbapi.com/?t=" + userInputChoice + "&y=&plot=short&apikey=trilogy").then(
  function(response) {

    
    if (response.data.Title === "Undefined" ) {
      console.log(mrNobody);
      console.log(netflix);
    } else {

      console.log("---------------Begin Data---------------");
      console.log("Title of the movie: " + response.data.Title);
      console.log("---------------movie-this---------------");
      console.log("Year the movie came out: " + response.data.Year);
      console.log("---------------movie-this---------------");
      console.log("IMDB Rating of the movie: " + response.data.imdbRating);
      console.log("---------------movie-this---------------");
      console.log("The movie's rating is: " + response.data.Country);
      console.log("---------------movie-this---------------");
      console.log("Language of the movie: " + response.data.Language);
      console.log("---------------movie-this---------------");
      console.log("Plot of the movie: " + response.data.Plot);
      console.log("---------------movie-this---------------");
      console.log("Actors in the movie: " + response.data.Actors);
      console.log("---------------End Data---------------");
      
    }

  })
  .catch(function(error) {
    if (error.response) {
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
    
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
      console.log(error.config);
  });

};

//---------------------------------
  
function concertThis(userInputChoice) {
  let concertQueryURL = "https://rest.bandsintown.com/artists/" + userInputChoice + "/events?app_id=codingbootcamp";
  axios.get(concertQueryURL).then(
    function(response) {
      for (let i = 0; i < 3; i++) {
        console.log("-------------------------------searchBandsInTown-------------------------------");
        console.log("Venue: " + response.data[i].venue.name);
        console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
      }
    })
    .catch(function(error) {
      if (error.response) {
        
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
     
        console.log(error.request);
      }
       else {
     
        console.log("Error, no name or locations.", error.message);
      }
      console.log(error.config);
  });
};

//--------------------
//concertThis(userInputChoice);
var anotherArgu = process.argv[3];

function liriBot() {
  
  switch (anotherArgu, userInputChoice) {
  case "movie-this":
    movieThis(anotherArgu,userInputChoice);
    break;
  
  case "concert-this":
    concertThis(anotherArgu,userInputChoice);
    break;
  
  case "spotify-this-song":
    spotifyThisSong(anotherArgu,userInputChoice);

    break;
  
  case "do-what-it-says":
    doWhatItSays();
    break;
  }

};
// ---------------------

liriBot();

 function doWhatItSays() {

  
    



  console.log(readMe);
}
