
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
      function gameStart(){
        startSeite.visible = false;  
        playSeite.visible = true;
          var timer = window.setInterval(monsterMove,100);
          var timer1 = window.setInterval(monster1Move,100);
          var timer2 = window.setInterval(rockMove,100);
          var timer3 = window.setInterval(shipMove,100);
          var timercScore= window.setInterval(showScore,500);

      }


      var head = new createjs.Bitmap("/img/spacehead.png");
      head.x = 150;
      head.y =100;
      var note33 = new createjs.Text("Then :", "25px Courier New", "white");
      note33.x = 300;
      note33.y = 380;
      var start = new createjs.Bitmap("/img/start.jpg");
      start.x = 440;
      start.y = 420;
      start.addEventListener('click',function(e){
       gameStart();


       
      });
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
        } else if (keyID == 32){
            shootTest();
        }
    }

/*      window.addEventListener("keydown",function(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 39){
            startFocus();
        }
    });  */
    var outline1 = new createjs.Shape();
      outline1.graphics.beginStroke('yellow').drawRect(0,0,86,30);
      outline1.x= 430;
      outline1.y = 250;
      outline1.visible = false;

   /*   

      function startFocus(){
        outline1.visible = true;
        outline2.visible = false;
        outline3.visible = false;
        outline4.visible = false;
        outline5.visible = false;
        window.addEventListener("keydown",function(e){
            var keyID = e.keyCode ? e.keyCode :e.which;
            if(keyID === 13){
             gameStart();
            } else if(keyID === 39){
                easyFocus();
            } else if(keyID === 37){
                infoFocus();
            }
        });
    }
*/

