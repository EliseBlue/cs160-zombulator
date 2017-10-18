// Zombulator by Brook Elise Blue

// CS 160 Exercise 12: Function practice. Preamble to arrays.

var backgroundColor;

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 500;
const NUMBER_OF_ZOMBIES = 10;
const NUMBER_OF_HUMANS = 10;

var zombieX;
var zombieY;
var zombieSize;
var zombieColor;

var humanX;
var humanY;
var humanSize;
var humanColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombie();
  initializeHuman();
}

function draw() {
  background(backgroundColor);
  noStroke();

  drawZombie();
  drawHuman();
}

function initializeZombie() {
  zombieX = [];
  zombieY = [];
  zombieSize = [];
  zombieColor = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
      zombieX[i] = random(0, windowWidth);
      zombieY[i] = random(0, 150);
      zombieSize[i] = random(MIN_SIZE, MAX_SIZE);
      zombieColor[i] = color(random(50, 150), random(50, 150), random(50, 150), 150);
  }
}

function initializeHuman() {
  humanX = [];
  humanY = [];
  humanSize = [];
  humanColor = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
      humanX[i] = random(0, windowWidth);
      humanY[i] = random(windowHeight - 200, windowHeight);
      humanSize[i] = random(MIN_SIZE, MAX_SIZE);
      humanColor[i] = color(random(150,255), random (150,255), random(150,255), 150);
  }
}

function drawZombie() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    fill(zombieColor[i]);
    ellipse(zombieX[i], zombieY[i], zombieSize[i], zombieSize[i]);
  }
}

function drawHuman() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    fill(humanColor[i]);
    ellipse(humanX[i], humanY[i], humanSize[i], humanSize[i]);
  }

}