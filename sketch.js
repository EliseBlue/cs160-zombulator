// Zombulator by Brook Elise Blue

function setup() {
	createCanvas(1000, 1000);
}

var zombieX = 550; 
var zombie2X = 55;
var zombie3X = 175;
var zombie4X = 700;

function draw() {
	background(0, 0, 0	);
	fill(200, 100, 30);
	strokeWeight(8);
	stroke(0, 204, 204);
	ellipse(zombieX, 300, 200, 200);
	fill(150, 150, 200);
	ellipse(zombie2X, 200, 100, 100);
	fill(100, 150, 150);
	ellipse(zombie3X, 140, 50, 50);
	fill(120 ,40, 100);
	ellipse(zombie4X, 500, 80, 80);
	fill(100, 60, 75);
	ellipse(200, 250, 20, 20);
	fill(400, 70, 100);
	ellipse(400, 100, 120, 120);
	fill(800, 200, 150);
	ellipse(320, 600, 450, 450);
	zombieX = zombieX - 10;
	zombie2X = zombie2X + 60;
	zombie3X = zombie3X + 10;
	zombie4X = zombie4X +5;
	if (zombie2X >= 1000) {
		zombie2X = 0;

		}
	}

