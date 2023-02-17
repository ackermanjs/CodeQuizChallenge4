const questions = [
  {
    question: "What is the main purpose of HTML in front-end development?", // questions[0].question;
    choices: [
      "To add style to a website", // questions[0].choices[0]
      "To provide structure to a website", // questions[0].choices[1]
      "To add interactivity to a website", // questions[0].choices[2]
      "To add multimedia content to a website", // questions[0].choices[3]
    ],
    correctChoice: 1, // questions[0].correctChoice[1]
  },
  {
    question:
      "What does CSS stand for in front-end development?", // questions[1].question;
    choices: [
      "Cascading Style Sheets", //questions[1].choices[0]
      "Cascading Script Sheets", //questions[1].choices[1]
      "Creative Style Sheets", //questions[1].choices[2]
      "Creative Script Sheets", //questions[1].choices[3]
    ],
    correctChoice: 0, // questions[1].correctChoice[1]
  },
  {
    question:
      "What is a framework in front-end development?", // questions[2].question;
    choices: [
      "A tool for adding multimedia content", //questions[2].choices[0]
      "A library for styling", //questions[2].choices[1]
      "A tool for adding interactivity", //questions[2].choices[2]
      "A pre-written code that can be used to speed up development", //questions[2].choices[3]
    ],
    correctChoice: 3, // questions[2].correctChoice[1]
  },
  {
    question:
      "What is the difference between responsive and adaptive design in front-end development?", // questions[3].question;
    choices: [
      "Responsive design changes based on the device, while adaptive design changes based on the screen size", //questions[3].choices[0]
      "Responsive design changes based on the screen size, while adaptive design changes based on the device", //questions[3].choices[1]
      "Responsive design is only for desktop, while adaptive design is for mobile devices", //questions[3].choices[2]
      "There is no difference, they mean the same thing", //questions[3].choices[3]
    ],
    correctChoice: 1, // questions[3].correctChoice[1]
  },
  {
    question:
      "What is JavaScript primarily used for in front-end development?", // questions[1].question;
    choices: [
      "To add style to a website", //questions[4].choices[0]
      "To provide structure to a website", //questions[4].choices[1]
      "To add interactivity to a website", //questions[4].choices[2]
      "To add multimedia content to a website", //questions[4].choices[3]
    ],
    correctChoice: 2, // questions[4].correctChoice[1]
  },
];

let questionCounter = 0;

//event listener - btn click to hide intro section and start quiz
const startBtn = document.getElementById("start-Btn");
function startQuiz() {
  document.getElementById("intro").remove();

  document.querySelector(".question-header").textContent =
    questions[questionCounter].question;
  document.querySelector("#choice-0").textContent =
    questions[questionCounter].choices[0];
  document.querySelector("#choice-1").textContent =
    questions[questionCounter].choices[1];
  document.querySelector("#choice-2").textContent =
    questions[questionCounter].choices[2];
  document.querySelector("#choice-3").textContent =
    questions[questionCounter].choices[3];

  // One way to tie in event listener for clicking choices and comparing to correctChoice:
  // document.getElementById("choice-0").id.substr(7)

  document.getElementById("question-container").style.display = "block";
  console.log("clicked");
}
startBtn.addEventListener("click", startQuiz);
