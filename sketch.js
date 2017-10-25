// Zombulator by Brook Elise Blue

// CS 160 Exercise 12: Function practice. Preamble to arrays.

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombies;
var humans;

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
  moveHumans();
}

function initializeZombies() {
  zombies = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    initializeZombie(i);
  }
}

function initializeZombie(index) {
  zombies [index] = {
    x: random(0, windowWidth),
    y: random(0, 200),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150)
  };

}

function initializeHumans() {
  humans = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    initializeHuman(i);
  }
}

function initializeHuman(index) {
  humans [index] = {
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150)
  };
}
    

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    drawZombie(zombies[i]);
  }
}

function drawZombie(zombie) {
  fill(zombie.color);
  ellipse(zombie.x, zombie.y, zombie.size, zombie.size);
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    drawHuman(humans[i]);
  }
}

function drawHuman(human) {
  fill(human.color);
  ellipse(human.x, human.y, human.size, human.size);
}

function moveHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    moveHuman(humans[i]);
  }
}

function moveHuman(human) {
    human.y -=random(1, 2);
    human.x +=random (-3, 3);
}

