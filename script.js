const questions = [
  {
    question: "How to include header files in C++?", // questions[0].question;
    choices: [
      "include", // questions[0].choices[0]
      "require", // questions[0].choices[1]
      "import",
      "find",
    ],
    correctChoice: 0, // questions[0].correctChoice
  },
  {
    question:
      "What algorithm divides a numerically sorted array to find a value?", // questions[1].question;
    choices: [
      "heap search", //questions[1].choices[0]
      "binary search",
      "linear search",
      "RAM search",
    ],
    correctChoice: 1,
  },
];

let questionCounter = 0;

//event listener - btn click to start quiz
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
