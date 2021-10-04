var vogel;
var pipes;



class Vogel {
  constructor() {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.velocity = 0;
    this.acceleration = 0.9;
    this.gravity = 0.9;
  }
}

function setup() {
  createCanvas(640, 360);

  y = 0;
  velocity = 0;
  mass = 30;
  accel = mass * 0.1;
}

function draw() {
  background(127);
  fill(255, 0, 0);


 
}

function keyPressed() {
  velocity = -20;
}





