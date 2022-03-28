//clearing the elements on the screen 
document.getElementById("answer-choices").innerHTML = "";
document.getElementById("correct").innerHTML = "";
document.getElementById("wrong").innerHTML = "";
//selecting html elements for where i will display quiz questions/answers
let question = document.querySelector("#questions")
let answer1 = document.querySelector("#first-choice")
let answer2 = document.querySelector("#second-choice")
let answer3 = document.querySelector("#third-choice")
let answer4 = document.querySelector("#fourth-choice")


// array of objects, questions and answers
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

// quiz function. I need to put in a "for" loop to go through the array each time I click on an answer choice
let quiz = function() {
let question1 = questions[0].questionOne;
let answerA = questions[0].answerOne;
let answerB = questions[0].answerTwo;
let answerC = questions[0].answerThree;
let answerD = questions[0].answerFour;

document.getElementById("questions").innerHTML = question1;
console.log(answerA);
answer1.textContent = answerA.textContent
document.getElementById("#first-choice").innerHTML = answerA
document.getElementById("#second-choice").innerHTML = answerB;
document.getElementById("#third-choice").innerHTML = answerC;
document.getElementById("#fourth-choice").innerHTML = answerD;
}

// button listener that starts the quiz
document.getElementById("start-quiz-button").addEventListener("click", quiz)

//need to add a timer function that starts at the same time
// document.getElementById("timer").addEventListener("click", timer)






