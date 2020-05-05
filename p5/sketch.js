

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	walkerPositionX = windowWidth/2;
	walkerPositionY = windowHeight/2;
	stroke(255);
}


function draw() {
	background(50, 168, 82);
	line(windowWidth/2, windowHeight/2, mouseX, mouseY)
}