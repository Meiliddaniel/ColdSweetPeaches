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
  textSize(width * (40/500));
  text('"Peaches"', width * (290/500), height / 2);
  textFont(body);
  textSize(width * (25/500));
  text("Type", width * (182/500), height / 2);
}

function draw() {}

function keyPressed() {
  print(keyCode);
  if (keyCode == 80) {
    background(255, 182, 71);
    textFont(title);
    textSize(width * (40/500));
    text('"Peaches"', width * (290/500), height / 2);
    textFont(body);
    textSize(width * (25/500));
    text("Type", width * (182/500), height / 2);
  } else if (keyCode == 69 && firstEpress) {
    background(255, 182, 71);
    fill("white");
    textFont(title);
    textSize(width * (40/500));
    text('"Peaches"', width * (290/500), height / 2);
    textFont(body);
    textSize(width * (25/500));
    text("Type", width * (182/500), height / 2);
    firstEpress = false;
  } else if (keyCode == 65) {
    background(255, 182, 71);
    fill("white");
    textFont(title);
    textSize(width * (40/500));
    text("Peaches", (width * (344/500)), (height * (198/400)));
  } else if (keyCode == 67) {
    text("Cold", (width * (146/500)), (height * (198/400)));
  } else if (keyCode == 72) {
    text("Sweet", (width * (240/500)), (height * (198/400)));
  } else if (keyCode == 69 && firstEpress == false) {
    textFont(body);
    textSize(width*(15/500));
    text("Juan", (width* (230/500)), (height * (232/400)));
  } else if (keyCode == 83) {
    textFont(body)
    textSize(width*(15/500));
    text("Olivarez", (width * (277/500)), (height * (232/400)));
  }
}
