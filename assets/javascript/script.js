
document.getElementById("answer-choices").innerHTML = "";
document.getElementById("correct").innerHTML = "";
document.getElementById("wrong").innerHTML = "";

let question = document.querySelector("#questions")
let answer1 = document.querySelector("#first-choice")
let answer2 = document.querySelector("#second-choice")
let answer3 = document.querySelector("#third-choice")
let answer4 = document.querySelector("#fourth-choice")

const questions = [{
    questionOne: 'Commonly used data types DO not include:',
    answerOne: 'strings',
    answerTwo: 'booleans',
    answerThree: 'alerts',
    answerFour: 'numbers',
    // answer: 'answerThree'
  },

  {
    questionTwo: 'The condition in an if/else statement is enclosed with _______.',
    answerOne: 'quotes',
    answerTwo: ' curly brackets', 
    answerThree: ' parentheses',
    answerFour: 'square brackets',
    // answer: 'answerThree',
  },

  {
    questionThree: 'Arrays in JavaScript can be used to store _______.',
    answerOne: 'numbers and strings',
    answerTwo: 'other arrays',
    answerThree: 'booleans',
    answerFour: 'all of the above',
    // answer: 'answerFour',
  },

  {
    questionFour: 'String values must be enclosed within _______ when being assigned to variables.',
    answerOne: 'commas',
    answerTwo: 'curly brackets',
    answerThree: 'quotes',
    answerFour:  'parentheses',
    // answer: 'answerThree',
  },

  {
    questionFive: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answerOne: 'JavaScript',
    answerTwo: 'terminal/bash',
    answerThree: 'for loops',
    answerFour: 'console.log',
    // answer: answerFour
  }
];

// This is where I am at.
let quiz = function() {
  let question1 = questions[0].questionOne;
  let answerA = questions[0].answerOne;
  let answerB = questions[0].answerTwo;
  let answerC = questions[0].answerThree;
  let answerD = questions[0].answerFour;

};
// 

document.getElementById("start-quiz-button").onclick = function(){
quiz();
}





// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj.name);
// document.getElementById("demo").innerHTML = myJSON;


//replace elements with JS

// pseudocode (steps from Will)

// questions and answers tied together in an object

// add event listener to button

// event CB updates questions and answers

// when we start quiz, the timer starts

// when we pick an answer to a question, we check true or false

// if its false, subtract time. if it's true, add to score.

// when we click an answer, we also MOVE to the next question

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