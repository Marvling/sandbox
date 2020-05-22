let offsetStart1 = 0;
let offsetStart2 = 100;
let offsetStart3 = 300;

let xOff1 = 0
let xOff2 = 100
let xOff3 = 200

let increment1 = 0.00001
let increment2 = 0.00001
let increment3 = 0.00001

function setup() {
    createCanvas(600, 600);
}

function draw() {

    loadPixels();
    for(let x = 0; x < width; x++){
        for (let y = 0; y < height; y++) {

            let index = (x + y * width) * 4;

            let n1 = noise(xOff1)*255;
            let n2 = noise(xOff2)*255;
            let n3 = noise(xOff3)*255;

            xOff1 += increment1;
            xOff2 += increment2;
            xOff3 += increment3;

            pixels[index + 0] = n1;
            pixels[index + 1] = n2;
            pixels[index + 2] = n3;
            pixels[index + 3] = 255;
            
        }
    }
    updatePixels();

    xOff1 = offsetStart1;
    xOff2 = offsetStart2;
    xOff3 = offsetStart3;

    // noLoop();
    offsetStart1 += increment1
    offsetStart2 += increment2
    offsetStart3 += increment3
   
}