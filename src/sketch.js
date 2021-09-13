var fixedCube;
var movingCube;

function setup() {
  createCanvas(800,400);
  fixedCube = createSprite(100, 200, 70, 50);
  fixedCube.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));

  movingCube = createSprite(300, 200, 50, 60);
  movingCube.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  background(0,0,0);
  movingCube.x = World.mouseX;
  movingCube.y = World.mouseY;

  //X
  if(movingCube.x - fixedCube.x < fixedCube.width/2 + movingCube.width/2 && fixedCube.x - movingCube.x < fixedCube.width/2 + movingCube.width/2
   &&movingCube.y - fixedCube.y < fixedCube.height/2 + movingCube.height/2 && fixedCube.y - movingCube.y < fixedCube.height/2 + movingCube.height/2){
    fixedCube.shapeColor = rgb(255,255,255);
    movingCube.shapeColor = rgb(255,255,255);
  } else {
    fixedCube.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
    movingCube.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
  }
  drawSprites();
}