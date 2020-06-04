let linesNumber = 8;
let angle;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angle = 2 * PI / linesNumber;
    background(150);
}

function mouseDragged() {
    translate(width / 2, height / 2);
    for (let i = 0; i < linesNumber; i++) {
        rotate(-angle);
        point(mouseX - width / 2, mouseY - height / 2);
    }

    translate(width / 2, height / 2);
}

function draw() {
    noFill();
    stroke(255);
    strokeWeight(3)
}