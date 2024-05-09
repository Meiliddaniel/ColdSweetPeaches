
let forgetOpacity = 255;
let opacitySpeed = -8;
let fadeStarted = false;

let littleSize = 25;
let shrinkSpeed = -1;
let shrinkStarted = false;


function preload() {
  title = loadFont('font/GreatVibes.ttf');
  body = loadFont('font/NotoSan.ttf');
  note = loadFont('font/Zeyada.ttf');
}

function setup() {
  createCanvas(500, 400);
  textAlign(CENTER);
}

function draw() {
  background(255, 222, 130);
  textFont(title);
  textSize(45);
  fill(0, 0, 0, forgetOpacity);
  text("Forget", width / 3.5, height / 2.5);
  fill(0);
  textFont(body);
  textSize(25);
  text("the", width / 2.5, height / 2);
  textFont(note);
  textSize(littleSize);
  text("little", width / 2.5, height / 1.7);
  textFont(body);
  textSize(25);
  text("old", width / 2, height / 1.7);
  text("ELECTRIC FAN", width / 1.5, height / 1.5);
  
  print(mouseX);
}

function mousePressed() {

  if (!fadeStarted && mouseX > width *(1/5) && mouseX < width *(202/500) && mouseY > height*(131/400) && mouseY < height *(162/400)) {
    fadeStarted = true;
    startFade();
  }

  if (!shrinkStarted && mouseX > width *(87/500) && mouseX < width *(208/500) && mouseY > height*(218/400) && mouseY < height*(236/400)) {
    shrinkStarted = true; 
    startShrink(); 
  }
}


function startFade() {

  let interval = setInterval(function() {
    forgetOpacity += opacitySpeed;
    if (forgetOpacity <= 0) { 
      forgetOpacity = 0;
      clearInterval(interval);
    }
  }, 50);
}

function startShrink() {
  let interval = setInterval(function() {
    littleSize += shrinkSpeed; 
    if (littleSize <= 0) { 
      littleSize = 0;
      clearInterval(interval);
    }
  }, 50);
}


