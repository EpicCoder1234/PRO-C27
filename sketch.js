
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,600,50);

	bob1 = new Bob(400,500,50);
	bob2 = new Bob(500,500,50);
	bob3 = new Bob(600,500,50);
	bob4 = new Bob(300,500,50);
	bob5 = new Bob(200,500,50);
	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,100,0);
	rope3 = new Rope(bob3.body,roof.body,200,0);
	rope4 = new Rope(bob4.body,roof.body,-100,0);
	rope5 = new Rope(bob5.body,roof.body,-200,0)


	Engine.run(engine);
  
}


function draw(){

  rectMode(CENTER);
  background(225);
  
  Engine.update(engine);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body, bob3.body.position,{x:100,y:-100})
	}
}



