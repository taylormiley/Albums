// Create a variable that holds your name
var myName = "Taylor Miley";

// Create an object that holds your personal information
var myInfo = {
  age: 25,
  last_company: "Jimmy John's",
  marital_status: "Single",
  spouse: ""
};

// Add your name as a new key on the info object
myInfo.name = "Taylor Miley";

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

var masterOfPuppets = {
  name: "Master of Puppets",
  artist: Metallica,
  year: 1986,
  sales: 16000000,
  number_of_hits: 3,
}

var singTheSorrow = {
  name: "Sing the Sorrow",
  artist: AFI,
  year: 
}

// Create an array that holds records
var recordArray = [Eliminator, masterOfPuppets, singTheSorrow];

// Add at least two more album objects to the array



/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var rating = function (album, rating) {
  
  // Add the rating to the album
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function() {
  for () {
    someFunction();
  }
};

// Call the function that starts modifying the array
modifyAlbums();
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById(records);

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
