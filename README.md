# hangman_terminal_game

Not only was this game an opprotunity to sharpen my javascript fundamentals. This was also an exploration in using various technologies to augment my own self learning.  To build this game I used the help of chatGPT in order to explore its effectiveness in guiding a simple project.  I also used google to search for solutions to a few problems I was facing.  I was able to find these solutions within sites like W3 Schools and Stack Overflow.

When we say something like, "I could do this on my own". I think we are really saying is "I could research how to do this on my own" or "At some point I have done enough research or learned from someone else and now I the skills to do this on my own".  

What I am trying to say is, no person is an island and at some point we are all reliant on each other in order to learn anything. 

### List of resources:

[My chat with GPT](https://chat.openai.com/share/06f2e09e-8ac0-47b2-839b-c43bbacb6759)

[isNaN - W3 Schools](https://www.w3schools.com/jsref/jsref_isnan.asp)

[gitHub question - Stack Overflow](https://stackoverflow.com/questions/448919/how-can-i-remove-a-commit-on-github)

<hr/>

<br/>

## Idea Generation

I first had GPT generate a list of possible games that I could build. 

>ME - What are some ideas for a terminal game to build so I can practice fundamental javascript skills

<br/>

This is the list it gave me:

>GPT- Building a terminal game is a great way to practice your fundamental JavaScript skills. Here are some ideas for terminal games you can build:
>1. Guess the Number: The computer generates a random number, and the player needs to guess it within a certain number of attempts. The game provides hints like "higher" or "lower" after each guess.
>
>2. Hangman: The computer selects a word, and the player needs to guess it by suggesting letters. The player has a limited number of incorrect guesses before the game ends.
>
>3. Tic-Tac-Toe: Build a two-player tic-tac-toe game where players take turns entering their moves in the terminal until there's a winner or a tie.
>
>4. Blackjack: Create a simplified version of the popular card game Blackjack. The player plays against the computer dealer, aiming to get as close to 21 as possible without going over.
>
>5. Word Jumble: The game presents a jumbled word to the player, who needs to guess the original word. You can use an array of predefined words and randomly select one for each game.
>
>6. Rock, Paper, Scissors: Implement the classic game of Rock, Paper, Scissors where the player competes against the computer. The game determines the winner based on the choices made by both players.
>
>7. Mastermind: The computer generates a secret code consisting of a sequence of colored pegs. The player needs to guess the code within a certain number of attempts, and the game provides feedback on the correctness of each guess.
>
>8. Snake: Create a terminal version of the classic Snake game. The player controls a snake that grows longer as it consumes food, and the objective is to avoid collision with the walls or the snake's own body.
>
<br/>

I decided to go with the hangman game since I have never made one and wanted to challenge myself.  

I then used chatGPT to breakdown the process of creating this game into smaller more manegable chunks.  This became the start of my pseudocode.

>ME - Hangman sounds like a good idea but I am having trouble getting started. Without give me the code can you break down the steps needed in order to make this game in the terminal?

<br/>

>GPT - Certainly! Here's a step-by-step breakdown of the process to create a Hangman game in the terminal using JavaScript:
>
>Choose a word: Create an array of words from which the game will randomly select one. You can start with a small set of words and expand it later.
>
>Set up the game loop: Create a loop that continues until the game is won or lost. This loop will handle each round of the game.
>
>Display the initial state: At the start of each round, display the current state of the hidden word to the player. Initially, all letters are hidden and replaced with underscores or dashes.
>
>Prompt for input: Ask the player to enter a letter guess. You can use the readline module in Node.js to read user input from the terminal.
>
>Check the input: Validate the player's input to ensure it is a single letter. Handle cases where the player enters an invalid input (e.g., a number or multiple letters).
>
>Update the game state: Determine if the guessed letter is correct and update the hidden word accordingly. Replace the corresponding underscores or dashes with the correct letter.
>
>Track incorrect guesses: Maintain a counter to keep track of the number of incorrect guesses the player has made. Display the hangman figure corresponding to the number of incorrect guesses.
>
>Check win/lose conditions: After each guess, check if the player has won or lost the game. The game is won if all letters have been correctly guessed. The game is lost if the player has made a certain number of incorrect guesses.
>
>Display the result: After the game loop ends (either by winning or losing), display the result to the player. Show the correct word if the game is lost.
>
>Prompt for a new game: Ask the player if they want to play again. If they agree, restart the game loop. If not, exit the program.
>
>These steps provide a high-level overview of the Hangman game's structure and flow. As you start implementing each step, you can break them down into smaller tasks and gradually build the game.

Once I read through this and put this into my `hangman.js` as comments I felt like I had a good starting off point to start coding.  I then started filling out each of the sections with code that would achieve what the prompt was asking for.  Once the code was written and tested I then commited the code to git, this way I could track my code at each step as I progressed through developing it.

<hr/>

<br/>

## Clarification

I was able to get through the first prompt, which was To create an array of words and randomly choose from it.  Once I got to the next prompt however, I felt like this step needed to be broken down a bit more.  Again I turned to GPT to expand on this

>ME - can you expand on how to set up the game loop?

<br/>

The response that it gave me started out pretty useful and then it just reiterated the steps that it gave me previously. This is the part I found useful

>GPT - Certainly! Setting up the game loop involves creating a loop that continues until the game is won or lost. Here's an expanded explanation of how to set up the game loop for the Hangman game:
>
>1. Initialize game variables: Before the game loop, initialize the necessary variables. These variables may include the hidden word, the player's guessed letters, the maximum number of incorrect guesses allowed, and the current number of incorrect guesses.
>
>2. Start the loop: Use a while loop to create the game loop. The loop condition should check whether the game is still in progress. You can use a boolean variable like gameInProgress to control the loop. For example:
>```javascript
>let gameInProgress = true;
>
>while (gameInProgress) {
>  // Game logic goes here
>}
>```

<br/>

Seeing the idea to initialize all the game variables gave me enough to get started on this section and I also added it to my pseudocode.


## More Help from GPT and W3

I was working validating the user input and wanted to have a condition that checked if the input was a number.  Since the `prompt-sync` package returns a string I started out trying to use the `parseInt()` and `typeof` javascript methods.  This approach didnot give me the desired results.  Within the response of my question to chatGPT I noticed another method `isNaN`.  After a bit of research at [W3 Schools](https://www.w3schools.com/jsref/jsref_isnan.asp) i tested this out in my code and it worked perfectly. 

The last help I asked of chatGPT was for clarity around itterating over a string. I hgad be converting a string to an array in the `updateDashedWords()` function.  Once I started iterating over the string directly my code become DRYer, instantly.





