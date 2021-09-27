
var y; 
var accel; 
var velocity; 
var mass; 


function setup() {
  createCanvas(640, 360);
  
  y = 0;  
  velocity = 0; 
  mass = 100; 
  
  accel = mass * 0.1; 
}

function draw() {
  background(127);
  fill(255,0,0);
  
  velocity += accel; 
  y += velocity;
	ellipse(width/2,y, mass,mass); 
  
  if (y > height - mass/2) {
    // A little dampening when hitting the bottom
    velocity *= -0.6;
    y = height - mass/2;
  }
}


function mousePressed() {
  y = 0;  
  velocity = 0; 
}







