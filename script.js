var bird;
var buizen;

class Buis {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 30;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
    this.x -= 4;
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
  buizen = [];
}

function draw() {
  background(127);
  fill(255, 0, 0);

  // Voor elke zoveel frames, één buis.
  if (frameCount % 80 == 0) {
    buizen.push(new Buis(width, 0, 100));
    buizen.push(new Buis(width, 300, 100));
  }

  bird.draw();

  // Gaat door elke buis in de buizen lijst.
  buizen.forEach(buis =>
  {
    // Tekent deze buis.
    buis.draw();
  });
}

function keyPressed() {
  bird.velocity = -15;
}


