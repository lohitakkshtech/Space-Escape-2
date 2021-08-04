let ground;
let lander;
var lander_img;
var bg_img;

var vy = 0;
var g = 0.05;
var invisibleGround;
var alien

function preload()
{
  lander_img = loadImage("astronaut.png");
  bg_img = loadImage("SpaceImage.png");
  alien_img = loadAnimation("picture1.png","picture2.png","picture3.png","picture4.png","picture5.png","picture6.png","picture7.png","picture8.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)
  invisibleGround = createSprite(windowWidth,windowHeight,windowWidth+2000,260)
  invisibleGround.visible=false
  alien = createSprite(windowWidth/2,windowHeight/2)
  alien.addAnimation("picture",alien_img)
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,5,5,windowWidth,windowHeight);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
 lander.collide(invisibleGround)
  //fall down
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

