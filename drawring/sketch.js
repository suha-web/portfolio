let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  for (let i = 0; i < 4; i++) {
    let offset = i * 100; 

  fill(0);
  circle (x + offset + 40, 130, 30);
  circle (x + offset + 140, 130, 30);
  circle (x + offset + 240, 130, 30);
  circle (x + offset + 340, 130, 30);
  }

  strokeWeight (5);
  noFill();
  ellipse (295, 220, 30, 50);

  line (140, 200, 50, 250);
  line (140, 250, 50, 200);
  
 
  
  x += 6;

  if (x > 100) {
    x = -200;
  }
}


