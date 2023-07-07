var questionEl = $('#question');
var timeEl = $('#time');
//const questionEl = document.getElementById("question");
var choiceAEl =  $('#choiceA');
var choiceBEl =  $('#choiceB');
var choiceCEl =  $('#choiceC');
var choice = document.getElementById("choice");
var score = 0;


var count = localStorage.getItem("count");

function main(){
    setTime();
    renderQuestion();
}

console.log("score: " +score)
choiceAEl.on('click', function () {
    if(myQuestions.correctAnswer === "a"){
        score++;
    }
    console.log("score: " +score)
});
choiceBEl.on('click', function () {
    if(myQuestions.correctAnswer === "b"){
        score++;
    }
    console.log("score: " +score)
});
choiceCEl.on('click', function () {
    if(myQuestions.correctAnswer === "c"){
        score++;
        
    }
    console.log("score: " +score);
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

    myQuestions.forEach(display);

    function display(item){
        questionEl.text(item.question);
        choiceAEl.text(item.answers.a);
        choiceBEl.text(item.answers.b);
        choiceCEl.text(item.answers.c);
    }

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