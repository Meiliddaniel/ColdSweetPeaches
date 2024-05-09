var alphaC;
var layer;
var rad = 30;
var paragraphIsMade = false;

var rx;
var ry;

var mouseIsDragged = false;

let pool;
let water;

function preload(){
  title=loadFont('font/GreatVibes.ttf');
  body=loadFont('font/NotoSan.ttf');
  note=loadFont('font/Zeyada.ttf');
  pool=loadImage('img/Pool 2.png');
  water=loadImage('img/Water.png');
  floaty=loadImage('img/floaty.png');

}

function setup() {
  var w = windowWidth/2,
  h = windowHeight/1.5;
  createCanvas(w,h);
  textAlign(CENTER);
  imageMode(CENTER);
  background(200);
  let randomFloor = width*(60/350)
  let randomCeiling = height*(350/450)
  rx = random (randomFloor,randomCeiling)
  ry = random (randomFloor,randomCeiling)
  // ry = random ()
  layer = createGraphics(w, h);
  layer.image(water, 0, 0, width, height);

}


function draw() {
  background(220);
      noStroke();
  image(pool, width/2, height/2, width,height);
  image(layer, width/2, height/2, width/1.2, height/1.2,);
    if (mouseIsPressed) {
    noFill();
    ellipse(mouseX, mouseY, rad, rad);
  }
  textFont(body)
  fill('#A0CDDE')
  text("I think I'll walk down to the pool, \n I've had enough of this canned fruid", width/2,height/2);
  image(floaty, rx,ry,50,50);
    //print(mouseY);
  
    if (mouseIsPressed) {
    noFill();
    ellipse(mouseX, mouseY, rad, rad);
  }
  
}


function mouseDragged() {

  if(!paragraphIsMade);
  createA('pg6.html','Next Line');
  //if (not) paragraphIsMade
paragraphIsMade = true;

  for (var x = mouseX - rad; x < mouseX + rad; x++) {
    for (var y = mouseY - rad; y < mouseY + rad; y++) {
      if (dist(x, y, mouseX, mouseY) < rad && x > 0 && x <= width) {
        layer.set(x, y, alphaC);
      }
    }
  }
  layer.updatePixels();
}