angular
.module("CAH", [])
.controller("CAHctrl", [
  "$scope",
  CAHctrlFunction
]);

function CAHctrlFunction($scope) {
  var vm = this;
  console.log('controller hit');
  vm.doEet = "Hello World";
  var quizItems = [{question: "question1", answer: "answer1"}, {question: "question2", answer: "answer2"}, {question: "question3", answer: "answer3"}]
  var quizItem = quizItems[Math.floor(Math.random()*quizItems.length)]
  vm.quizQuestion = quizItem["question"];
  vm.quizAnswer = quizItem["answer"];
  vm.messages = [];
  vm.newMessage = '';
  vm.sendMessage = function() {
    console.log("message sent");
    console.log($scope.vm.newMessage);
    vm.messages.push($scope.vm.newMessage)
    console.log(vm.messages);

  }

}
