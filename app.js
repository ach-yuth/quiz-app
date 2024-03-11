const quizData = [
  {
    question: "Which language runs in the web browser?",
    a: "python",
    b: "c",
    c: "javascript",
    d: "java",
    correct: "c",
  },

  {
    question: "What does CSS stands for?",
    a: "central standard sheet",
    b: "cascading style sheet",
    c: "central style sheet",
    d: "common style sheet",
    correct: "b",
  },

  {
    question: "What does HTML stands for?",
    a: "Hyper text mark up language",
    b: "Hyper text marked language",
    c: "Hyper text metro language",
    d: "Hyper text marking language",
    correct: "a",
  },

  {
    question: "In which year javacript was launched?",
    a: 1994,
    b: 1995,
    c: "none of the above",
    d: 1998,
    correct: "b",
  },
];

const quiz = document.querySelector(".quiz-container");
const options = document.querySelectorAll(".answer");
const question = document.querySelector(".question");
const button = document.querySelector("button");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

let currentQuiz = 0;
let score = 0;

load();

function load() {
  deselected();
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselected() {
  options.forEach((option) => (option.checked = false));
}

function gotSelected() {
  let answer;
  options.forEach((option) => {
    if (option.checked) {
      answer = option.id;
    }
  });
  return answer;
}

button.addEventListener("click", () => {
  const answer = gotSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      load();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length}
        questions correctly</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
