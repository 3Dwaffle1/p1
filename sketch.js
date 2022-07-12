var block;
var block2;


function setup() {
  createCanvas(400,400);
  
  block=createSprite(200,200,30,30)
  block2=createSprite(100,200,30,30)
  block.shapeColor=("blue")
  block.velocityX= 2
  block2.shapeColor=("red")
  block2.velocityX= -2
}

function draw() 
{
  background(30);
edges=createEdgeSprites()
drawSprites()
block.bounceOff(edges)
block2.bounceOff(edges)
block.bounceOff(block2)
}




