
class Vogel{
constructor(x, y, w, h, vx, vy,_color){
this.x = x;
this.y = y;
this.width = w;
this.height = h;
this.vx = vx;
this.vy = vy;
this.color = _color
}

draw() {
fill(this.color)
ellipse (this.x,this.y,50,50);
this.x = this.x + this.vx;
this.y = this.y + this.vy;
}
}



function setup() {
	createCanvas(500, 400);
}
function draw() {
background(254);
ballList.forEach(function(ball){
ball.draw();
});
}