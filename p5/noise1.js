let offsetStart1 = 0;
let offsetStart2 = 100;
let offsetStart3 = 300;

let xOff1 = 0
let xOff2 = 100
let xOff3 = 200

let increment1 = 0.01
let increment2 = 0.03
let increment3 = 0.05

function setup() {
    createCanvas(600, 600);
    // frameRate(1);

}

function draw() {

    background(150);
    stroke(0);
    noFill();

    beginShape();
    xOff1 = offsetStart1;
    xOff2 = offsetStart2;
    xOff3 = offsetStart3;

    for(let y = 0; y < height; y++){
        let x = (noise(xOff1)+noise(xOff2)+noise(xOff3))*(width/3)
        vertex(x, y);

        xOff1 += increment1
        xOff2 += increment2
        xOff3 += increment3

    }
    endShape();
    // noLoop();
    offsetStart1 += increment1
    // offsetStart2 += increment2
    offsetStart3 += increment3
   
}