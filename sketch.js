var player,backG;
function preload(){
  backImg = loadImage("New Folder/backImg.jpg");
  playerImg = loadImage("New Folder/playerImg (1).png");
 bodyguard1Img = loadImage("New Folder/bodyG1.png");
 bodyguard2Img = loadImage("New Folder/bodyG2.png");
 bodyguard3Img = loadImage("New Folder/bodyG3.png");
 bodyguard4Img = loadImage("New Folder/bodyG4.png");
 bodyguard5Img = loadImage("New Folder/bodyG5.png");
 bossImg = loadAnimation("New Folder/boss(img1).png","New Folder/boss(img2).png","New Folder/boss(img3).png","New Folder/boss(img4).png");
}

function setup() {
  canvas = createCanvas(1200,400);
  backG = createSprite(400,100,1500,50);
  backG.addImage(backImg);
  backG.scale  =5;
  backG.velocityX = 0;

  player = createSprite(50,300,50,50);
  player.scale = 0.5;
  player.addImage(playerImg);
 
}

function draw() {
  background(255,255,0);
  
   
    if(backG.x<400){
      backG.x = backG.width/2;
       } 
         if(keyDown(RIGHT_ARROW)){
     player.velocityX = 2.5;
     backG.velocityX= -1; 
   }
   
   //if(player.x = 1200){
     // canvas = (400,400);
  //}
   drawSprites();
  } 


