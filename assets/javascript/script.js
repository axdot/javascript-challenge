const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("questions");
element.appendChild(para);







































// pseudocode (steps from Will)

// an array of questions and answers
// questions and answers tied together in an object
// add event listener to button
// event CB updates questions and answers
// when we start quiz, the timer starts
// when we pick an answer to a question, we check true or false
// if its false, subtract time. if it's true, add to score.
// next question appears

// at the end of the quiz, we need a screen to input name






// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score