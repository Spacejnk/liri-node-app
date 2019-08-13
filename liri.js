// // At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:
// require("dotenv").config();

// // Add the code required to import the keys.js file and store it in a variable.
// var keys = require("./keys.js");


// //You should then be able to access your keys information like so
// var spotify = new Spotify(keys.spotify);

// GET request for remote image

//------------------------------------ 

// Must require
const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/users';
 
// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data[0].address);
    console.log(response.data[1].name);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
