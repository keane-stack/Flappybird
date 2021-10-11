var accel;
var velocity;
var mass;
var jumper;


class Pipe {
  constructor(x, y, h, ) {
    this.x = x;
    this.y = y;
    this.h = h;

  }

}

class Bird {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 25;
    this.h = 25;
    this.velocity = 0;
    this.mass = 30;
    this.accel = mass * 0.1;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h)
    this.velocity += accel;
    this.y += velocity;
    ellipse(width / 2, y, mass, mass);

    if (y > height - mass / 2) {
      // A little dampening when hitting the bottom
      this.velocity *= -0.6;
      this.y = height - mass / 2;
    }
  }

}

function setup() {
  createCanvas(640, 360);



}

function draw() {
  background(127);
  fill(255, 0, 0);

}

function keyPressed() {
  velocity = -20;
}





