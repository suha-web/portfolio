let row = 3;     
let col = 3;     
let circles = [];

function setup() {
    createCanvas(200, 200); 
    noFill();
    Stroke(0);
    circles = [
      {i: 0, j: 1},
      {i: 1, j: 2},
      {i: 2, j: 0},
      {i: 2, j: 2}
    ];
}

function draw(){
  background(255); 
 
  let cellW = width / col;
  let cellH = height / row; 

  stroke(120);
  for (let i = 0; i < 30; i++){
    beginShape();
    for (let j = 0; j < 20; j++) {
    vertex (random(width), random(height));
  }
  endShape();
}
  
  stroke(0);
  for (let i = 1; i < col; i++);{
    line(i * cellW, 0, i * cellW, height);
  }
  for (let j = 1; j < row; j++){
    line(0, j * cellH, width, j * cellH);
  }

  fill(255, 0, 0);
  noStroke();
  for (let c of circles){
    let x = c.j * cellW + cellW / 2;
    let y = c.j * cellH + cellH / 2;
    ellipse(x, y, 50, 50);
    
  }
}




  
  
