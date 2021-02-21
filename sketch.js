
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// roof
	roofs = new Roof(400,50,750,50);
	World.add(world,roofs); 
    
	// Bobs
	Bobobject1 = new Bob(250,300);
	Bobobject2 = new Bob(300,300); 
	Bobobject3 = new Bob(350,300);
	Bobobject4 = new Bob(400,300);
	Bobobject5 = new Bob(450,300);

    // rope
    rope1 = new Rope(Bobobject1.body,roof.body,-100,0);
	World.add(world,rope1);

	rope2 = new Rope(Bobobject2.body,roof.body,-50,0);
	World.add(world,rope2);

	rope3 = new Rope(Bobobject3.body,roof.body,0,0);
	World.add(world,rope3);

	rope4 = new Rope(Bobobject4.body,roof.body,50,0);
	World.add(world,rope4);

	rope5 = new Rope(Bobobject5.body,roof.body,100,0);
	World.add(world,rope5);	 	
   
	Engine.run(engine);
  
}


function draw() {
  background(0); 

  Engine.Update(engine);
   drawSprites();

  roofs.display();
  
  Bobobject1.display();
  Bobobject2.display();
  Bobobject3.display();
  Bobobject4.display();
  Bobobject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}



