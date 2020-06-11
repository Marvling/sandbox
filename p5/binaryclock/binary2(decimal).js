let timer;
let timerArr = ['0','0','0','0','0','0','0','0']

let miliseconds = 0
let seconds = 0;
let minutes = 0;
let hours = 0

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
    
    drawColumn(timerArr[7], 550);
    drawColumn(timerArr[6], 500);
    drawColumn(timerArr[5], 400);
    drawColumn(timerArr[4], 350);
    drawColumn(timerArr[3], 250);
    drawColumn(timerArr[2], 200);
    drawColumn(timerArr[1], 100);
    drawColumn(timerArr[0], 50);

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

function drawColumn(decimal, xCoord = 500) {

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

function draw() {

}