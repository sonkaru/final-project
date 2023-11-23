let smallAppPage = document.querySelector(".small-app-container");
smallAppPage.addEventListener("click", () => {
  window.location = "/html/aboutme.html";
});
let mainPage = document.querySelector(".main-page-container");
mainPage.addEventListener("click", () => {
  window.location = "/html/index.html";
});
let lifePage = document.querySelector(".life-container");
lifePage.addEventListener("click", () => {
  window.location = "/html/life.html";
});
let contactPage = document.querySelector(".contact-page-container");
contactPage.addEventListener("click", () => {
  window.location = "/html/contact.html";
});

$(document).ready(function () {
  const video = $("#myVideo")[0];
  const playPauseBtn = $("#playPauseBtn");

  playPauseBtn.click(function () {
    if (video.paused) {
      video.play();
      playPauseBtn.text("pause");
    } else {
      video.pause();
      playPauseBtn.text("play");
    }
  });
});
x;
