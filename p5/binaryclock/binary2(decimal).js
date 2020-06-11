let anan = 0

let timer;
let miliseconds = 0;

let seconds = 0;
let secondsArray = seconds.toString(10);

let minutes = 0;

let interval;
let button;

function setup() {
    createCanvas(600, 600);
    background(150);
    fill(0);
    timer = createP(nf(seconds, 2) + ':' + nf(miliseconds, 2,));
    button = createButton('start timer');
    button.mousePressed(doTimer);
}

function doTimer() {
    if (!interval) {
        interval = setInterval(timeIt, 10);
        button.html('stop timer');
    } else {
        clearInterval(interval);
        interval = false;
        button.html('start timer');
    }
}

function timeIt() {
    timer.html(nf(minutes, 2) + ':' + nf(seconds, 2) + ':' + nf(miliseconds, 2,));
    miliseconds++;
    if (miliseconds == 100) {
        miliseconds = 0;
        secondsArray = seconds.toString(10);

        //TODO: wirte the whole timer in a 7 digit array (MinSecMili)
        //use nf() and than use toString(10)
        //update array every 10 milisecond

        push();
        drawColumn(secondsArray[1]);
        translate(-100, 0);
        drawColumn(secondsArray[0]);
        pop();

        seconds++
        secondsArray = seconds.toString(10);


        if (seconds == 60) {
            seconds = 0
            secondsArray = seconds.toString(10);
            minutes++
        }
    }
}

function drawColumn(decimal) {
    switch (decimal) {
        case '0':
            for (let i = 0; i < 4; i++) {
                ellipse(500, (i + 6) * 40, 30)
            }
            break;
        case '1':
            ellipse(500, 6 * 40, 30);
            ellipse(500, 7 * 40, 30);
            ellipse(500, 8 * 40, 30);
            fill(255);
            ellipse(500, 9 * 40, 30);
            fill(0);
            break;
        case '2':
            ellipse(500, 6 * 40, 30);
            ellipse(500, 7 * 40, 30);
            fill(255);
            ellipse(500, 8 * 40, 30);
            fill(0);
            ellipse(500, 9 * 40, 30);
            break;
        case '3':
            ellipse(500, 6 * 40, 30);
            ellipse(500, 7 * 40, 30);
            fill(255);
            ellipse(500, 8 * 40, 30);
            ellipse(500, 9 * 40, 30);
            fill(0);
            break;
        case '4':
            ellipse(500, 6 * 40, 30);
            fill(255);
            ellipse(500, 7 * 40, 30);
            fill(0);
            ellipse(500, 8 * 40, 30);
            ellipse(500, 9 * 40, 30);
            break;
        case '5':
            ellipse(500, 6 * 40, 30);
            fill(255);
            ellipse(500, 7 * 40, 30);
            fill(0);
            ellipse(500, 8 * 40, 30);
            fill(255);
            ellipse(500, 9 * 40, 30);
            fill(0);
            break;
        case '6':
            ellipse(500, 6 * 40, 30);
            fill(255);
            ellipse(500, 7 * 40, 30);
            ellipse(500, 8 * 40, 30);
            fill(0);
            ellipse(500, 9 * 40, 30);
            break;
        case '7':
            ellipse(500, 6 * 40, 30);
            fill(255);
            ellipse(500, 7 * 40, 30);
            ellipse(500, 8 * 40, 30);
            ellipse(500, 9 * 40, 30);
            fill(0);
            break;
        case '8':
            fill(255);
            ellipse(500, 6 * 40, 30);
            fill(0);
            ellipse(500, 7 * 40, 30);
            ellipse(500, 8 * 40, 30);
            ellipse(500, 9 * 40, 30);
            break;
        case '9':
            fill(255);
            ellipse(500, 6 * 40, 30);
            fill(0);
            ellipse(500, 7 * 40, 30);
            ellipse(500, 8 * 40, 30);
            fill(255)
            ellipse(500, 9 * 40, 30);
            fill(0)
            break;
        default:
            break;
    }
}

function draw() {

}