let submit_button = document.getElementsByClassName("Clicked")[0];
let head = document.getElementById("heading");
submit_button.addEventListener("click", function (e) {
  e.preventDefault();
  head.textContent = "Welcome to Javascript";
});
let countdown = document.getElementsByClassName("counter")[0];
let incresing = document.getElementById("increment");
let decresing = document.getElementsByClassName("decrement")[0];
let recovery = document.getElementById("reverse");
let count = 0;
incresing.addEventListener("click", function (e) {
  e.preventDefault();
  count++;
  countdown.textContent = "Count : " + count;
});
decresing.addEventListener("click", function (e) {
  e.preventDefault();
  count--;
  if (count < 0) {
    alert("Now you are entering negative values");
  } else {
    countdown.textContent = "Count : " + count;
  }
});
recovery.addEventListener("click", function (e) {
  e.preventDefault();
  count = 0;
  countdown.textContent = "Count : " + count;
});
window.addtask = function () {
  let inputtask = document.getElementsByClassName("inputtasks")[0];
  let inputvalue = inputtask.value.trim();
  if (inputvalue == "") {
    alert("Please enter some task!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputvalue;
    document.getElementsByClassName("lists")[0].appendChild(li);
    li.onclick = function () {
      this.remove();
    };
  }
  inputtask.value = "";
};
