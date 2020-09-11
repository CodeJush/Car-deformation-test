var car,wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);


 car= createSprite(50, 100, 100, 50);
 car.velocityX=speed;
 
 wall=createSprite(1500,200,60,height/2);
wall.shapeColor=rgb(80,80,80);



}

function draw() {
//make the car collide and check the deformation

  if(wall.x-car.x < wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation= 0.5*weight*speed*speed/22500;

    if(deformation<100){
   car.shapeColor="green";
    }

    if(deformation<200 && deformation>100){
      car.shapeColor="yellow";
       }

       if(deformation>180){
        car.shapeColor="red";
         }

      }
  background(0);  
  drawSprites();
}