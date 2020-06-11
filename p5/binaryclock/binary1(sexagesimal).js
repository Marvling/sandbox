let timer;
let miliseconds = 0;

let seconds = 0;
let secondsBinary = seconds.toString(2);

let minutes = 0;
let minutesBinary = minutes.toString(2);

let interval;
let button;

function setup() {
    createCanvas(600, 600);
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
        seconds++
        secondsBinary = seconds.toString(2);

        console.log(secondsBinary)
        if (seconds == 60) {
            seconds = 0
            secondsBinary = seconds.toString(2);
            minutes++
        }
    }
}

function draw() {
    background(150);

    for (let i = 0; i < length.secondsBinary; i++) {
        if (secondsBinary[i] === '1') {
            fill(255);
        }
        else {
            fill(0);
        }
        noStroke();
        ellipse(300, (i + 10) * 20, 10, 10);

    }

}
