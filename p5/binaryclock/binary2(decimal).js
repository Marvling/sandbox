// add int value to every circle
// check the addition to fill the cicrcles

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