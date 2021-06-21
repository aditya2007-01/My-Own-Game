var bg;
var snake;
var edgeSprites;
var foodItem;
var foodGroup
function setup(){

bg=createCanvas(600,600)
snake=createSprite(200,200,10,10)
edgeSprites=createEdgeSprites();

foodGroup=createGroup();

}

function draw(){
//console.log("function draw")
// for moving the snake
background(" lightgreen")

snake.bounceOff(edgeSprites)

if(keyDown(UP_ARROW)){
    snake.velocityY=-3
}
if(keyDown(DOWN_ARROW)){
    snake.velocityY=3
}
if(keyDown(LEFT_ARROW)){
    snake.velocityX=-3
}
if(keyDown(RIGHT_ARROW)){
    snake.velocityX=3
    
}
food();
drawSprites()
}
function food(){
    if( World.frameCount % 40 ===0){
     foodItem=createSprite(100,300,10,10)
     foodItem.x = Math.round(random(50,580));   
     foodItem.y = Math.round(random(70,600));  
     foodItem.shapeColor="red"
     foodItem.lifetime=200
     foodGroup.add(foodItem)
   
    }
}