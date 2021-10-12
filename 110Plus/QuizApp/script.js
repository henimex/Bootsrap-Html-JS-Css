$("#titleLes").text("Ready ?");

function Question(text, choices, answer) {
  (this.text = text), (this.choices = choices), (this.answer = answer);
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}

Quiz.prototype.resetQ = function resetQuestions() {
  this.questionIndex = 0;
};

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isFinished = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();
  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

var q1 = new Question(
  "What's the best programming language that you feel comfortable",
  ["C#", "JavaScript", "Python", "Java"],
  "C#"
);

var q2 = new Question(
  "What is the best IDE for world",
  ["Android Studio", "Visual Studio", "IntelliJ", "Notepad++"],
  "Visual Studio"
);

var q3 = new Question(
  "Best Service for you",
  ["Amazon", "Microsoft", "Google", "Facebook"],
  "Google"
);

var questions = [q1, q2, q3];
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
  if (quiz.isFinished()) {
    showScore();
  } else {
    var question = quiz.getQuestion();
    var choices = question.choices;
    document.querySelector("#question").textContent = question.text;
    for (let i = 0; i < choices.length; i++) {
      var element = document.querySelector("#choice" + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function showProgress() {
  var total = quiz.questions.length;
  var qNumber = quiz.questionIndex + 1;
  document.querySelector(
    "#progress"
  ).innerHTML = `Question : ${qNumber}/${total}`;
}

function showScore() {
  var html = `<h2>Score : </h2><h4>${quiz.score}</h4>`;
  document.querySelector(".card-body").innerHTML = html;
}

function guess(id, guess) {
  var btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.guess(guess);
    loadQuestion();
  };
}
// console.log(q1.checkAnswer("C#"));

// console.log(quiz.getQuestion())
// quiz.guess("C#")

// console.log(quiz.getQuestion())
// quiz.guess("Test")

// console.log(quiz.getQuestion())
// quiz.guess("Test")

// console.log(quiz.isFinished())

// console.log(quiz.score)
