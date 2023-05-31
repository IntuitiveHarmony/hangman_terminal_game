var prompt = require("prompt-sync")();
// All Steps were provided by chatGPT,  code provided by me and refrenced when applicable

// 1. Choose a word: Create an array of words from which the game will randomly select one. You can start with a small set of words and expand it later.
const wordList = ["cycle", "subway", "quiz"];

function chooseWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}
// console.log(chooseWord());

// 2. Set up the game loop: Create a loop that continues until the game is won or lost. This loop will handle each round of the game.
// Initialize game variables: Before the game loop, initialize the necessary variables. These variables may include the hidden word, the player's guessed letters, the maximum number of incorrect guesses allowed, and the current number of incorrect guesses.

let gameInProgress = true;
// new secret word for each game
let secretWord = chooseWord();

const maxGuesses = 6;
let currentGuess = 0;
let incorrectGuesses = 0;
let guessedLetters = [];

while (gameInProgress && incorrectGuesses <= maxGuesses) {
  displayState(secretWord);
  playerGuess();
}

// 3. Display the initial state: At the start of each round, display the current state of the hidden word to the player. Initially, all letters are hidden and replaced with underscores or dashes.
function displayState(word) {
  let dashedWord = "";
  // dashedWord = "";
  for (i = 0; i < word.length; i++) {
    // 6. Update the game state: Determine if the guessed letter is correct and update the hidden word accordingly. Replace the corresponding underscores or dashes with the correct letter.
    if (guessedLetters.includes(word[i])) {
      dashedWord += word[i];
    } else {
      // hide the secret word from the user
      dashedWord += "-";
    }
  }
  checkWin(dashedWord);

  console.log(`Are you able to guess this ${word.length} letter word?\n`);
  console.log(dashedWord);
  console.log(`Letters Tried: ${guessedLetters}`);
  console.log(
    `\nYou have ${
      maxGuesses - incorrectGuesses
    } chances to guess each letter correctly\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
  );
}
// 4. Prompt for input: Ask the player to enter a letter guess. You can use the `readline` module in Node.js to read user input from the terminal.
function playerGuess() {
  let guess = prompt(`CHOOSE A LETTER: `);
  // 5. Check the input: Validate the player's input to ensure it is a single letter. Handle cases where the player enters an invalid input (e.g., a number or multiple letters).
  // used isNaN to check if the input is a number https://www.w3schools.com/jsref/jsref_isnan.asp
  if (!isNaN(guess)) {
    console.log(
      `\nYou entered the number ${guess}. Please enter a single letter 😎`
    );
  } else if (guessedLetters.includes(guess)) {
    console.log(`\nYou have already tried ${guess}!`);
  } else if (guess.length === 1) {
    // input can only be one character
    guessedLetters.push(guess.toLowerCase());
  } else {
    console.log(`\nYou entered: ${guess}. Please enter a single character 😎`);
  }
}

// 7. Track incorrect guesses: Maintain a counter to keep track of the number of incorrect guesses the player has made. Display the hangman figure corresponding to the number of incorrect guesses.

// 8. Check win/lose conditions: After each guess, check if the player has won or lost the game. The game is won if all letters have been correctly guessed. The game is lost if the player has made a certain number of incorrect guesses.
function checkWin(dashedWord) {
  console.log(secretWord, dashedWord);
  if (secretWord === dashedWord) {
    console.log(`You've won!`);
    gameInProgress = false;
  }
}
// 9. Display the result: After the game loop ends (either by winning or losing), display the result to the player. Show the correct word if the game is lost.

// 10. Prompt for a new game: Ask the player if they want to play again. If they agree, restart the game loop. If not, exit the program.

// These steps provide a high-level overview of the Hangman game's structure and flow. As you start implementing each step, you can break them down into smaller tasks and gradually build the game.
