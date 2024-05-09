let peach2;

function preload() {
  title = loadFont('font/GreatVibes.ttf');
  body = loadFont('font/NotoSan.ttf');
  note = loadFont('font/Zeyada.ttf');
  peach1 = loadImage('img/Peach1.png');
  peach2 = loadImage('img/Peach2.png');
}

var dragging = false;
var rollover = false;

var x, y, w, h;
var offsetX, offsetY;

function setup() {
  createCanvas(windowWidth/1.5,windowHeight/1.5);
  textAlign(CENTER);
  // imageMode(CENTER);

  x = width * (180/500);
  y = height * (100/400);


  w = width * (150/500);
  h = height * (250/400);
}

function draw() {
  background(300);
  image(peach1, width / 3, height * (110/400), width * (150/500), height * (250/400));


  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);

  image(peach2, x, y, w, h);
}

function mousePressed() {
  //This condition assumes the image is placed from the corner
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;

    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
}

function mouseReleased() {
  dragging = false;
}
