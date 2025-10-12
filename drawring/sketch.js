function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  strokeWeight (5);
  noFill();
  ellipse (295, 220, 30, 50);
  
  fill(0, 0, 0, 255);
  circle (40, 130, 30);
  circle (140, 130, 30);
  circle (240, 130, 30);
  circle (340, 130, 30);
 
  strokeWeight (5);
  line(65, 200, 115, 250);
  line(65, 250, 115, 200);

}
