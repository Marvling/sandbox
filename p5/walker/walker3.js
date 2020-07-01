function setup() {
    createCanvas(600, 600);
    fill(250);

    w = new walker();

}

function draw() {

    background(150);
    noStroke();

    rect(40, 40, 90, 90);

    w.draw();
    w.moveRight();
}

