var firstEpress = true;

function preload() {
  title = loadFont('font/GreatVibes.ttf');
  body = loadFont('font/NotoSan.ttf');
}

function setup() {
  createCanvas(500,400);
  textAlign(CENTER);
  background(200);

  textFont(title);
  textSize(40);
  text('"Peaches"', width / 1.8, height / 2);
  textFont(body);
  textSize(25);
  text("Type", width / 1.8 - 95, height / 2);
}

function draw() {}

function keyPressed() {
  print(keyCode);
  if (keyCode == 80) {
    background(255, 182, 71);
    textFont(title);
    textSize(40);
    text('"Peaches"', width / 1.8, height / 2);
    textFont(body);
    textSize(25);
    text("Type", width / 1.8 - 95, height / 2);
  } else if (keyCode == 69 && firstEpress) {
    background(255, 182, 71);
    fill("white");
    textFont(title);
    textSize(40);
    text('"Peaches"', width / 1.8, height / 2);
    textFont(body);
    textSize(25);
    text("Type", width / 1.8 - 95, height / 2);
    firstEpress = false;
  } else if (keyCode == 65) {
    background(255, 182, 71);
    fill("white");
    textFont(title);
    textSize(40);
    text("Peaches", width / 1.5, height / 2);
  } else if (keyCode == 67) {
    text("Cold", width /3.7, height / 2);
  } else if (keyCode == 72) {
    text("Sweet", width / 2.2, height / 2);
  } else if (keyCode == 69 && firstEpress == false) {
    textFont(body);
    textSize(15);
    text("Juan", width / 2.2, height / 2 + 30);
  } else if (keyCode == 83) {
    textFont(body)
    textSize(15);
    text("Olivarez", width / 1.8, height / 2 + 30);
  }
}
