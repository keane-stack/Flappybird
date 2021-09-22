var x
var y
var z //zwaartekracht
var v //velocity
function setup() {
createCanvas(500, 500);
x = 250;
y = 250;

}

function draw(){
  	background(225);
 ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;



  if(x <= 0 || x >= 500){
    vx = vx * -1;
  }

  if(y <= 0 || y >= 500){ 
    vy = vy * -1;
  }

}




