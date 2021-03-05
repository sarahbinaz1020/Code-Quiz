
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

// global variable for final prompt box with initials and score
var $finalPrompt = document.querySelector("#final-prompt");

// seconds left on timer
var secondsLeft = 100;

// Global var to store our timer
var timerInterval;

// Global var to store our current question index
var questionIndex = 0;

// Global variable of score
var finalScore = 0;

// Save button for end of game results
var $finalBtn = document.querySelector("#finalbtn");

//Initials variable box for end of game results 
var $userInitials = document.querySelector("#fname");



// hide final prompt for beginning of quiz
$finalPrompt.classList.add("hide");
$finalBtn.classList.add("hide");
$finalPrompt.classList.add("hide");


// click on start button to start the quiz
$startbtn.addEventListener("click", function (e) {
  // Hide start prompt
  $startPrompt.classList.add("hide");
  // Hide final prompt
//   $finalPrompt.classList.add("hide");
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
  $questionText.textContent = questions[questionIndex].text;
  // give the options
  questions[questionIndex].options.forEach(function (item) {
    // create a html button
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
  if (val === questions[questionIndex].correctAnswer) {
    console.log("You are correct");
    // if correct answer, then add 10
    finalScore += 10; 
  } else {
    console.log("you are wrong");
    // if incorrect answer, then timer -5
    secondsLeft -= 5;
  }
  // increase question index
  questionIndex++;
  // check to make sure we still have questions
  if (currentQuestion === questions.length) {
     // end the game here -hide final question and buttons, and remove hide on final score page
 $questionPrompt.classList.add("hide");
 // clear timer
 clearInterval(timerInterval);
 // hide timer
 $timer.classList.add("hide");
 // show game over text
 $startPrompt.innerHTML = `<h1 class="box1">Game Over</h1>`;
 // hide last question
 $startPrompt.classList.remove("hide");
 // show "Input initals here", box for initials & save button
 $finalPrompt.classList.remove("hide");
 $finalBtn.classList.remove("hide");
 // click on save button
 $finalBtn.addEventListener("click", function(e){
    // display final score & initials
    function endgame() {
     // click on Save button
     $finalBtn.addEventListener("click", function(event) {
        event.preventDefault();
             // create user object from submission
             var user = {
             initials: $userInitials.value.trim(),
             score: finalScore,
             };
             // set new submission to local storage 
             localStorage.setItem("user", JSON.stringify(user));
             // trying to display final score and ititials
             function renderMessage() {
                var finalScore = JSON.parse(localStorage.getItem("user"));
                if (finalScore !== null) {
                    document.querySelector(".message").textContent = finalScore.user + 
                    " scored a " + finalScore.score;    
                }   
                renderMessage(); 
             }
     })   
    }
 })
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
    text: "Which property is part of DOM",
    correctAnswer: "document.querySelector",
    options: ["boolean", "document.querySelector", "var"],
  },
  {
    text: "Which expression is an assinment operator?",
    correctAnswer: "=",
    options: ["=", "+", "==="],
  },
  {
    text: "What is used to repeat actions for an entire list?",
    correctAnswer: "For loop",
    options: ["If statement", "For loop", "A string"],
  },
  {
    text: "Which logical operator means at least one operator is true?",
    correctAnswer: "||",
    options: ["!", "&&", "||"],
  },
  {
    text: "Which data type is a boolean?",
    correctAnswer: "false",
    options: ["Hello World!", "100%", "false"],
  },
];

