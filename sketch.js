var car,wall,thickness;
var speed,weight,rating;
var damage;
var state="pre";

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  car = createSprite(50,200,60,20);
  car.shapeColor="white";
}

function draw() {
  background(0);

  if(state==="pre") {
    textSize(20);
    fill("white");

    text("Press SPACE BAR.",600,50);

    if(keyWentUp("space")) {
      state="running";
    }
  }

  if(state==="running") {
    weight = Math.round(random(400,1500));
    speed = Math.round(random(55,90));
    car.velocityX = speed;

    if(car.x-wall.x<wall.width/2+car.width/2 &&
      wall.x-car.x< wall.width/2+car.width/2 &&
      wall.y-car.y<wall.height/2+car.height/2 &&
      car.y-wall.y<wall.height/2+car.height/2) {

    car.velocityX=0;
    damage = Math.round(0.5*weight*speed*speed/22500);
     
    if(damage<80) {
      wall.shapeColor="green";
      rating="GOOD";
    }

    else if(damage>80 && damage<180) {
      wall.shapeColor="yellow";
      rating="AVERAGE";

    }

    else if(damage>180) {
      wall.shapeColor="red";
      rating="BAD";

    }

    state="end";
  }
}

  if(state==="end")
    {

    if(damage<80) {
      fill("green");
    }

    if(damage>80&& damage<180)
    {
      fill("yellow");
    }

    else if(damage>180){
      fill("red");
    }

    textSize(20);
    text("Speed: "+speed+"km/h",200,50);
    text("Weight: "+weight+"kg",400,50);

    textSize(25);
    text("Rating: "+rating,600,50);
    text("Damage: "+damage,900,50);

    text("Press 'R' to reset",1200,50);
    if(keyDown("r")) {
      reset();
     
    }
  }

  drawSprites();
}


function reset() {
  state="pre";
  car.x=50;
  wall.shapeColor=color(127,127,127);
}