var wall1, wall2, wall3, wall4
var bullet1, bullet2, bullet3, bullet4, thickness
var speed1, speed2, speed3, speed4, weight1, weight2, weight3, weight4 

var sidewall1, sidewall2, sidewall3, sidewall4

function setup() {
  createCanvas(1600,500);
  
  speed1 = random(50, 250)
  weight1 = random(50, 100)

  speed2 = random(50, 250)
  weight2 = random(50, 100)

  speed3 = random(50, 250)
  weight3 = random(50, 100)

  speed4 = random(50, 250)
  weight4 = random(50, 100)

  bullet1 = createSprite(-10, 50, 20, 10)
  bullet1.shapeColor = "white"
  bullet1.velocityX = speed1

  bullet2 = createSprite(-20, 160, 20, 10)
  bullet2.shapeColor = "white"
  bullet2.velocityX = speed2

  bullet3 = createSprite(-10, 270, 20, 10)
  bullet3.shapeColor = "white"
  bullet3.velocityX = speed3

  bullet4 = createSprite(-20, 380, 20, 10)
  bullet4.shapeColor = "white"
  bullet4.velocityX = speed4

  thickness = random(20, 100)
  
  sidewall1 = createSprite(1000, 105, 10000, 10)
  sidewall1.shapeColor = "white"
  wall1 = createSprite(1450, 50, thickness, height/5)

  sidewall2 = createSprite(1000, 215, 10000, 10)
  sidewall2.shapeColor = "white"
  wall2 = createSprite(1450, 160, thickness, height/5)

  sidewall3 = createSprite(1000, 325, 10000, 10)
  sidewall3.shapeColor = "white"
  wall3 = createSprite(1450, 270, thickness, height/5)

  sidewall4 = createSprite(1000, 435, 10000, 10)
  sidewall4.shapeColor = "white"
  wall4 = createSprite(1450, 380, thickness, height/5)
}

function draw() {
  background("black");
  
  wall1.depth = bullet1.depth - 1
  wall2.depth = bullet2.depth - 1
  wall3.depth = bullet3.depth - 1
  wall4.depth = bullet4.depth - 1

  textSize(30);
  stroke("yellow");
  text("Moderate", 700,480);
  
  textSize(30);
  stroke("blue");
  text("Strong", 200,480);

  textSize(30);
  stroke("red");
  text("Weak", 1200,480);

  touch(bullet1, wall1);
  istouching(bullet2, wall2);
  move(bullet3, wall3);
  affect(bullet4, wall4);

  drawSprites();
}