
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImg;
var rabbit, rabbitImg;
var carrot, carrotImg;
var fox, foxImg;
var score;

function preload()
{
	rabbitImg = loadImage("assets/Rabbit.png");
  	carrotImg = loadImage("assets/Carrot.png");	
	foxImg = loadImage("assests/fox.png")	
  
  	bgImg = loadImage("assets/bg.jpeg");
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	// engine = Engine.create();
	// world = engine.world;

	//Create the Bodies Here.

	
//adding the background image
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(rabbitImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)




   carrotGroup = new Group();

	// Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("UP_ARROW")||touches.length>0){
	player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }


  if (carrotGroup.isTouching(player)){
	for (var i=0; i<carrotGroup.length; i++) {
	  if (carrotGroup[i].isTouching(player)){
		carrotGroup[i].destroy();
		score = score+1; 
	  }
	}
}

food();
  
  drawSprites();
 
}



function food() {

	if (frameCount%50 === 0){
	  carrot = createSprite(random(500,1000),random(100,500),40,40);
	  carrot.addImage(carrotImg);
	  carrot.scale = 0.2;
	  carrot.velocityY = 2;
	  carrot.lifetime = 400;
	  carrotGroup.add(zombie);
	  carrot.setCollider("rectangle",0,0,400,400);
	  carrot.debug = true;
	}
	  
	}