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
}
