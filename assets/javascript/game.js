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

var random = Math.floor(Math.random() * 26 + 1);

document.onkeyup = function(event) {
  var guessOutput = document.getElementById("guessLeft");
  var letterOutput = document.getElementById("letterGuess");
  var lossOutput = document.getElementById("lossText");
  var winOutput = document.getElementById("winText");
  var guessletter = document.getElementById("guess");
  var messageOutput = document.getElementById("message");

  winOutput.textContent = wins;
  guessOutput.textContent = guess;
  lossOutput.textContent = loss;
  guessletter.textContent = "_";

  userenter[counter] = event.key;

  messageOutput.textContent = "";

  if (
    guessletter.classList.contains("green") ||
    messageOutput.classList.contains("green")
  ) {
    guessletter.classList.remove("green");
    messageOutput.classList.remove("green");
  }
  if (
    guessletter.classList.contains("red") ||
    messageOutput.classList.contains("red")
  ) {
    guessletter.classList.remove("red");
    messageOutput.classList.remove("red");
  }

  if (counter <= 8) {
    if (userenter[counter] === letterArray[random]) {
      wins++;
      counter = 0;
      guess = 10;

      guessletter.classList.add("green");
      messageOutput.classList.add("green");

      guessletter.textContent = letterArray[random];
      letterOutput.textContent = letters;
      winOutput.textContent = wins;
      guessOutput.textContent = guess;
      messageOutput.textContent =
        "You guessed letter '" + letterArray[random] + "' right!";

      userenter.length = 0;
      random = Math.floor(Math.random() * 26 + 1);
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

    guessletter.classList.add("red");
    messageOutput.classList.add("red");

    guessletter.textContent = letterArray[random];
    lossOutput.textContent = loss;
    guessOutput.textContent = guess;
    letterOutput.textContent = " ";
    letterOutput.textContent = letters;
    messageOutput.textContent =
      "You were unabel to guess letter '" + letterArray[random] + "'";

    userenter.length = 0;
    random = Math.floor(Math.random() * 26 + 1);
  }
};
