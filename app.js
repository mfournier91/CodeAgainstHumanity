angular
.module("CAH", [])
.controller("CAHctrl", [
  "$scope",
  CAHctrlFunction
]);

function CAHctrlFunction() {
  var vm = this;
  console.log('controller hit');
  vm.doEet = "Hello World";
  var quizItems = [{question: "question1", answer: "answer1"}, {question: "question2", answer: "answer2"}, {question: "question3", answer: "answer3"}]
  var quizItem = quizItems[Math.floor(Math.random()*quizItems.length)]
  vm.quizQuestion = quizItem["question"];
  vm.quizAnswer = quizItem["answer"];
  console.log(quizItem["question"]);
  console.log(quizItem["answer"]);
}
