//DOM

let canvas, ctx;
canvas = document.querySelector("#lienzo");
ctx = canvas.getContext("2d");

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const clearScreen = (color) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const mapObj = {};
const playerObj = {};

class Map {
  constructor() {}
}

class player {
  constructor() {}
}

(function loop() {
  resize();
  clearScreen();

  requestAnimationFrame(loop);
})();
