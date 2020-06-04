function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight)

}

let xOff = 1;

function simetri(x, y) {
    x += width / 2
    y += height / 2

    return [x, y]
}

function draw() {
    stroke(10);
    noFill();
    background(150);

    beginShape()
    curveVertex(mouseX, mouseY)
    curveVertex(mouseX, mouseY)
    curveVertex(Math.abs((mouseX - width / 2) * noise(xOff)), Math.abs((mouseY - height / 2) * noise(xOff)))
    curveVertex(width / 2, height / 2)
    curveVertex(width / 2, height / 2)
    endShape()

    xOff += 100

    beginShape()
    vertex(Math.abs(mouseX - width), Math.abs(mouseY - height))
    vertex(width / 2, height / 2)
    endShape()

    beginShape();
    vertex(mouseX, mouseY);

    endShape();



}