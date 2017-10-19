// Zombulator by Brook Elise Blue

// CS 160 Exercise 12: Function practice. Preamble to arrays.

var backgroundColor;

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 500;
const NUMBER_OF_ZOMBIES = 10;
const NUMBER_OF_HUMANS = 10;

var zombieXs;
var zombieYs;
var zombieSize;
var zombieColor;

var humanXs;
var humanYs;
var humanSize;
var humanColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();

  drawZombies();
  drawHumans();
}

function initializeZombies() {
  zombieXs = [];
  zombieYs = [];
  zombieSize = [];
  zombieColor = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
      zombieXs[i] = random(0, windowWidth);
      zombieYs[i] = random(0, 150);
      zombieSize[i] = random(MIN_SIZE, MAX_SIZE);
      zombieColor[i] = color(random(50, 150), random(50, 150), random(50, 150), 150);
  }
}

function initializeHumans() {
  humanXs = [];
  humanYs = [];
  humanSize = [];
  humanColor = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
      humanXs[i] = random(0, windowWidth);
      humanYs[i] = random(windowHeight - 200, windowHeight);
      humanSize[i] = random(MIN_SIZE, MAX_SIZE);
      humanColor[i] = color(random(150,255), random (150,255), random(150,255), 150);
  }
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    fill(zombieColor[i]);
    ellipse(zombieXs[i], zombieYs[i], zombieSize[i], zombieSize[i]);
  }
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    fill(humanColor[i]);
    ellipse(humanXs[i], humanYs[i], humanSize[i], humanSize[i]);
  }

}