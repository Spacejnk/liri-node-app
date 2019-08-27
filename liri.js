// require .env file
require("dotenv").config();
// require npm
var axios = require("axios");
var moment = require("moment");
// link and require keys file
var keys = require("./keys.js");
// require fs
var fs = require('fs');
//var readMe = fs.readFile('random.txt', 'utf8');
// userInputChoice 3rd and 4th argument
var userInputChoice = process.argv[2];
var anotherArgu = process.argv[3];
var Spotify = require('node-spotify-api');
// -------------------------------------------------- spotify.search
// spotify-this-song function
function spotifyThisSong(userInputChoice) {
  if (!userInputChoice) {
    userInputChoice = "The Sign Ace of Base";
};
  var spotify = new Spotify({
    id:  keys.spotify.id,
    secret:  keys.spotify.secret
  });

  // Spotify Error Needs Work
  spotify.search({ type: "track" , query: userInputChoice, limit: 1}, function(err, data) {


    if (err) {
      return console.log('Error occurred: ' + err);
    } 
   
    console.log("---------------------------------------------------");
    console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name);
    console.log("---------------------------------------------------");
    console.log("Song: " + data.tracks.items[0].name);
    console.log("---------------------------------------------------");
    console.log("Song link by Spotify: " + data.tracks.items[0].album.external_urls.spotify);
    console.log("---------------------------------------------------");
    console.log("Album Song is from: " + data.tracks.items[0].album.name);
    console.log("---------------------------------------------------");
  });

};

// --------------------------------------------------  
var mrNobody = "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/";
var netflix = "It's on Netflix!";
// Function movieThis
//movieThis(userInputChoice);
function movieThis(movie){
//var userInputChoice = process.argv[2];
axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
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
      console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[2].Value);
      console.log("---------------movie-this---------------");
      console.log("The movie's Country is: " + response.data.Country);
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
//concertThis(userInputChoice);
function concertThis(userInputChoice) {
  let concertQueryURL = "https://rest.bandsintown.com/artists/" + userInputChoice + "/events?app_id=codingbootcamp";
  axios.get(concertQueryURL).then(
    function(response) {
      let concerts = response.data;
      concerts = concerts.slice(0,3);
      for (let i = 0; i < concerts.length; i++) {
        console.log("-------------------------------searchBandsInTown-------------------------------");
        console.log("Venue: " + concerts[i].venue.name);
        console.log("Location: " + concerts[i].venue.city + ", " + concerts[i].venue.country);
        console.log("Date: " + moment(concerts[i].datetime).format("MM/DD/YYYY"));
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
function liriBot() {
  
  switch (userInputChoice) {
  case "movie-this":
    movieThis(anotherArgu);
    break;
  
  case "concert-this":
    concertThis(anotherArgu);
    break;
  
  case "spotify-this-song":
    spotifyThisSong(anotherArgu);

    break;
  
  case "do-what-it-says":
    doWhatItSays();

    break;

  default: 
      console.log("Invalid word choice. Try 'node liri.js' and any --case-- name above with title of movie or concert or song." + " Like so -->" + " node liri movie-this x-men  <--or with quotes if choice has more than one word-->  'The Lion King'  <--");
  };

};
liriBot(doWhatItSays);

// line 9 
//  function doWhatItSays(){

//   fs.readFile('random.txt', "utf8", function(error, data){
//     if (error) throw error
    
//     var showWhatIsSays = data.split(',');
//     process.argv[3] = showWhatIsSays[1]
//     console.log(showWhatIsSays[1])
//     console.log(liriBot);
//     //spotifyThisSong("Bob Marley");
  
//   });

  
//  }

function doWhatItSays(){
  fs.readFile('random.txt', "utf8", function(error, data){
      if (error) { 
          console.log("Error occured: " + error);
      }
      var txt = data.toString().split(",");
      for (var i = 0 ; i < txt.length ; i += 2){
          liriBot(txt[i], txt[i+1]);
      }
  });
}

 