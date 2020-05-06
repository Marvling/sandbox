//TODO: make a class for walker

var walkerPositionX;
var walkerPositionY;
var canvasLimitX;
var canvasLimitY;

// let pixelIndex = x + (y*width) *4;
//create a function for getting the pixels index for R
//create a dict, keys are for every pixel index
//OPTIMIZE: dict has only indexes for R value, increments of four (may be map function)

var positionsArray = [];

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

    loadPixels()
    var r = floor(random(4));

    

    loadPixels();
    
    //Change color when the point hits the same coordinte more than once
    // divide the canvas into a grid
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
                //call the function for getting the pixel index
                //write true for the index on the dict
                //if true on the dict make it false and change color
                //OPTIMIZE: wriet 3-4 different vaules on the dict based on the times that index has been visited
                
                stroke(0);
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