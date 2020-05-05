var walkerPositionX;
var walkerPositionY;
var canvasLimitX;
var canvasLimitY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    canvasLimitX = windowWidth;
    canvasLimitY = windowHeight;
	
	walkerPositionX = canvasLimitX/2;
	walkerPositionY = canvasLimitY/2;
    background(80);
    frameRate(60);
    console.log(canvasLimitX, canvasLimitY);
    
}

function draw(){
    point(walkerPositionX, walkerPositionY);
    stroke(255);
    strokeWeight(2)

    var r = floor(random(4));
    console.log(r);
    console.log(walkerPositionX,walkerPositionY);
    
    //Change color when the point hits the same coordinte more than once
    // when the point changes postion write the coordinates into an array
    //on the switch check if the coordinate is in the array
    // if it is chack how many instances

    //making a random map
    //run the random function a set number of times
    //stop the random funtion, draw a an outline around the dots


    switch(r){
        case 0:
            if(walkerPositionX < canvasLimitX){
                walkerPositionX += 10;
            }
            break;
        case 1:
            if (walkerPositionX > 0 ){
                walkerPositionX -= 10;
            }
            break;
            
        case 2:
            if (walkerPositionY <= 0){
                break;
            }
            else{
                walkerPositionY -= 10;
            }
            break;
            
        case 3:
            if (walkerPositionY >= canvasLimitY){
                break;
            }
            else{
                walkerPositionY += 10;
            }
            break;
    }
}