// Zombulator by Brook Elise Blue

// CS 160 Exercise 20: Collision

var backgroundColor;
//var myMusic;

const MIN_SIZE = 5;
const MAX_SIZE = 45;
const POPULATION_SIZE = 650;


var population = [];
var zombieCount = 0;
var humanCount = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(235, 222, 240);
  initalizePopulation();
}

//function initalizeMusic() {
 // myMusic = new sound("ZombieSong.mp3");
  //myMusic.play();
//}


  

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
}

function handleCollisions() {
  for(var i = 0; i <POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population[j];
      if (attacker.isTouching(target)) {
        print("Fight! Fight! Fight!");
      }
    }
  }
}


function drawPopulationCounts(){
  stroke(0);
  textSize(62);
  textAlign(RIGHT);
  text("Zombies: " + zombieCount, width / 2, 70);
  textAlign(LEFT);
  text("Humans: " + humanCount, width / 2, height - 50);
}


function drawPopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].draw();
  }
}

function movePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].move();
  }
}

function initalizePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var humanoid_type = random(0, 100);
    if (humanoid_type <=50 ) {
      population[i] = initializeZombie();
      ++zombieCount;
    } else {
      population[i] = initializeHuman();
      ++humanCount;
    }
  }
}

function initializeZombie() {
  return {
      humanoidType: "zombie",
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(250, 455), random(50, 150), random(50, 150), 150),
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y -= this.speed;
      } else {
        this.y += this.speed;
      }
    },
    draw: function() {
      fill(this.color);
      rect(this.x, this.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);

    }
  };
}

function initializeHuman(index) {
  return {
    humanoidType: "human",
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(10, 250), random(100, 150), random(15, 150), 150),
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y += this.speed;
      } else {
        this.y -= this.speed;
      }
    },
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
      isTouching: function(target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);
      
    }
  };
}

  