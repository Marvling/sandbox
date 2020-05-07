
var walkerPositionX;
var walkerPositionY;

function getPixelValueR (x,y){
    loadPixels();
    let redIndex = x + (y*width) * 4
    return pixels[redIndex]
}

function getPixelValueBrightness (x,y){
    loadPixels();
    let index = x + (y*width) * 4
    let brightTimesThree = pixels[index + 0] +
                           pixels[index + 1] +
                           pixels[index + 2];

    return brightTimesThree/3;
}

function getPixelIndex (x,y){
    return x + (y*width) * 4
}

function walk (){
    var r = floor(random(4));

    switch(r){
        case 0:
            if(walkerPositionX < width){
                walkerPositionX += 10;
                console.log('anan');
                

                var brightValue = getPixelValueBrightness(walkerPositionX, walkerPositionY);
                
                if (brightValue == 0){
                    console.log(brightValue);
                    stroke(255);
                }
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
            if (walkerPositionY >= height){
                break;
            }
            else{
                walkerPositionY += 10;
            }
            break;
    }

}

//create a dict, keys are for every pixel index
//OPTIMIZE: dict has only indexes for R value, increments of four 
//(may be map function)

function setup() {
    createCanvas(400, 600);
	
	walkerPositionX = width/2;
	walkerPositionY = height/2;
    background(214); 
    frameRate(10) 

}

function draw(){
    
    point(walkerPositionX, walkerPositionY);
    stroke(0);
    strokeWeight(10);
    
    //Change color when the point hits the same coordinte more than once
    // divide the canvas into a grid
    // when the point changes postion write the coordinates into an array
    //on the switch check if the coordinate is in the array
    // if it is chack how many instances

    //making a random map
    //run the random function a set number of times
    //stop the random funtion, draw a an outline around the dots

    walk();

    
}