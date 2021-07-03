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
  
      cheetah1 = createSprite(100,displayHeight-200)
      cheetah1.addAnimation("cheetahImg",cheetahImg)
      cheetah1.scale=0.6;
      cheetah1.setCollider("rectangle",0,0,400,300)
      cheetah1.debug = true
      cheetah2 = createSprite(200,displayHeight-175)
      cheetah2.addAnimation("cheetahImg",cheetahImg)
      cheetah2.scale = 0.6;
      cheetah2.setCollider("rectangle",0,0,400,300)
      cheetah2.debug = true;
      cheetah = [cheetah1,cheetah2]
      deer = createSprite(displayWidth/2,displayHeight-200)
      deer.addAnimation("deerImg", deerImg)
      deer.scale = 0.4
      deer.debug = true 
      deer.setCollider("rectangle",0,0,300,300)

    }
    play(){
      form.hide()
      Player.getPlayerInfo()
      if(allPlayers !== undefined){
        var x ;
        //var y = displayHeight - 250 ;
        var index = 0
        for (var plr in allPlayers){
          background("green")
          image(bg,0,0,displayWidth*10,displayHeight)
          deer.velocityX = random(20,25)
          index = index+1
          x = allPlayers[plr].distance
          //y = displayHeight + 100
          cheetah [index-1].x = x
          //cheetah [index-1].y = y

          if (index === player.index){
            camera.position.x = x+displayWidth/4
            camera.position.y = displayHeight/2
            fill("red")
            ellipse( cheetah[index-1].position.x, cheetah[index-1].position.y,60,60 )
          
          }
        }
        if (keyIsDown(RIGHT_ARROW)&& player.index !== null){
          player.distance += 50
          player.update()
        }
      }

      for(var i = 0 ; i < cheetah.length; i++){
        if ( cheetah[i].isTouching (deer)){
          //image(bg2,player.x,displayHeight/2,displayWidth,displayHeight)
          gameState = 2;
          game.update(2)
        }
      }


      drawSprites();
    }

    end(){
      background(bg2)
      
      var proceed = confirm("the deer is caught !")
      if (proceed){
        image(bg2,player.distance,displayHeight/2,displayWidth,displayHeight)
        game.update(0)
        //player.updateCount(0)
        //player.deletePlayers()
      }
      
    }

}  