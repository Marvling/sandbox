
let noiseIncrement = 0.01;

function setup() {
    createCanvas(800, 800);

}

function draw() {
    let displacer1 = noise(300 + noiseIncrement) * 100;
    let displacer2 = noise(330 + noiseIncrement) * 100;
    let displacer3 = noise(360 + noiseIncrement) * 100;

    // console.log(displacer1);
    // console.log(noiseIncrement);

    noiseIncrement += 0.01

    background(255);
    noStroke();
    fill(100, 255, 80);

    beginShape();
    vertex(width * 1 / 4 + displacer2, height * 1 / 4 + displacer3);
    vertex(width * 3 / 4 + displacer1, height * 1 / 4 + displacer2);
    vertex(width * 3 / 4 + displacer3, height * 3 / 4 + displacer3);
    vertex(width * 1 / 4 + displacer2, height * 3 / 4 + displacer1);
    endShape();
}