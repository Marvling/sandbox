function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight)

}

function simetri(angle, x, y, flip = false) {
    var s = sin(angle)
    var c = cos(angle)

    x -= width / 2.
    y -= height / 2.

    if (flip) {
        x = x
        y *= -1
    }

    var sX = x * c - y * s
    var sY = x * s + y * c

    return [sX + width / 2., sY + height / 2.]
}

function draw() {
    background(39, 39, 39, 12)

    var R = 65
    var amplitude = 2.

    stroke(127, 255, 212)
    strokeWeight(8.)

    noFill()

    textAlign(CENTER)
    textSize(16.)
    stroke(0)
    fill(255)
    strokeWeight(1.)

    textSize(32.)
    text('draw.', width / 2., 75.)

    // DRAW
    if (mouseIsPressed) {
        stroke(127, 255, 212)
        strokeWeight(4.)
        noFill()
        beginShape()
        vertex(pmouseX, pmouseY)
        vertex(mouseX, mouseY)
        endShape(CLOSE)
        for (var i = 1; i < 8; i++) {
            if (i % 2 == 0) {
                p = simetri((2 * PI / 8. + PI) * i, pmouseX, pmouseY, flip = true)
                c = simetri((2 * PI / 8. + PI) * i, mouseX, mouseY, flip = true)
            } else {
                p = simetri((2 * PI / 8.) * i, pmouseX, pmouseY, flip = true)
                c = simetri((2 * PI / 8.) * i, mouseX, mouseY, flip = true)
            }

            console.log(i % 2);

            beginShape()
            vertex(p[0], p[1])
            vertex(c[0], c[1])
            endShape(CLOSE)
        }
    }
}

function mousePressed() {

}

function mouseReleased() {

}