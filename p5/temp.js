let timer;
let timerArr = ['0', '0', '0', '0', '0', '0', '0', '0']

let miliseconds = 0
let seconds = 0;
let minutes = 0;
let hours = 0

let interval;
let button;

let bgColor;

function setup() {
    createCanvas(600, 600);
    fill(0);
    timer = createP(nf(seconds, 2) + ':' + nf(miliseconds, 2,));
    button = createButton('start timer');
    button.mousePressed(doTimer);
    bgColor = color('#d2d6d6');
    frameRate(100);
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
    miliseconds = nf(miliseconds, 2);
    if (miliseconds < 100) {
        timerArr[7] = miliseconds.charAt(1);
        timerArr[6] = miliseconds.charAt(0);
    }

    else if (miliseconds == 100) {
        miliseconds = 0;
        miliseconds = nf(miliseconds, 2);

        timerArr[7] = miliseconds.charAt(1);
        timerArr[6] = miliseconds.charAt(0);

        seconds++
        seconds = nf(seconds, 2);

        timerArr[5] = seconds.charAt(1);
        timerArr[4] = seconds.charAt(0);


        if (seconds == 60) {
            seconds = 0
            seconds = nf(seconds, 2);

            timerArr[5] = seconds.charAt(1);
            timerArr[4] = seconds.charAt(0);

            minutes++
            minutes = nf(minutes, 2);

            timerArr[3] = minutes.charAt(1);
            timerArr[2] = minutes.charAt(0);

            if (minutes == 60) {
                minutes = 0
                minutes = nf(minutes, 2);

                timerArr[3] = minutes.charAt(1);
                timerArr[2] = minutes.charAt(0);

                hours++
                hours = nf(hours, 2);

                timerArr[1] = hours.charAt(1);
                timerArr[0] = hours.charAt(0);

                if (hours == 60) {
                    clearInterval(interval);
                    interval = false;
                    button.html('start timer');
                }
            }
        }
    }
}

function drawBinaryClock(decimal, xCoord = 500) {

    //make two variables for on-off colors

    switch (decimal) {
        case '0':
            for (let i = 0; i < 4; i++) {
                ellipse(xCoord, (i + 6) * 40, 30)
            }
            break;
        case '1':
            ellipse(xCoord, 6 * 40, 30);
            ellipse(xCoord, 7 * 40, 30);
            ellipse(xCoord, 8 * 40, 30);
            fill(255);
            ellipse(xCoord, 9 * 40, 30);
            fill(0);
            break;
        case '2':
            ellipse(xCoord, 6 * 40, 30);
            ellipse(xCoord, 7 * 40, 30);
            fill(255);
            ellipse(xCoord, 8 * 40, 30);
            fill(0);
            ellipse(xCoord, 9 * 40, 30);
            break;
        case '3':
            ellipse(xCoord, 6 * 40, 30);
            ellipse(xCoord, 7 * 40, 30);
            fill(255);
            ellipse(xCoord, 8 * 40, 30);
            ellipse(xCoord, 9 * 40, 30);
            fill(0);
            break;
        case '4':
            ellipse(xCoord, 6 * 40, 30);
            fill(255);
            ellipse(xCoord, 7 * 40, 30);
            fill(0);
            ellipse(xCoord, 8 * 40, 30);
            ellipse(xCoord, 9 * 40, 30);
            break;
        case '5':
            ellipse(xCoord, 6 * 40, 30);
            fill(255);
            ellipse(xCoord, 7 * 40, 30);
            fill(0);
            ellipse(xCoord, 8 * 40, 30);
            fill(255);
            ellipse(xCoord, 9 * 40, 30);
            fill(0);
            break;
        case '6':
            ellipse(xCoord, 6 * 40, 30);
            fill(255);
            ellipse(xCoord, 7 * 40, 30);
            ellipse(xCoord, 8 * 40, 30);
            fill(0);
            ellipse(xCoord, 9 * 40, 30);
            break;
        case '7':
            ellipse(xCoord, 6 * 40, 30);
            fill(255);
            ellipse(xCoord, 7 * 40, 30);
            ellipse(xCoord, 8 * 40, 30);
            ellipse(xCoord, 9 * 40, 30);
            fill(0);
            break;
        case '8':
            fill(255);
            ellipse(xCoord, 6 * 40, 30);
            fill(0);
            ellipse(xCoord, 7 * 40, 30);
            ellipse(xCoord, 8 * 40, 30);
            ellipse(xCoord, 9 * 40, 30);
            break;
        case '9':
            fill(255);
            ellipse(xCoord, 6 * 40, 30);
            fill(0);
            ellipse(xCoord, 7 * 40, 30);
            ellipse(xCoord, 8 * 40, 30);
            fill(255)
            ellipse(xCoord, 9 * 40, 30);
            fill(0)
            break;
        default:
            break;
    }
}

function drawLine(centerX, centerY, fillHeight, fillTime) {

    let yRange = map(fillTime, 100, 0, centerY - fillHeight / 2, centerY + fillHeight / 2);

    let x1 = map(fillTime, 0, 100, centerX, centerX + 100);
    let x2 = map(fillTime, 0, 100, centerX, centerX - 100);

    if (fillTime > 50) {
        x1 = map(fillTime, 100, 0, centerX, centerX + 100);
        x2 = map(fillTime, 100, 0, centerX, centerX - 100);
    }

    line(x2, yRange, x1, yRange);
}

function drawRectFill(centerX, centerY, fillHeight, fillTime) {

    let yRange = map(fillTime, 100, 0, centerY - fillHeight / 2, centerY + fillHeight / 2);

    let x1 = map(fillTime, 0, 100, centerX, centerX + 100);
    let x2 = map(fillTime, 0, 100, centerX, centerX - 100);

    if (fillTime > 50) {
        x1 = map(fillTime, 100, 0, centerX, centerX + 100);
        x2 = map(fillTime, 100, 0, centerX, centerX - 100);
    }

    line(x2, yRange, x1, yRange);
}

function drawLineCircle(centerX, centerY, fillHeight, fillTime) {

    let yRange = map(fillTime, 0, 100, centerY + fillHeight / 2, centerY - fillHeight / 2);

    let yTracer = map(fillTime, 0, 100, -1, 1);
    let yValue = map(yTracer, -1, 1, -fillHeight / 2, fillHeight / 2);

    let x1 = sqrt(pow(fillHeight / 2, 2) - pow(yValue, 2));

    line(centerX - x1, yRange, centerX + x1, yRange);
}


function draw() {

    background(bgColor);
    noFill();

    let circleX = width / 2;
    let circleY = height / 2;
    let circleR = 100;

    rectMode(CENTER);
    drawLineCircle(circleX, circleY, circleR, miliseconds);
    angleMode(RADIANS);

    // push();
    // translate(circleX, circleY);
    // rotate(45 * PI / 180);
    // rect(0, 0, circleR / sqrt(2), circleR / sqrt(2));
    // pop();
    ellipse(circleX, circleY, circleR);
}