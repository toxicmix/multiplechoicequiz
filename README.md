# Quiz Game

This program is a simple quiz game built using JavaScript and jQuery. It presents the user with multiple-choice questions and keeps track of their score. At the end of the game, the user can enter their name and save their score. The program also provides the functionality to view high scores.

## Program Structure

The program consists of the following key components:

### HTML Structure

- `index.html`: Contains the HTML structure for the quiz game, including question and answer elements, score display, timer, and high score functionality.

### JavaScript Code

- `script.js`: Contains the JavaScript code that controls the behavior of the quiz game.
  - Global variables: `questionEl`, `timeEl`, `card1El`, `card2El`, `choiceAEl`, `choiceBEl`, `choiceCEl`, `choice`, `score`, `currentQuestion`.
  - `main()` function: Entry point of the program, initializes the game by setting the timer and rendering the first question.
  - Event listeners: Attach click event listeners to the answer choices (`choiceAEl`, `choiceBEl`, `choiceCEl`) to handle user input and update the score accordingly.
  - `newScore()` function: Displays the final score, prompts the user to enter their name, saves the score and name to local storage, and resets the score.
  - `viewHighScores()` function: Retrieves high scores from local storage, sorts them in descending order, and displays them on the page.
  - `setTime()` function: Sets the timer interval and updates the timer display. If the timer reaches 0, it triggers the `newScore()` function.
  - `renderQuestion()` function: Updates the question and answer choices based on the current question index.

### CSS Styling

- `style.css`: Contains the CSS styles for the quiz game interface.

## Usage

To use the quiz game:

1. Include the necessary HTML structure in your HTML file.
2. Link the `script.js` and `style.css` files in your HTML file.
3. Customize the quiz questions by modifying the `myQuestions` array in the JavaScript code.
4. Run the `main()` function to start the quiz game.

## Features

- Multiple-choice quiz game.
- Timer countdown.
- Keeps track of the user's score.
- Displays the final score at the end of the game.
- Allows the user to enter their name and save their score.
- Displays high scores in descending order.
- Responsive and customizable user interface.

## link to deployed page

https://toxicmix.github.io/multiplechoicequiz/

![image](https://github.com/toxicmix/multiplechoicequiz/assets/72023909/715ffbf7-6e7c-4691-bed7-1586f6039603)
