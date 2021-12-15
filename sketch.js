var box;
var color;
var btm;

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 100, 40, 50);
  color = "black";
  btm = createImg("blueButton.png")

  btm.position (50, 200)
  btm.mouseClicked (colorChanger)
  }

function draw() 
{
  background(color);
if (keyDown(LEFT_ARROW)){
  box.x -=2
  color = "green";
}
if (keyDown(RIGHT_ARROW)){
  box.x +=2
  color = "blue"
}
if (keyDown(UP_ARROW)){
  box.y -=2
  color = "purple"
}
if (keyDown(DOWN_ARROW)){
  box.y +=2
  color = "yellow"
}

  drawSprites();
}

function colorChanger (){
  color = "red"
}


