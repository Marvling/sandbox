let xOff1 = 0
let xOff2 = 100

let y = 0;

function setup() {
    createCanvas(600, 600);

    background(255);

}

function draw() {

    stroke(0);
    beginShape();
    let x = noise(xOff1) * width;
    y++;
    vertex(x, y);


    // let y = noise(xOff2) * height;

    xOff1 += 0.005
    xOff2 += 0.005
}