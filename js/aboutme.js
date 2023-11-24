document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.getElementById("currentTime");

  setInterval(updateTime, 1000);

  function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime =
      padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
    currentTimeElement.textContent = formattedTime;
  }

  function padNumber(num) {
    return num < 10 ? "0" + num : num;
  }
});
let directCalc = document.querySelector(".calculator-div");
directCalc.addEventListener("click", () => {
  window.location.href = "/html/small-apps/calculator.html";
});
let directMain = document.querySelector(".home-div");
directMain.addEventListener("click", () => {
  window.location.href = "/index.html";
});
let directTodo = document.querySelector(".todo-list-div");
directTodo.addEventListener("click", () => {
  window.location.href = "/html/small-apps/todolist.html";
});
let directRock = document.querySelector(".rock-paper-div");
directRock.addEventListener("click", () => {
  window.location.href = "/html/small-apps/rock-paper.html";
});