var note22 = new createjs.Text("Mode waehlen :", "25px Monospace", "white");
note22.x = 300;
note22.y = 270;
      var easy = new createjs.Bitmap("/img/easy.jpg");
      easy.x = 340;
      easy.y = 320;
      easy.addEventListener('click',function(e){
          swal({
            title: 'game changed to easy mode',
            text: 'window closed after 2 second',
            timer: 2000
          }).then(
            function () {},
            function (dismiss) {
              if(dismiss === 'timer'){
                console.log('window closed');
              }
            }
          )
          speed = 2;
      });

      var outline2 = new createjs.Shape();
      outline2.graphics.beginStroke('yellow').drawRect(0,0,86,30);
      outline2.x= 430;
      outline2.y = 330;
      outline2.visible = false;

   /*   function easyFocus(){
        outline2.visible = true;
        outline1.visible = false;
        outline3.visible = false;
        outline4.visible = false;

        window.addEventListener("keydown",function(e){
          var keyID = e.keyCode ? e.keyCode :e.which;
          if(keyID === 13){
            swal("game mode has changed","easy mode");
            speed = 2;
            
          } else if(keyID === 39){
              mediumFocus();
          } 
      });
      }
  */
      var medium = new createjs.Bitmap("/img/medium.jpg");
      medium.x = 440;
      medium.y = 320;
      medium.addEventListener('click',function(e){
        swal({
          title: 'game changed to medium mode',
          text: 'window closed after 2 second',
          timer: 2000
        }).then(
          function () {},
          function (dismiss) {
            if(dismiss === 'timer'){
              console.log('window closed');
            }
          }
        )
          speed = 5;
      });
      var outline3 = new createjs.Shape();
      outline3.graphics.beginStroke('yellow').drawRect(0,0,86,30);
      outline3.x= 430;
      outline3.y = 390;
      outline3.visible = false;

   /*   function mediumFocus(){
        outline3.visible = true;
        outline1.visible = false;
        outline2.visible = false;
        outline4.visible = false;

        window.addEventListener("keydown",function(e){
          var keyID = e.keyCode ? e.keyCode :e.which;
          if(keyID === 13){
            swal("game mode has changed","medium mode");
            speed = 5;
            
          } else if(keyID === 39){
              hardFocus();
          } 
      });
      }
*/

      var hard = new createjs.Bitmap("/img/hard.jpg");
      hard.x = 540;
      hard.y = 320;
      hard.addEventListener('click',function(e){
        swal({
          title: 'game changed to hard mode',
          text: 'window closed after 2 second',
          timer: 2000
        }).then(
          function () {},
          function (dismiss) {
            if(dismiss === 'timer'){
              console.log('window closed');
            }
          }
        )
          speed = 9;
      });
      var outline4 = new createjs.Shape();
      outline4.graphics.beginStroke('yellow').drawRect(0,0,86,30);
      outline4.x= 430;
      outline4.y = 450;
      outline4.visible = false;

  /*    function hardFocus(){
        outline4.visible = true;
        outline1.visible = false;
        outline2.visible = false;
        outline3.visible = false;

        window.addEventListener("keydown",function(e){
          var keyID = e.keyCode ? e.keyCode :e.which;
          if(keyID === 13){
            swal("game mode has changed","hard mode");
            speed = 9;
            
          } else if(keyID === 39){
              infoFocus();
          } 
      });
      }
*/
       var info = new createjs.Bitmap("/img/infooo.png");
       info.x = 950;
       info.y = 520;
       info.addEventListener('click',function(e){
        swal("Spielregeln","Verwenden Sie die Tasten nach oben, unten, links und rechts zu zielen, und durch die Leertaste zu schiessen");
       });

       var outline5 = new createjs.Shape();
       outline5.graphics.beginStroke('yellow').drawRect(0,0,86,30);
       outline5.x= 430;
       outline5.y = 520;
       outline5.visible = false;

   /*    function infoFocus(){
        outline5.visible = true;
        outline1.visible = false;
        outline2.visible = false;
        outline3.visible = false;
        outline4.visible = false;
        window.addEventListener("keydown",function(e){
          var keyID = e.keyCode ? e.keyCode :e.which;
          if(keyID === 13){
            swal("Spielregeln","Verwenden Sie die Tasten nach oben, unten, links und rechts zu zielen, und durch die Leertaste zu schiessen");
            
          } else if(keyID === 39){
              startFocus();
          } 
      });
      }

*/
       var back = new createjs.Bitmap("/img/backk.png");
    back.x = 10;
    back.y = 10;
    back.addEventListener("click",function(e){
       window.location.href= "/index.html";
    });
    var back1 = new createjs.Bitmap("/img/backk.png");
    back1.x = 10;
    back1.y = 10;
    back1.addEventListener("click",function(e){
      location.reload();
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
// keyboard
   var outline = new createjs.Shape();
    outline.graphics.beginStroke('#696969').drawRect(0,0,252,601);
    outline.x= 1050;
    outline.y = 0;
   
    var up = new createjs.Shape();
    up.graphics.beginFill("#FFFFE0").drawRect(0, 0, 250,120);
    up.x = 1051;
    up.y = 1;
    up.addEventListener("click",function(e){
      target.y -= 40;
    });
    var down = new createjs.Shape();
    down.graphics.beginFill("#EEE8AA").drawRect(0, 0, 250,120);
    down.x = 1051;
    down.y = 361;
    down.addEventListener("click",function(e){
      target.y += 40;
    });


    var shoot = new createjs.Shape();
    shoot.graphics.beginFill("#F0E68C").drawRect(0, 0, 250,119);
    shoot.x = 1051;
    shoot.y = 481;
    shoot.addEventListener("click",function(e){
      shootTest();
    });
    var left = new createjs.Shape();
    left.graphics.beginFill("#FFEFD5").drawRect(0, 0, 125,240);
    left.x = 1051;
    left.y = 121;
    left.addEventListener("click",function(e){
      target.x -= 50;
    });
    var right = new createjs.Shape();
    right.graphics.beginFill("#FFDAB9").drawRect(0, 0, 125,240);
    right.x = 1176;
    right.y = 121;
    right.addEventListener("click",function(e){
      target.x += 50;
    });

    
    var arrowU = new createjs.Bitmap("/img/uparrow.png");
    arrowU.x = 1143;
    arrowU.y = 30;

    var arrowD = new createjs.Bitmap("/img/downarrow.png");
    arrowD.x = 1143;
    arrowD.y = 390;

    var arrowL = new createjs.Bitmap("/img/leftarrow.png");
    arrowL.x = 1070;
    arrowL.y = 220;

    var arrowR = new createjs.Bitmap("/img/rightarrow.png");
    arrowR.x = 1220;
    arrowR.y = 220;
   
    var txt = new createjs.Text("shoot", "25px Arial", "white");
    txt.x = 1140;
    txt.y = 540;






    stage.addChild(bg);
    startSeite.addChild(head);
    startSeite.addChild(back);
    startSeite.addChild(note22);
    startSeite.addChild(note33);
    startSeite.addChild(start);
    startSeite.addChild(outline1);
    startSeite.addChild(easy);
    startSeite.addChild(outline2);
    startSeite.addChild(medium);
    startSeite.addChild(outline3);
    startSeite.addChild(hard);
    startSeite.addChild(outline4);
    startSeite.addChild(info);
    startSeite.addChild(outline5);
    playSeite.addChild(note);
    playSeite.addChild(back1);
    playSeite.addChild(monster);
    playSeite.addChild(monster1);
    playSeite.addChild(rock);
    playSeite.addChild(ship);
    playSeite.addChild(target);
    stage.addChild(startSeite);
    stage.addChild(playSeite);

    playSeite.addChild(outline);
    playSeite.addChild(up);
    playSeite.addChild(down);
    playSeite.addChild(left);
    playSeite.addChild(shoot);
    playSeite.addChild(right);
    playSeite.addChild(arrowU);
    playSeite.addChild(arrowD); 
    playSeite.addChild(arrowR);
    playSeite.addChild(arrowL); 
    playSeite.addChild(txt); 



    


    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}

function update(e){
    stage.update();
}
























