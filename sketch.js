var bg;
var snake;
var edgeSprites;
var foodItem;
var foodGroup
var foodsound,gameoversound;
var backgroundImg;
var obstacles,obstacleItem,obstacleGroup;
var score=0;

function preload(){
    backgroundImg=loadImage("bg/bg.jpg");
    foodsound=loadSound("sounds/food.mp3");
    gameoversound=loadSound("sounds/gameover.mp3")
   
}

function setup(){

    bg=createCanvas(600,600)
    snake=createSprite(200,200,10,10)
    edgeSprites=createEdgeSprites();
   
    foodGroup=createGroup();
    obstacleGroup=createGroup();

}

function draw(){
    //console.log("function draw")
    // for moving the snake
    background(backgroundImg)

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
    //for disappering the food when the snake touches
    for (var i = 0; i < foodGroup.length; i++) {
        //To calculate score
        if (foodGroup.get(i).isTouching(snake)) {
            foodGroup.get(i).destroy();
            snake.height = snake.height +5
            score+=10;
        }
        }

     

food();
obstacles();
drawSprites()
if(snake.isTouching(obstacleGroup)){
    textSize(50)
    text("GameOver",300,300)
    
 }
 textSize(30)
 text( "score: "+score,50,50)
 
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
function obstacles(){
    if( World.frameCount % 100 ===0){
        obstacleItem=createSprite(200,100,10,10)
        obstacleItem.x = Math.round(random(50,580,));
        obstacleItem.y = Math.round(random(70,600)); 
        obstacleItem.shapeColor="blue"
        obstacleItem.lifetime=200
        obstacleGroup.add(obstacleItem)
    }
}
