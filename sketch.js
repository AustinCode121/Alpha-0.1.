var player;
var playerGroup;
var platform,plates,plateImage,plateImage2,plateImage3,plateImage4;
var playerImageUp,playerImageDown,playerImageLand,playerImageDive;
var playerUpDive;
var BackGroundImage;
function setup() {
  createCanvas(3300,1800);
  player = createSprite(200,200,150,150);
  playerGroup = createGroup();
  plates = createGroup();
  player.scale = 0.3;
  player.addImage(playerImageUp);
}
function preload(){
 plateImage = loadImage("Images/AloneCloudB.png");
 plateImage2 = loadImage("Images/AloneCloudA.png");
 plateImage3 = loadImage("Images/FamilyCloudA.png");
 plateImage4 = loadImage("Images/FamilyCloudB.png");
 playerImageUp = loadImage("Images/playerUp.png");
 playerImageDown = loadImage("Images/playerDown.png");
 playerImageLand = loadImage("Images/playerLand.png");
 playerImageDive = loadImage("Images/PlayerDive.png");
 playerUpDive = loadImage("Images/playerUpDive.png");
 BackGroundImage = loadImage("Images/BackGroundImage.png");
}
function draw() {
  background("#add8e6");  
  background(BackGroundImage); 
  playerGroup.add(player);  
  player.shapeColor = "red";

 if(player.y > 1800){
 player.y = 200;
 player.x = 200;
 }
 if(player.x < 0){
  player.y = 200;
  player.x = 200;
  }



 //
  player.velocityY = player.velocityY + 1
  if(keyDown("w")){
    player.velocityY = -10;
   player.addImage(playerImageUp);
  }
  if(keyDown("d")){
    player.velocityX = 10;
    player.addImage(playerImageDown);

  }
  if(keyDown("a")){
    player.velocityX = -10;
    player.addImage(playerImageLand);
  }
  if(keyDown("s")){
    player.velocityy = 10;
    player.addImage(playerImageDive);
  }
  //Quick jumps
  if(keyDown("q")){
    player.velocityY = 40;
    player.addImage(playerImageDive);
  }
  if(keyDown("e")){
    player.velocityY = -30;
    player.addImage(playerUpDive);
  }
//  
player.collide(plates);
 if(plates.isTouching(playerGroup)){
     player.velocityX = 0;
     player.velocityY = 0;
 }



 clouds();
drawSprites();

}

function clouds(){
  if (frameCount % 30 === 0) {
    var platform = createSprite(3300,1800,190,90);
    platform.y = Math.round(random(3000,180));
    plates.add(platform);
    platform.velocityX = -14;
    
    
    
    platform.lifetime = 300;
  
      
    var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: platform.addImage(plateImage);
                break;
        case 2: platform.addImage(plateImage2);
                break;
        case 3: platform.addImage(plateImage3);
                break;
        case 4: platform.addImage(plateImage4);
                break;
        default: break;
    
  }
}
 
 console.log("aoir");} 
