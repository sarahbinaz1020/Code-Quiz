// PROGRAM LOGIC
//     presented with question1 text
//     presented with question1 answer buttons
// start button
var $startbtn = document.querySelector("#startbtn");
// start prompt
var $startPrompt = document.querySelector("#start-prompt");
//question prompt
var $questionPrompt = document.querySelector("#question-prompt");
// question text
var $questionText = document.querySelector("#question-text");
// answer options for questions
var $questionOptions = document.querySelector("#options");
// timer
var $timer = document.querySelector("#timer");
// seconds left on timer
var secondsLeft = 100;
// Global var to store our timer
var timerInterval;
// Global var to store our current question index
var currentQuestion = 0;
// click on start button to start the quiz
$startbtn.addEventListener("click", function (e) {
  // Hide start prompt
  $startPrompt.classList.add("hide");
  // Show our question prompt
  $questionPrompt.classList.remove("hide");
  // Show our timer
  $timer.classList.remove("hide");
  // Start Timer
  setTime();
  // Render Question
  renderQuestion();
});
function renderQuestion() {
  // Clear out previous buttons
  $questionOptions.innerHTML = "";
  
  // Update content with our current question
  $questionText.textContent = questions[currentQuestion].text;
  // give the options
  questions[currentQuestion].options.forEach(function (item) {
    // create a html buttion
    var $btn = document.createElement("button");
    // set text of current button to item
    $btn.textContent = item;
    // append it to our options div
    $questionOptions.append($btn);
  });
}
$questionOptions.addEventListener("click", function (e) {
  // if the target is not a button exit early
  if (!e.target.matches("button")) return;
  var val = e.target.textContent;
  if (val === questions[currentQuestion].correctAnswer) {
    console.log("You are correct");
  } else {
    console.log("you are wrong");
  }
  // increase question index
  currentQuestion++;
  // check to make sure we still have questions
  if (currentQuestion === questions.length) {
    // end the game here
  } else {
    renderQuestion();
  }
});
// a timer starts with 100 seconds
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    // Decrease Timer
    secondsLeft--;
    // Update timer HTML element
    $timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}
var questions = [
  {
    text: "What is your name?",
    correctAnswer: "Correct answer here",
    options: ["Answer1", "Answer2", "Correct answer here"],
  },
  {
    text: "What is your name2?",
    correctAnswer: "Correct answer here",
    options: ["Answer1", "Answer2", "Correct answer here"],
  },
  {
    text: "What is your name3?",
    correctAnswer: "Correct answer here",
    options: ["Answer1", "Answer2", "Correct answer here"],
  },
  {
    text: "What is your name4?",
    correctAnswer: "Correct answer here",
    options: ["Answer1", "Answer2", "Correct answer here"],
  },
  {
    text: "What is your name5?",
    correctAnswer: "Correct answer here",
    options: ["Answer1", "Answer2", "Correct answer here"],
  },
  {
    text: "What is your name?",
    correctAnswer: "Correct answer here",
    options: ["Answer1", "Answer2", "Correct answer here"],
  },
];