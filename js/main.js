const circles = [];
let ctx = null;
class Circle {
  generate() {
    const minX = -window.innerWidth,
      maxX = window.innerWidth;
    const minY = -window.innerHeight,
      maxY = window.innerHeight;
    this.x = getRandomInt(minX, maxX);
    this.y = getRandomInt(minY, maxY);
    this.speed = getRandomInt(5, 12);
    this.radius = getRandomInt(2, 5);
    this.color = `rgba(255, 255, 255, ${Math.random()})`;
  }
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.radius = 0;
    this.color = `rgba(255, 255, 255, ${Math.random()})`;

    this.generate();
  }

  update() {
    this.x += this.speed;
    this.y += this.speed;

    if (this.x > window.innerWidth && this.y > window.innerHeight) {
      this.generate();
    }
    this.draw();
  }

  draw() {
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
document.addEventListener("DOMContentLoaded", function (event) {
  const modeSwitchButton = document.getElementById("mode-switch");
  if (modeSwitchButton) {
    modeSwitchButton.addEventListener("click", () => {
      function modeToggle() {
        modeSwitchButton.classList.toggle("active");
        document.documentElement.classList.toggle("light");
      }
      setTimeout(modeToggle, 500);
    });
  }

  renderSnow();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderSnow() {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  circles.splice(0, circles.length);
  let circlesQtty = Math.floor(window.innerWidth / 100);
  for (let i = 0; i < circlesQtty; i++) {
    const newCircle = new Circle();
    circles.push(newCircle);
  }

  requestAnimationFrame(tick);
}

window.addEventListener("resize", () => {
  onWindowResize();
});

function onWindowResize() {
  renderSnow();
}
function tick() {
  // 60 FPS
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let circle of circles) {
    circle.update();
  }
  requestAnimationFrame(tick);
}

$(document).ready(function () {
  $("#scrollButton").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#targetDiv").offset().top,
      },
      100
    );
  });
});
