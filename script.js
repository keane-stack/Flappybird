var bird;
var buizen;
var bg, bird_img;
var gameState = 0;
var score = 0;
var jumpSound;


class Buis {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 50;
    this.c = "yellow";
  }

  draw() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
    this.x -= 4;
  }

  checkCollision() {
    if (bird.x + bird.w > this.x && bird.x < this.x + this.w) {
      if (bird.y + bird.h > this.y && bird.y < this.y + this.h) {
        
        gameState = 2;

        this.c = "red";
      }
    }
    else {
      this.c = "yellow";
    }
  }
}

class Bird {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 35;
    this.h = 35;
    this.velocity = 0;
    this.accel = 0.5;
  }

  draw() {
    image(birb_bg, this.x, this.y, this.w, this.h);

    this.velocity += this.accel;
    this.y += this.velocity;

    if (this.y > height) {
      //this.y = 330;
      gameState = 2;
      

    }
  }
}

function preload() {
  bg = loadImage('plaatjes/bg.png');
  birb_bg = loadImage('plaatjes/bird.png');
  jumpSound = loadSound('sounds/jumpSound.mp3');
  backgroundSong = loadSound('sounds/interstellar.mp3')

}

function setup() {
  createCanvas(640, 360);

  bird = new Bird();
  buizen = [];
}

function draw() {
  image(bg, 0, 0, width, height);

  if (gameState == 0) {
    startMenu();
  }
  else if (gameState == 1) {
    game();
  }
  else if (gameState == 2) {
    gameOver();
  }
}

function keyPressed() {
  bird.velocity = -7;//-9
    jumpSound.play();


  if (gameState == 0) {
    if (keyCode === 32) {
      gameState = 1;
      backgroundSong.play();

    }
  }
  else if (gameState == 1) {
    if (keyCode === 32) {
    }
  }
  else if (gameState == 2) {
    if (keyCode === 32) {
      buizen.length = 0;
      score = 0;
      bird.y = height / 2;
      backgroundSong.play();


      gameState = 1;
    }
  }
}


function startMenu() {
  textSize(50);
  textAlign(CENTER);
  fill("geel");
  text("Flappy Bird", width / 2, height / 4);

  textSize(20);
  text("Press [SPACE] to play", width / 2, height / 5 * 4);
}

function game() {
  // Voor elke zoveel frames, ????n buis.
  if (frameCount % 80 == 0) {
    let holeSize = 100;
    let holeY = random(10, 350 - holeSize);

    // Plafond
    buizen.push(new Buis(width, 0, holeY));

    // Grond
    buizen.push(new Buis(width, holeY + holeSize, height));
  }

  bird.draw();

  // Gaat door elke buis in de buizen lijst.
  buizen.forEach(buis => {
    // Tekent deze buis.
    buis.draw();
    buis.checkCollision();

    if (abs(bird.x - buis.x) < bird.w) {
      score += 1/34;
    }
  });

  text("Score: " + round(score), 50, 50);
}

function gameOver() {
 textSize(50);
  textAlign(CENTER);
  fill("white");
  text("GAME OVER", width / 2, height / 4);

  textSize(20);
  text("Press [SPACE] to play again", width / 2, height / 5 * 4);

  text("Score: " + round(score), 50, 50);
}
