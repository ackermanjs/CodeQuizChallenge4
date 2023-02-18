var questions = [{
  q: "Commonly used data types DO NOT include:",
  a: "1. Strings",
  b: "2. Booleans",
  c: "3. Alerts",
  d: "4. Numbers",
  correct: "3. Alerts",
},
{
  q: "The condition in an if/else statement is enclosed with ____.",
  a: "1. Quotes",
  b: "2. Curly brackets",
  c: "3. Parentheses",
  d: "4. Square brackets",
  correct: "3. Parentheses",
},
{
  q: "Arrays in JavaScript can be used to store ____.",
  a: "1. Numbers and strings",
  b: "2. Other arrays",
  c: "3. Booleans",
  d: "4. All of the above",
  correct: "4. All of the above",
},
{
  q: "String values must be encosed within ____ when being assigned to variables.",
  a: "1. Quotes",
  b: "2. Curly brackets",
  c: "3. Parentheses",
  d: "4. Square brackets",
  correct: "1. Quotes",
},
{
  q: "A very useful tool used during development and debugging for printing content to the debugger is:",
  a: "1. Javascript",
  b: "2. Terminal/Bash",
  c: "3. for loops",
  d: "4. console.log",
  correct: "4. console.log",
},
{
  q: "What is the correct syntax for referring to an external script called 'code.js'?",
  a: "1. <script src='code.js'>",
  b: "2. <script href='code.js'>",
  c: "3. <script ref='code.js'>",
  d: "4. <script name='code.js'>",
  correct: "1. <script src='code.js'>",
}];
var startQuiz = document.getElementById("start-quiz");
var countdown = document.getElementById("timer");
var timerStart = 60;
var quizLength;
var questionContainer = document.querySelector("#quiz-wrapper");

function timer() {
    countdown.textContent = "Time remaining: " + timerStart + "s";
    quizLength = setInterval(function () {
        if (timerStart > 0) {
            adjustTime(-1);
        } else {
            finalResult();
        }
    }, 1000);
}
function adjustTime(amount) {
    timerStart += amount;
    if (timerStart < 0) {
        timerStart = 0;
    }
    countdown.textContent = "Time remaining: " + timerStart + "s";
}
startQuiz.onclick = timer;
var renderQuestion = function (question) {
    questionContainer.innerHTML = "";

    var questionHeader = document.createElement("h2");
    questionHeader.textContent = question.q;

    var answerA = document.createElement("button");
    answerA.textContent = question.a;
    answerA.addEventListener("click", answerClick);

    var answerB = document.createElement("button");
    answerB.textContent = question.b;
    answerB.addEventListener("click", answerClick);

    var answerC = document.createElement("button");
    answerC.textContent = question.c;
    answerC.addEventListener("click", answerClick);

    var answerD = document.createElement("button");
    answerD.textContent = question.d;
    answerD.addEventListener("click", answerClick);

    questionContainer.appendChild(questionHeader);
    questionContainer.appendChild(answerA);
    questionContainer.appendChild(answerB);
    questionContainer.appendChild(answerC);
    questionContainer.appendChild(answerD);
}
var answerClick = function(event) {
  event.preventDefault();
  var userAnswer = event.target.textContent;
  correctAnswer = questions[currentQuestionIndex].correct;
  // determine if answer is wrong or right
  var answerNotice = document.querySelector("#answer-prompt");
  if (userAnswer !== correctAnswer) {
      adjustTime(-10);
      answerNotice.textContent = "Wrong!";
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
          finalResult();
      } else {renderQuestion(questions[currentQuestionIndex])};

  }
  else if (userAnswer === correctAnswer) {
      currentQuestionIndex++;
      answerNotice.textContent = "Correct!";
      userScore++;
      if (currentQuestionIndex >= questions.length) {
          finalResult();
      } else {renderQuestion(questions[currentQuestionIndex])};
  }
};

var quiz = function (event) {
  event.preventDefault();
  resetDisplay();
  renderQuestion(questions[currentQuestionIndex]);
};

function resetDisplay() {
  questionContainer.innerHTML="";
  document.querySelector("#intro-wrapper").style.display = "none";
  document.querySelector("#quiz-wrapper").style.display = "block";
}
function highScores() {
  let data = localStorage.getItem("object");
  let getData = JSON.parse(data);
  let name = getData.name;
  let score = getData.score;
  questionContainer.innerHTML = "";
  questionContainer.innerHTML = name + " " + score;
  document.querySelector("#intro-wrapper").style.display = "none";

  let blank = document.querySelector("#answer-prompt");
  blank.innerHTML = "";

  var playAgain = document.createElement("button");
      playAgain.textContent= "Play Again!";
      blank.appendChild(playAgain);

      playAgain.addEventListener("click", () => {
          location.reload();
      })
  
}
viewScores.addEventListener("click", () => {
  highScores();
  
})