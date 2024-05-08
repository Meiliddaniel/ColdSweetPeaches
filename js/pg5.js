var rx;
var ry;

function preload(){
  title=loadFont('font/GreatVibes.ttf');
  body=loadFont('font/NotoSan.ttf');
  note=loadFont('font/Zeyada.ttf');
  pool=loadImage('img/Pool 2.png');
  water=loadImage('img/Water.png');
  floaty=loadImage('img/floaty.png');

}

function setup() {
  createCanvas(500, 400);
  textAlign(CENTER);
  imageMode(CENTER);
  background(200);
  let randomFloor = width*(60/350);
  let randomCeiling = height*(350/450);
  rx = random (randomFloor,randomCeiling);
  ry = random (randomFloor,randomCeiling);
  // ry = random ()

  
}


function draw() {
  background(220);
  image(pool, width/2, height/2, width,height);
  image(water, width/2, height/2, width/1.2, height/1.2);
  textFont(body);
  fill('white');
  text("I think I'll walk down to the pool, \n I've had enough of this canned fruid", width/2,height/2);
  image(floaty, rx,ry,50,50);
    print(mouseY);


}