// make a timer
timeUp = true

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    background(150);
    let h = nf(hour(), 2, 0);
    let m = nf(minute(), 2,0);
    let s = nf(second(), 2, 0);

    let time = `${h}:${m}:${s}`

    textAlign(CENTER, CENTER);
    text(time, windowWidth/2, windowHeight/2)
    textSize(100);

    if ( hour() == 24 && timeUp == true) {
        console.log('DOLDU HOCAM DOLDU!');
        timeUp = false
    }
    
}