var xOff1 = 0;
var xOff2 = 100;
var xOff3 = 0;

var nStart = 10;
var increment = 0.01;

function setup() {
    createCanvas(1000, 800);
    background(100);
    frameRate(60);
}

function draw() {
    background(80);
    stroke(255);
    noFill();

    beginShape();
    var xoff = nStart;
    for (var x = 0; x < width; x++) {

        stroke(255);
        var y = noise(xoff) * height;
        vertex(x, y);
        xoff += increment
    }
    endShape();

    nStart += increment
    // noLoop();

    // var x = map(noise(xOff1), 0, 1, 0, width)
    // var y = map(noise(xOff2), 0, 1, 0, height)

    // ellipse(x,y, 40, 40);
    // xOff1 += 0.01;
    // xOff2 += 0.01;
}