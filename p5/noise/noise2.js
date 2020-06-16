let xOff1 = 0
let xOff2 = 100

let y = -1;

let oldX = -1;
let oldY = -1;

function setup() {
    createCanvas(600, 600);

    background(150);

}

function draw() {

    stroke(0);
    // let x = noise(xOff1) * width;
    let x = (noise(xOff1) + noise(xOff2) * 0.5) * (width / 1.5);
    y++

    if (oldX == -1 || oldY == -1) {
        oldX = x;
        oldY = y;
    }

    line(oldX, oldY, x, y);

    oldX = x;
    oldY = y;

    // let y = noise(xOff2) * height;

    xOff1 += 0.05
    xOff2 += 0.005
}