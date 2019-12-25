
var stage;
function init(){
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage('canvas');

    var startSeite = new createjs.Container();
    var playSeite = new createjs.Container();
    playSeite.visible = false;

    var bg = new createjs.Bitmap("/img/space.png");
    bg.x = 0;
    bg.y = 0;

    var score = 0;
    var speed = 10;
    var note = new createjs.Text("score: 0", "25px Arial", "yellow");
    note.x = 900;
    note.y = 30;
    function showScore(){
      
      note.text = "Score: "+ Math.floor(score);
   
    }
    var target = new createjs.Bitmap("/img/target.png");
    target.x = 450;
    target.y = 450;
    window.addEventListener('keydown',keyOper, true);
    function keyOper(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 37){
            target.x -= 50;
        }  else if(keyID === 39){
          target.x += 50;
      
        } else if(keyID == 38){
            target.y -= 40;
        }else if(keyID == 40){
            target.y += 40;
        } else if (keyID == 13){
            shootTest();
        }
    }


    var dataMonster = new createjs.SpriteSheet({
        "images": ["/img/monster.png"],
        "frames": {"regX": 0, "height": 93, "count": 4, "regY": 0, "width": 117.5},
        "animations": {
          "fly": [0,3,"fly"]
         
          
        }
      });
      monster= new createjs.Sprite(dataMonster, "fly");  
      monster.x = -100;
      monster.y = 400;
    

      function monsterMove(){
          monster.x += speed;
          if (monster.x > 950){
            monster.x =0;
            monster.y = randomNum(50, 500);
        }
      }

      var dataMonster1 = new createjs.SpriteSheet({
        "images": ["/img/monster1.png"],
        "frames": {"regX": 0, "height": 100, "count": 7, "regY": 0, "width": 100},
        "animations": {
          "walk": [0,7,"walk"]
         
          
        }
      });
      monster1 = new createjs.Sprite(dataMonster1, "walk");  
      monster1 .x = 1500;
      monster1. y = 200;
      function monster1Move(){
        monster1.x -= speed;
        if (monster1.x< 5){
          monster1.x = 900;
          monster1.y = randomNum(50, 500);
      }
    }

    var dataRock = new createjs.SpriteSheet({
        "images": ["/img/rock.png"],
        "frames": {"regX": 0, "height": 70, "count": 8, "regY": 0, "width": 70},
        "animations": {
          "move": [0,7,"move"]
         
          
        }
      });
      rock= new createjs.Sprite(dataRock, "move");  
      rock.x = 400;
      rock.y = -400;
    

      function rockMove(){
            rock.y += speed;
          if (rock.y > 590){
            rock.y =0;
            rock.x = randomNum(50, 900);
        }
      }

      var dataShip = new createjs.SpriteSheet({
        "images": ["/img/shipp.png"],
        "frames": {"regX": 0, "height": 80, "count": 4, "regY": 0, "width": 55.75},
        "animations": {
          "move": [0,3,"move"]
         
          
        }
      });
      ship = new createjs.Sprite(dataShip, "move");  
      ship.x = 700;
      ship.y =  900;
    

      function shipMove(){
            ship.y -= speed;
          if (ship.y < 5){
            ship.y = 600;
            ship.x = randomNum(50, 900);
        }
      }

      var start = new createjs.Bitmap("/img/start.jpg");
      start.x = 430;
      start.y = 250;
      start.addEventListener('click',function(e){
        startSeite.visible = false;  
        playSeite.visible = true;
          var timer = window.setInterval(monsterMove,100);
          var timer1 = window.setInterval(monster1Move,100);
          var timer2 = window.setInterval(rockMove,100);
          var timer3 = window.setInterval(shipMove,100);
          var timercScore= window.setInterval(showScore,500);
       
      });

      var easy = new createjs.Bitmap("/img/easy.jpg");
      easy.x = 430;
      easy.y = 330;
      easy.addEventListener('click',function(e){
          swal("game mode has changed","easy mode");
          speed = 2;
      });
      var medium = new createjs.Bitmap("/img/medium.jpg");
      medium.x = 430;
      medium.y = 390;
      medium.addEventListener('click',function(e){
        swal("game mode has changed","medium mode");
          speed = 5;
      });
      var hard = new createjs.Bitmap("/img/hard.jpg");
      hard.x = 430;
      hard.y = 450;
      hard.addEventListener('click',function(e){
        swal("game mode has changed","hard mode");
          speed = 10;
      });
     
      function randomNum(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }

      function shootTest(){
          if(monster.x < target.x+130 && monster.x +120 > target.x){
              if(monster.y< target.y + 130 && monster.y + 93 > target.y){
             
                monster.visible = false;
                score += 1;
                var newT = window.setTimeout(reshow,5000);
                 }
          }
          if(monster1.x < target.x+130 && monster1.x +100 > target.x){
            if(monster1.y< target.y + 130 && monster1.y + 93 > target.y){
              
              monster1.visible = false;
              score += 1;
              var newT1= window.setTimeout(reshow1,5000);
               }
        }
        if(rock.x < target.x+130 && rock.x +80 > target.x){
            if(rock.y< target.y + 130 && rock.y + 70 > target.y){
             
              rock.visible = false;
              score += 1;
              var newT2= window.setTimeout(reshow2,5000);
               }
        }
        if(ship.x < target.x+130 && ship.x +80 > target.x){
            if(ship.y< target.y + 130 && ship.y + 60 > target.y){
            
              ship.visible = false;
              score += 1;
              var newT2= window.setTimeout(reshow3,5000);
               }
        }
      }

      function reshow(){
          monster.visible = true;
      }

      function reshow1(){
        monster1.visible = true;
    }
    function reshow2(){
        rock.visible = true;
    }
    function reshow3(){
        ship.visible = true;
    }
    stage.addChild(bg);
    startSeite.addChild(start);
    startSeite.addChild(easy);
    startSeite.addChild(medium);
    startSeite.addChild(hard);
    playSeite.addChild(note);
    playSeite.addChild(monster);
    playSeite.addChild(monster1);
    playSeite.addChild(rock);
    playSeite.addChild(ship);
    playSeite.addChild(target);
    stage.addChild(startSeite);
    stage.addChild(playSeite);

 



    


    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}

function update(e){
    stage.update();
}
























