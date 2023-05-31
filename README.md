# hangman_terminal_game

Not only was this game an opprotunity to sharpen my javascript fundamentals. This was also an exploration in using various technologies to augment my own self learning.  To build this game I used the help of chatGPT in order to explore its effectiveness in guiding a simple project.  I also used google to search for solutions to a few problems I was facing.  I was able to find these solutions within sites like W3 Schools and Stack Overflow.

When we say something like, "I could do this on my own". I think we are really saying is "I could research how to do this on my own" or "At some point I have done enough research or learned from someone else and now I the skills to do this on my own".  

What I am trying to say is, no person is an island and at some point we are all reliant on each other in order to learn anything. 

<hr/>

<br/>

## Idea Generation

I first had GPT generate a list of possible games that I could build. 

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
>
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

Once I put this into my `hangman.js` as comments I felt like I had a good starting off point to start coding.  I then started filling out each of the sections with code that would achieve what the prompt was asking for.  Once the code was written and tested I then commited the code to git, this way I could track my code at each step as I progressed through developing it.

<hr/>

<br/>





