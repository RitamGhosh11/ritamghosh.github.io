var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("You're in a Battleship. Aim and fire! (put a number 0-6)");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("Hit!");
      2;
    } else {
      alert("You missed!");
    }
    if (hits == 3) {
      isSunk = true;
      alert("You sank my ship!");
    }
  }
}
var stats = `Stats: You took ${guesses} guesses. So your accuracy was ${
  (3 / guesses) * 100
}%`;

alert(stats);
