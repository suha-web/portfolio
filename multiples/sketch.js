let row = 32;     
let col = 32;     
let pad = 4;      
let sWidth, sHeight;  
let rgba = [255, 255, 255, 255];     
let numCircles = 400
let circles = [];
let circleToShow = 0;

function setup() {
    createCanvas(400, 400); 
    sWidth = (width/col)-(pad+(pad/col));
    sHeight = (height/row)-(pad+(pad/row));
    rectMode(CENTER); 
    noStroke();


    for (let i = 0; i < numCircles; i++){
      let x = random(width);
      let y = random(height);
      let size = random(10, 30);
      circles.push({x: x, y: y, size: size});
    }
}

function draw(){
  background(0); 
   
  
  for(let i=0; i<row; i++){
    for(let ii=0; ii<col; ii++){
      let x = pad+(ii*sWidth)+(pad*ii)+(sWidth/2);
      let y = pad+(i*sHeight)+(pad*i)+(sHeight/2);
      fill(rgba); 
      rect(x, y, sWidth, sHeight); 
      
    }
  }

  fill(175, 0, 0);
  for(let i = 0; i < circleToShow; i++){
    circle(circles[i].x, circles[i].y, circles[i].size);
  }
 


if (circleToShow < numCircles){
  circleToShow += 1;
}
}




  
  
