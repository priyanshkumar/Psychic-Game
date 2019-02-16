var letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var userenter = [];
var wins = 0;
var counter = 0;
var loss = 0;
var guess = 10;

document.onkeyup = function(event) {
  var guessOutput = document.getElementById("guessLeft");
  var letterOutput = document.getElementById("letterGuess");
  var lossOutput = document.getElementById("lossText");
  var winOutput = document.getElementById("winText");
  winOutput.textContent = wins;
  guessOutput.textContent = guess;
  lossOutput.textContent = loss;
  userenter[counter] = event.key;

  var random = Math.floor(Math.random() * 26 + 1);
  if (counter <= 8) {
    if (userenter[counter] === letterArray[random]) {
      wins++;
      counter = 0;
      guess = 10;
      winOutput.textContent = wins;
      alert("You guessed letter '" + letterArray[random] + "' right!");
    } else {
      counter++;
      guess--;
      guessOutput.textContent = guess;
      for (var i = 0; i < userenter.length; i++) {
        var letters = letters + "," + userenter[i];
      }
      letterOutput.textContent = letters;
    }
  } else {
    loss++;
    counter = 0;
    guess = 10;
    lossOutput.textContent = loss;
    letterOutput.textContent = " ";
    userenter.length = 0;
    alert("You were unabel to guess letter '" + letterArray[random] + "'");
  }
};
