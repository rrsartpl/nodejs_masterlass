"use strict";

// Zależności
var fs = require('fs'); // Obiekt aplikacji


var jokes = {}; // Zbierz wszystkie żarty i zwróć je użytkownikowi

jokes.allJokes = function () {
  // Przeczytaj plik tekstowy zawierający żarty
  var fileContents = fs.readFileSync(__dirname + '/jokes.txt', 'utf8'); // Zamień łańcuch w tablicę 

  var arrayOfJokes = fileContents.split(/ \ r? \ n /); // Zwróć tablicę

  return arrayOfJokes;
}; // Eksportuj bibliotekę


module.exports = jokes;