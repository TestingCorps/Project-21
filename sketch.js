var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1550,800);

  speed = random(223,321);

  weight = random(30,52);

  thickness = random(22,83);

  wall = createSprite(1500, 400, thickness, height/2);
  wall.shapeColor = (50,50,50);

  bullet = createSprite(50, 400, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(225);
}

function draw() {
  background(0,0,0); 
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed**2/thickness**3;
    
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}