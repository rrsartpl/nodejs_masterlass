// Obiekt aplikacji
var math = {};

// Pobierz losową liczbę całkowitą między dwiema liczbami całkowitymi
// Zainspirowany: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
math.getRandomNumber = function(min, max) {
    min = typeof(min) == 'number' && min % 1 === 0 ? min : 0;
    max = typeof(max) == 'number' && max % 1 === 0 ? max : 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// Eksportuj bibliotekę
module.exports = math;