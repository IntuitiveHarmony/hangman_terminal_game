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
let dashedWord = "";

const maxGuesses = 6;
let gameNumber = 0;
let currentGuess = 0;
let incorrectGuesses = 0;
let guessedLetters = [];

function main() {
  // initialize parameters for another game
  gameInProgress = true;
  secretWord = chooseWord();
  dashedWord = "";
  currentGuess = 0;
  incorrectGuesses = 0;
  guessedLetters = [];

  while (gameInProgress) {
    updateDashedWord();
    displayState();
    playerGuess();
    updateDashedWord();
    checkWin();
  }
  promptRestart();
}

// Call main for the first time
if (gameNumber === 0) {
  main();
}

function updateDashedWord() {
  dashedWord = "";
  for (i = 0; i < secretWord.length; i++) {
    // 6. Update the game state: Determine if the guessed letter is correct and update the hidden word accordingly. Replace the corresponding underscores or dashes with the correct letter.
    if (guessedLetters.includes(secretWord[i])) {
      dashedWord += secretWord[i];
    } else {
      // hide the secret word from the user
      dashedWord += "-";
    }
  }
}

// 3. Display the initial state: At the start of each round, display the current state of the hidden word to the player. Initially, all letters are hidden and replaced with underscores or dashes.
function displayState(word) {
  console.log(
    `\nAre you able to guess this ${secretWord.length} letter word?\n`
  );
  console.log(dashedWord);
  console.log(`Letters Tried: ${guessedLetters}`);
  console.log(
    `\nYou have ${
      maxGuesses - incorrectGuesses
    } chances left to guess each letter correctly\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
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
    currentGuess += 1;
    // 7. Track incorrect guesses: Maintain a counter to keep track of the number of incorrect guesses the player has made. Display the hangman figure corresponding to the number of incorrect guesses.
    if (!secretWord.includes(guess)) {
      console.log(`\nSorry! no ${guess}'s`);
      incorrectGuesses += 1;
    } else {
      console.log(`\nNice! ${guess} is in the secret word`);
    }
    // Add letters to our already guessed letters array
    guessedLetters.push(guess.toLowerCase());
  } else {
    console.log(`\nYou entered: ${guess}. Please enter a single character 😎`);
  }
}

// 8. Check win/lose conditions: After each guess, check if the player has won or lost the game. The game is won if all letters have been correctly guessed. The game is lost if the player has made a certain number of incorrect guesses.
function checkWin() {
  // console.log(secretWord, dashedWord);
  if (secretWord === dashedWord) {
    displayWin();
  } else if (incorrectGuesses >= maxGuesses) {
    displayLoss();
  }
}
// 9. Display the result: After the game loop ends (either by winning or losing), display the result to the player. Show the correct word if the game is lost.
function displayWin() {
  console.log(
    `You've won!\n\nThe word was ${secretWord}.\nIt took you ${currentGuess} guesses`
  );
  gameInProgress = false;
}

function displayLoss() {
  console.log(
    `You've lost!\n\nThe word was ${secretWord}.\nYou used ${currentGuess} guesses`
  );
  gameInProgress = false;
}
// 10. Prompt for a new game: Ask the player if they want to play again. If they agree, restart the game loop. If not, exit the program.
function promptRestart() {
  console.log(
    `\nWould you like to play another round of hangman?\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
  );
  let restart = prompt(`ENTER Y or N: `);
  if (restart.toLowerCase() === "y") {
    console.log(`\nAwesome! Lets play again!`);
    main();
  } else {
    console.log(`\nThanks for playing Hangman!`);
  }
}
// These steps provide a high-level overview of the Hangman game's structure and flow. As you start implementing each step, you can break them down into smaller tasks and gradually build the game.
