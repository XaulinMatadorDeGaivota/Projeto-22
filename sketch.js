const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  Archerimage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  
  var options = {
    isStatic: true
  };

  playerArcher = Bodies.rectangle(230,350,180,150,options);
  World.add(world, playerArcher);

  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160,500,180,options);
  World.add(world, player);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  //exibir a imagem do jogador usando a função image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,playerBase.position.x,player.position.y,50,180)
  image(Archerimage,playerArcher.position.x,player.position.y,100,100)


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
