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