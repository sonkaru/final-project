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
    currentTimeElement.textContent = "current time:" + formattedTime;
  }

  function padNumber(num) {
    return num < 10 ? "0" + num : num;
  }
});
