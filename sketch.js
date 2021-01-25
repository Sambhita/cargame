var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, height/2);
}

function draw() {
  background("black");

  touching();
  drawSprites();
}
function touching(){
  if(wall.x - car.x < (car.width + wall.width)/2){

    car.velocityX = 0;
    var deformation = 0.5* width * speed*speed/22500;

    if(deformation > 180){
      car.shapeColor = "red";
      wall.shapeColor = "white";
    }
    if(deformation < 100){
      car.shapeColor = "green";
      wall.shapeColor = "white";
    }
    if(deformation< 180 && deformation > 100){
      car.shapeColor = "yellow";
      wall.shapeColor = "white";
    }
  }
}