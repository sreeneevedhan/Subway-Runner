class Game {
  constructor(){

  }

  
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

update(state){
    database.ref('/').update({
      gameState: state
    });
  }


async start(){
if(gameState === 0){
  player = new Player();
  var playerCountRef = await database.ref('playerCount').once("value");
  if(playerCountRef.exists()){
    playerCount = playerCountRef.val();
    player.getCount();
  }
  form = new Form()
  form.display();
}

  player1 = createSprite(-100,0);
  player1.addAnimation("player1",player1Img);
  player1.setCollider("rectangle",0,0,20,80);  
  player1.scale=0.6;
 
  player2=createSprite(-100,0);
  player2.addAnimation("player2",player2Img);
  player2.setCollider("rectangle",0,0,20,80);
  player2.scale=0.6;
 
  players=[player1,player2]

  
}

play(){

  form.hide();
  
  Player.getPlayerInfo();
 player.getRunnerAtEnd();  
  if(allPlayers !== undefined){
    // background(rgb(198,135,103));
    //spawnHurdle();
     image(track, displayWidth/4,0,displayWidth*5,displayHeight);
     image(finish,5300,0,350,600)
     //var display_position = 100;
     
     //index of the array
     var index = 0;

     //x and y position of the cars
     var x ;
     var y=200;

     

     for(var plr in allPlayers){
       //add 1 to the index for every loop
       index = index + 1 ;

       //position the cars a little away from each other in x direction
       y = y + 200;
       //use data form the database to display the cars in y direction
       x = displayWidth - allPlayers[plr].distance-300;
       
       players[index-1].x = x;
       players[index-1].y = y;

      
       if (index === player.index){
        
         players[index - 1].shapeColor = "red";
         camera.position.y = displayHeight/2;
         camera.position.x = players[index-1].x;
         
       }
      
       //textSize(15);
       //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
     }

    

   }

   if(keyIsDown(RIGHT_ARROW) && player.index !== null){
    player.distance -=10
    player.update();
  }

   if(player.distance<-5000){
    player.rank=player.rank+1;
    Player.updatePlayerAtEnd(player.rank);
    gameState=2;
  
    }

  drawSprites();
         
}
  end(){
   
    console.log(player.rank);
    textSize(60);
    fill("black");
    text(player.rank,camera.x,350,100,100);
    player.index=null;


    
  }
}