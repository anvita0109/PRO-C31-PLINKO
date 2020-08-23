const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground;
var divisionHeight = 300;
var particle = [];
var plinkos = [];
var divisions = [];
var a;

function preload()
{
	
}

function setup() {
	createCanvas(490, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240, 770, 500, 10);

  for (var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


	plinko1 = new Plinko(50, 150, 25);
	plinko2 = new Plinko(150, 150, 25);
	plinko3 = new Plinko(250, 150, 25);
	plinko4 = new Plinko(350, 150, 25);
	plinko5 = new Plinko(450, 150, 25);

	plinko6 = new Plinko(  0, 200, 25);
	plinko7 = new Plinko(100, 200, 25);
	plinko8 = new Plinko(200, 200, 25);
	plinko9 = new Plinko(300, 200, 25);
	plinko10= new Plinko(400, 200, 25);

	plinko11= new Plinko( 50, 250, 25);
	plinko12= new Plinko(150, 250, 25);
	plinko13= new Plinko(250, 250, 25);
	plinko14= new Plinko(350, 250, 25);
	plinko15= new Plinko(450, 250, 25);

	plinko16= new Plinko(  0, 300, 25);
	plinko17= new Plinko(100, 300, 25);
	plinko18= new Plinko(200, 300, 25);
	plinko19= new Plinko(300, 300, 25);
	plinko20= new Plinko(400, 300, 25);

	plinko21= new Plinko( 50, 350, 25);
	plinko22= new Plinko(150, 350, 25);
	plinko23= new Plinko(250, 350, 25);
	plinko24= new Plinko(350, 350, 25);
	plinko25= new Plinko(450, 350, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  if(frameCount % 10=== 0){
    particle.push(new Particles(random(width/2-100, width/2+100), 10, 10));
  }

  for (var j = 0; j< particle.length; j++){
    particle[j].display();
  }
  for (var k = 0; k< divisions.length; k++){
    divisions[k].display();
  }
 
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();

  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();

  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();

  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();

  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();




  ground.display();
}