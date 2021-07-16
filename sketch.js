const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas = createCanvas(800,600)
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   PlayerBase = new PlayerBase(200,250,50,10);
   ComputerBase = new ComputerBase(600,250,50,10);

 //player and compPlayer;
   Player = new Player(200,260,10,10);
   ComputerPlayer = new Player(600,260,10,10);
 }
 

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  ComputerBase.display();
  PlayerBase.display();

   //display Player and computerplayer
  Player.display();
  computer.display();
  

}
