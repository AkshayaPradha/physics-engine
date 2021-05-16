
//Matter.js - Engine, World, Bodies 
// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);


  var obj_options = {
    restitution: 1,
    isStatic : false

  }
  object = Bodies.circle(200,200,10,obj_options);
  World.add(world,object);

  //isStatic - true/false - if true then the body is fixed
  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  console.log(object.position.x);

  
}

function draw() {
  background("pink");  

  rectMode(CENTER);
  //to display the object
  circle(object.position.x,object.position.y,20)

  //to display the ground
  rect(ground.position.x,ground.position.y,400,20);
}