//User engages with page and sees "Timer" and "View Highscores"

//User is prompted to start quiz
var start = prompt("Please start the quiz now");
//user presses start button and questions begin with timer starting
//Timer set at 15 seconds/question - setTimeout? setInterval?

var seconds;
var temp;
function countDown() {
  seconds = document.querySelector("countDown").innerHTML;
  seconds = parseInt(seconds, 10);
  if (seconds == 1) {
    temp = document.querySelector("countDown");
    temp.innerHTML = "all done, bye bye";
    return;
  }
  console.log(countDown);
  seconds--;
  temp = document.querySelector("countDown");
  temp.innerHTML = seconds;
  timeOut = setTimeOut(countDown, 1000);
}

//User is asked 5 questions
var highScore = 0;
var questions = [
  {
    prompt:
      "Commonly used data types DO NOT include \n(a) strings\n(b) booleans\n(c) alerts\n(d) numbers",
    answer: "c"
  },
  {
    prompt:
      "The symbol used for single line comments in JavaScript is \n(a) double forward slash\n(b) backslash\n(c) double backslash\n(d) quotations",
    answer: "a"
  },
  {
    prompt:
      "Breaking within a string statement can be done by\n(a) backslash\n(b) forward slash\n(c) period\n(d) question mark",
    answer: "a"
  },
  {
    prompt:
      "What is NOT a type of pop up box available in JavaScript\n(a) Alert\n(b)Confirm\n(c) Prompt\n(d) Ask",
    answer: "d"
  },
  {
    prompt:
      "A value that can be assigned to a variable or an object is \n(a) null\n(b) undefined\n(c) undeclared\n(d) defined",
    answer: "a"
  }
];

for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if (response === questions[i].answer) {
    highScore++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}
alert("You got " + highScore + "/" + questions.length);
