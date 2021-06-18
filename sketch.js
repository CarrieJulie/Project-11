//Variables:
var runner, runnerMove;
var path, pathImage;
var edgeL, edgeR;

function preload(){
  //Loading Images:
  runnerMove = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
  coinImage = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  
  //Path:
  path = createSprite(200,200,20,20);
  path.addAnimation("road", pathImage);
  path.velocityY=6;

  //Runner:
  runner = createSprite(206,300,10,10);
  runner.addAnimation("Running", runnerMove);
  runner.scale=0.05

  //Left Egde:
  edgeL = createSprite(-15,200,175,400);
  edgeL.visible = false;

  //Right Edge:
  edgeR = createSprite(425,200,175,400);
  edgeR.visible = false;  
}

function draw() {
  background(0);
  console.log(runner.x);
 
  //Infinite Road:
  if (path.y > 320){
    path.y = height/2;
  }
  
  //Moving the Runner:
  runner.x = World.mouseX;
  runner.collide(edgeL);
  runner.collide(edgeR);

  drawSprites();
}
