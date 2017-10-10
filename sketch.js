// Zombulator by Brook Elise Blue

var zombieY = 100;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
var zombieColor;
var backgroundColor;
var humanY = 100;
var humanV = 0;
var humanA = 0.2;
var humanDamping = -0.5;
var humanSize = 80;
var humanColor;


function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = color(204, 255, 204);
	zombieColor = color(174, 120, 174);
	humanColor = color(174, 0, 0);
}

function draw() {
	background(backgroundColor);
	noStroke();
	fill(zombieColor);
	ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
	zombieY += zombieV;
	zombieV += zombieA;
	if (zombieY + (zombieSize / 2) >= windowHeight);
		zombieY = windowHeight - (zombieSize);
		zombieV *= zombieDamping;
		zombieSize *= 0.8;

	fill(humanColor);
	ellipse(windowWidth / 2, humanY, humanSize, humanSize);
	humanY += humanV;
	humanV += humanA;
	if (humanY + (humanSize / 2) >= windowHeight);
		humanY = windowHeight - (zombieSize);
		humanV *= humanDamping;
		humanSize *= 0.8;
}