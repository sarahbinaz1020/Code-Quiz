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



// click on start button to start the quiz 
$startbtn.addEventListener("click", function(e){
    // Hide start prompt
    $startPrompt.classList.add("hide");
    // Show our question prompt
    $questionPrompt.classList.remove("hide");

    // Update content with our current question
    $questionText.textContent = questions[0].text   
    
    // give the options
    questions[0].options.forEach(function(item){
        // create a html buttion
        var $btn = document.createElement("button");
        // set text of current button to item
        $btn.textContent = item;
        // append it to our options div
        $questionOptions.append($btn);
        // display our timer
        $timer.textContent = secondsLeft.text; 
    // start our timer

       // a timer starts with 100 seconds
       function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
        //   console.log countdown works
          console.log(secondsLeft) 
          $timer.textContent = secondsLeft.text;  
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            }
        }, 1000);
    }
        setTime();
    })
})
     

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
