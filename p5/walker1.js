
var walkerPositionX;
var walkerPositionY;


function getPixelValueBrightness (x,y){
    loadPixels();
    let index = x + (y*width) * 4
    let brightTimesThree = pixels[index + 0] +
                           pixels[index + 1] +
                           pixels[index + 2];

    return brightTimesThree/3;
}

function setPixelBrightness (x,y,value){
    loadPixels();
    let index = x + (y*width) * 4;
    pixels[index + 0] = value;
    pixels[index + 1] = value;
    pixels[index + 2] = value;
    updatePixels();
}

function getPixelIndex (x,y){
    return x + (y*width) * 4
}

function walk (){
    var r = floor(random(4));

    var brightValueRight = getPixelValueBrightness(walkerPositionX+10, walkerPositionY);
    var brightValueLeft = getPixelValueBrightness(walkerPositionX-10, walkerPositionY);
    var brightValueUp = getPixelValueBrightness(walkerPositionX, walkerPositionY-10);
    var brightValueDown = getPixelValueBrightness(walkerPositionX, walkerPositionY+10);

    switch(r){
        case 0:

            if(walkerPositionX < width){

                if (brightValueRight == 0) {
                    stroke(200)
                }

                walkerPositionX += 10;
                
            }
            break;
        case 1:
                       
            if (walkerPositionX > 0 ){
                if (brightValueLeft == 0) {
                    stroke(200)
                }

                walkerPositionX -= 10;
                
            }
            break;
            
        case 2:
            if (walkerPositionY <= 0){
                break;
            }
            else{
                if (brightValueDown == 0) {
                    stroke(200)
                }
                walkerPositionY -= 10;
            }
            break;
            
        case 3:
            if (walkerPositionY >= height){
                break;
            }
            else{
                if (brightValueUp == 0) {
                    stroke(200)
                }
                walkerPositionY += 10;
            }
            break;
    }

}

function setup() {
    createCanvas(400, 600);
	
	walkerPositionX = width/2;
	walkerPositionY = height/2;
    background(214);
    stroke(0);
    strokeWeight(10);

}

function draw(){
    
    point(walkerPositionX, walkerPositionY);

    walk();

    
}