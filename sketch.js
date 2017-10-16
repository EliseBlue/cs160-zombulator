// Zombulator by Brook Elise Blue

// CS 160 Exercise 12: Function practice. Preamble to arrays.

var backgroundColor;

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 500;

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
  zombieX = random(0, windowWidth);
  zombieY = random(0, 150);
  zombieSize = random(MIN_SIZE, MAX_SIZE);
  zombieColor = color(random(50, 150), random(50, 150), random(50, 150), 150);
}

function initializeHuman() {
  humanX = random(0, windowWidth);
  humanY = random(windowHeight - 200, windowHeight);
  humanSize = random(MIN_SIZE, MAX_SIZE);
  humanColor = color(random(150,255), random (150,255), random(150,255), 150);
}

function drawZombie() {
  fill(zombieColor);
  ellipse(zombieX, zombieY, zombieSize, zombieSize);
}

function drawHuman() {
  fill(humanColor);
  ellipse(humanX, humanY, humanSize, humanSize);
}