var questionEl = $('#question');
var timeEl = $('#time');
//const questionEl = document.getElementById("question");
var choiceAEl =  $('#choiceA');
var choiceBEl =  $('#choiceB');
var choiceCEl =  $('#choiceC');
var choice = document.getElementById("choice");
var score = 0;
var currentQuestion = 0;

var count = localStorage.getItem("count");

function main(){
    setTime();
    renderQuestion();
}

console.log("score: " +score)
choiceAEl.on('click', function () {
    if(myQuestions[currentQuestion].correctAnswer === "a"){
        score++;
    }
    console.log("score: " +score);
    if(currentQuestion < myQuestions.length-1){
        currentQuestion++;
    }
    else{
        newScore();
        return;
    }
    renderQuestion();
});
choiceBEl.on('click', function () {
    if(myQuestions[currentQuestion].correctAnswer === "b"){
        score++;
    }
    console.log("score: " +score);
    if(currentQuestion < myQuestions.length-1){
        currentQuestion++;
    }
    renderQuestion();
});
choiceCEl.on('click', function () {
    if(myQuestions[currentQuestion].correctAnswer === "c"){
        score++;
    }
    console.log("score: " +score);
    if(currentQuestion < myQuestions.length-1){
        currentQuestion++;
    }
    renderQuestion();
});


// choice.addEventListener("click", function() {
//   if (count < 24) {
//     score++;
    
//     localStorage.setItem("score", score);
//   }
// });

// Selects element by class
//var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.text(secondsLeft + " seconds left on quiz.");

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      newScore();
    }

  }, 1000);
}
function newScore(){
    
}

function renderQuestion(){
        questionEl.text(myQuestions[currentQuestion].question);
        choiceAEl.text(myQuestions[currentQuestion].answers.a);
        choiceBEl.text(myQuestions[currentQuestion].answers.b);
        choiceCEl.text(myQuestions[currentQuestion].answers.c);
}

const myQuestions = [
    {
      question: "do i care?",
      answers: {
        a: "a little",
        b: "a lot",
        c: "not a chance"
      },
      correctAnswer: "c"
    },
    {
      question: "who is the goat?",
      answers: {
        a: "scoby",
        b: "daniel",
        c: "sam"
      },
      correctAnswer: "c"
    },
    // {
    //   question: "Which tool can you use to ensure code quality?",
    //   answers: {
    //     a: "Angular",
    //     b: "jQuery",
    //     c: "RequireJS",
    //     d: "ESLint"
    //   },
    //   correctAnswer: "d"
    // }
  ];

main();