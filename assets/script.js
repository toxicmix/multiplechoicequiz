var questionEl = $('#question');
var timeEl = $('#time');
var card1El = $('#card1');
var card2El = $('#card2');
var choiceAEl =  $('#choiceA');
var choiceBEl =  $('#choiceB');
var choiceCEl =  $('#choiceC');
var choice = document.getElementById("choice");
var score = localStorage.getItem('score') || 0;
var currentQuestion = 0;


function main(){
    setTime();
    renderQuestion();
}


console.log("score: " + score);
choiceAEl.on('click', function() {
  if (myQuestions[currentQuestion].correctAnswer === "a") {
    score++;
  }
  console.log("score: " + score);
  if (currentQuestion < myQuestions.length - 1) {
    currentQuestion++;
  } else {
    newScore();
    return;
  }
  renderQuestion();
});

choiceBEl.on('click', function() {
  if (myQuestions[currentQuestion].correctAnswer === "b") {
    score++;
  }
  console.log("score: " + score);
  if (currentQuestion < myQuestions.length - 1) {
    currentQuestion++;
  } else {
    newScore();
    return;
  }
  renderQuestion();
});

choiceCEl.on('click', function() {
  if (myQuestions[currentQuestion].correctAnswer === "c") {
    score++;
  }
  console.log("score: " + score);
  if (currentQuestion < myQuestions.length - 1) {
    currentQuestion++;
  } else {
    newScore();
    return;
  }
  renderQuestion();
});

function newScore() {
  card1El.text("Game over! Your score is: " + score);

  // Create the HTML form
  var formHtml = '<form id="nameForm">';
  formHtml += '<label for="name">Enter your name:</label>';
  formHtml += '<input type="text" id="name" name="name">';
  formHtml += '<input type="submit" value="Submit">';
  formHtml += '</form>';

  // Append the form to card2El
  card2El.html(formHtml);

  // Add a submit event listener to the form
  $('#nameForm').on('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var playerName = $('#name').val(); // Get the entered name

    // Retrieve existing high scores from localStorage
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Add the current score to the high scores array
    highScores.push({
      playerName: playerName,
      score: score
    });

    // Store the updated high scores in localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Reset the score to 0
    score = 0;

    // Reset the form and reload the page
    $(this)[0].reset();
    location.reload();
  });
}


// Function to display high scores
function viewHighScores() {
  // Retrieve high scores and player names from localStorage
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Sort high scores in descending order
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });

  // Create HTML for displaying scores
  var scoresHtml = '<div class="high-scores">';
  scoresHtml += '<h2>High Scores</h2>';
  if (highScores.length > 0) {
    scoresHtml += '<ul>';
    for (var i = 0; i < highScores.length; i++) {
      var playerName = highScores[i].playerName;
      var score = highScores[i].score;
      scoresHtml += '<li>' + playerName + ': ' + score + '</li>';
    }
    scoresHtml += '</ul>';
  } else {
    scoresHtml += '<p>No high scores available.</p>';
  }
  scoresHtml += '</div>';

  // Display scores in the scoresContainer element
  var scoresContainer = document.getElementById('scoresContainer');
  scoresContainer.innerHTML = scoresHtml;
}

// Add event listener to the View Scores button
var viewScoresBtn = document.getElementById('viewScoresBtn');
viewScoresBtn.addEventListener('click', viewHighScores);
viewScoresBtn.classList.add('score-button');

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.text(secondsLeft + " seconds left on quiz.");

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to show score
      newScore();
    }

  }, 1000);
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
  ];

main();