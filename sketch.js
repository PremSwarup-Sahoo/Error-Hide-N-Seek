var canvas;
var database, gameState;
var player,playerCount,form
var backgroundImage
var mapImg,map

function preload() {
  backgroundImage = loadImage("assets/game_bg_loading.hns.jpeg");
  mapImg = loadImage("assets/map.hide_seek.prem_sahoo.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  map = new Map()
  game = new Game();
  gameState = game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
