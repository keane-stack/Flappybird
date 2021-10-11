var accel;
var velocity;
var mass;
var jumper;

var bird;


class Pipe {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }

  draw() {
    
  }
}

class Bird {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 25;
    this.h = 25;
    this.velocity = 0;
    this.accel = 0.9;
  }

  draw() {
    ellipse(this.x, this.y, this.w, this.h);

    this.velocity += this.accel;
    this.y += this.velocity;
    
    if (this.y > height) {
      this.y = height;
    }
  }
}

function setup() {
  createCanvas(640, 360);

  bird = new Bird();
}

function draw() {
  background(127);
  fill(255, 0, 0);

  bird.draw();
}

function keyPressed() {
  bird.velocity = -15;
}




