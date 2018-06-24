
var clouds = [];

function setup() {
  // put setup code here
  
  createCanvas(displayWidth, displayHeight);
  background(80, 180, 205);
  line(0,displayHeight/2,displayWidth,displayHeight/2);
  var rand = random(0,displayWidth);
  fill(248, 252, 2);
  ellipse(rand, 100, 70);
  stroke('rgb(0,255,0)');
  var x1=0;
  var y1 = displayHeight/2;

  var x2 = x1+10;
  var y2 = displayHeight/2-100;

  for(let i = 0;i<displayWidth ; i+=10)
  line(i,y1,i+10,y2);
  
  
}

function draw() {
  // put drawing code here
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
  background(80, 180, 205);
  for (i = 0; i < clouds.length; i++) {
		var currentObj = clouds[i];
		cloud(currentObj.xpos, currentObj.ypos, currentObj.size);
		currentObj.xpos += 0.5;
		currentObj.ypos += random(-0.5, 0.5);
		if (clouds[i].xpos > width+20) {
			clouds.splice(i, 1);
		}
	}
}

function cloud(x, y, size) {
	fill(255, 255, 255);
	noStroke();
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
	arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}

function mousePressed() {
	var newCloud = {
		xpos: mouseX,
		ypos: mouseY,
		size: random(0.8, 1.3)
	};
	clouds.push(newCloud);
}