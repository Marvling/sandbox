let xOffsetStart = 0;
let yOffsetStart = 0;



function setup() {
    createCanvas(600, 600);
    // frameRate(1);
    increment1Slider = createSlider(0, 1, 0.01, 0.00000001)
    increment2Slider = createSlider(0, 1, 0.02, 0.00000001)
    increment3Slider = createSlider(0, 1, 0.01, 0.00000001)

    
}

function draw() {

    let xOff1 = xOffsetStart
    let xOff2 = 0

    let increment1 = increment1Slider.value();
    let increment2 = increment2Slider.value();
    let increment3 = increment3Slider.value();


    loadPixels();

    for(let x = 0; x < width; x++){

        let yOff1 = yOffsetStart;
        let yOff2 = 0
        
        for (let y = 0; y < height; y++) {

            let index = (x + y * width) * 4;

            let n = (noise(yOff1, xOff1)+noise(xOff2,yOff2))*255/2;

            pixels[index + 0] = n;
            pixels[index + 1] = n;
            pixels[index + 2] = n;
            pixels[index + 3] = 255;
            
            yOff1 += increment1;
            yOff2 += increment3;
       
        }
        xOff1 += increment1;
        xOff2 += increment3;
        
    }
    updatePixels();

    xOff1 = xOffsetStart;
    yOff1 = yOffsetStart;

    xOffsetStart += increment1
    yOffsetStart += increment2

}