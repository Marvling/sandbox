function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight)

}

function simetri(x, y) {

    x += width / 2
    y += height / 2

    return [x, y]

}

function draw() {
    stroke(10);
    background(150);

    beginShape()
    vertex(mouseX, mouseY)
    vertex(width / 2, height / 2)
    endShape()

    beginShape()
    vertex(Math.abs(mouseX - width), Math.abs(mouseY - height))
    vertex(width / 2, height / 2)
    endShape()



}