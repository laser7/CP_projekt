
    var stage;
    function init(){
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage("canvas");
        var startSeite = new createjs.Container();
        var playSeite = new createjs.Container();

     //   startseite und Seite wechseln

     var t = new createjs.Bitmap("/img/raphael.png");
     t.x = 1050;
     t.y = 450;
     t.addEventListener("click",function(e){
    swal("Spielregeln", "Klicken Sie mit der linken Maustaste/ Leertaste der Tastatur, um die Flughöhe des Sonic zu steuern. Vermeiden Sie Hindernisse während des Fluges. Ich wünsche die Highscores im Spiel!")
  });
 
          var bg = new createjs.Bitmap("/img/bg20.png");
         bg.x = 0;
         bg.y = 0;
   
        var bottom = new createjs.Bitmap("/img/bg21.png");
        bottom.x = 0;
        bottom.y = 450;

        var bottom2 = new createjs.Bitmap("/img/bg21.png");
        bottom2.x = 1300;
        bottom2.y = 450;
        
      var bottomTimer = window.setInterval(move,50);
        function move(){
        bottom.x = bottom.x -2;
        bottom2.x = bottom2.x -2 ;
    
        if(bottom.x == -1300){
          bottom.x = 1300;
        }
        if(bottom2.x == -1300){
          bottom2.x = 1300;
        }
      }
              
      var back = new createjs.Bitmap("/img/left.png");
      back.x = 10;
      back.y = 10;
      back.addEventListener("click",function(e){
         window.location.href= "/index.html";
      });
      var dataSonic = new createjs.SpriteSheet({
        "images": ["/img/sonic.png"],
        "frames": {"regX": 0, "height": 64, "count": 9, "regY": 0, "width": 64},
        "animations": {
          "up": [0,2,"up"],
          "straight": [3, 5, "straight"],
          "down": [6, 8, "down"]
        }
      });
      sonicHead = new createjs.Sprite(dataSonic, "straight");  
      sonicHead.x = 420;
      sonicHead.y = 190;
      var head = new createjs.Bitmap("/img/sonichead1.png");
      head.x = 150;
      head.y = 60;
      var note22 = new createjs.Text("Wählen Sie zuerst eine Mode aus :", "25px Monospace", "black");
      note22.x = 350;
      note22.y = 300;
        var start = new createjs.Bitmap("/img/start.jpg");
        start.x = 550;
        start.y = 450;
        start.addEventListener("click",function(e){
        
       
        stage.removeChild(startSeite);
        
     
       playSeite.addChild(sonicN);
    
       stage.addChild(playSeite);
       stage.addChild(pipe1);
       stage.addChild(pipe2);
       stage.addChild(pipe3);  
       
       if(einfach == 0 && schwer == 1){
        var flyTimer = window.setInterval(fly,24);
        var pipeTimer = window.setInterval(pipeMove,60);
       } else if ( einfach ==1 && schwer == 0){
        var flyTimer = window.setInterval(fly,40);
        var pipeTimer = window.setInterval(pipeMove,100);
       } 
      
       var scoreTimer = window.setInterval(showScore,50);
    //   var crashTimer = window.setInterval(crashTest,60);
     
      
      
       
     });

  
 
    
    //   Sonic Teil
      
     
      
        
        var dataSonic = new createjs.SpriteSheet({
          "images": ["/img/sonic.png"],
          "frames": {"regX": 0, "height": 64, "count": 9, "regY": 0, "width": 64},
          "animations": {
            "up": [0,2,"up"],
            "straight": [3, 5, "straight"],
            "down": [6, 8, "down"]
          }
        });
        sonicN = new createjs.Sprite(dataSonic, "straight");  
        sonicN.x = 200;
        
        sonicN.speed = 0;
        
        window.addEventListener('keydown',keyOper, true);

    function keyOper(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 32){
           sonicN.speed -=80;
      
           
           crashTest(pipeUp,pipeDown);
           crashTest(pipeUp2,pipeDown2);
           crashTest(pipeUp3,pipeDown3);
           skipTest(pipeUp);
           skipTest(pipeUp2);
           skipTest(pipeUp3);
        } }

        window.addEventListener('click', mausOper, true);

        function mausOper(){
          sonicN.speed -=80;
          crashTest(pipeUp,pipeDown);
          crashTest(pipeUp2,pipeDown2);
          crashTest(pipeUp3,pipeDown3);
          skipTest(pipeUp);
          skipTest(pipeUp2);
          skipTest(pipeUp3);
        }

        function fly(){
          sonicN.y = 350;
          sonicN.y+= sonicN.speed;

          sonicN.speed+=4;
          crashTest();
          if(sonicN.y < 1){
            speed = 6;
          }
          
       
        }
        var deadSeite = new createjs.Container();
        deadSeite.addChild(gameover);
        deadSeite.addChild(restart);
    
        deadSeite.visible = false;
        function dead(){
          sonicN.alive = false;
          pipe1.visible = false;
          pipe2.visible = false;
          pipe3.visible = false;
          playSeite.visible = false;
          deadSeite.visible = true;

        }
        function reload(){
          location.reload();
      }
        var gameover = new createjs.Bitmap("/img/gameover.png");
        gameover.x = 450;
        gameover.y = 100;
        var restart = new createjs.Bitmap("/img/refresh.png");
        restart.x = 540;
        restart.y = 400;
        restart.addEventListener('click',reload);


      

// pipe Teil
    var pipe1 = new createjs.Container();
    var pipe2 = new createjs.Container();
    var pipe3 = new createjs.Container();
   
   

      var px = 500;
      var px2 = 900;
      var px3 = 1300;
     // var pyUp, pyDown;
      var upHeight = Math.floor(Math.random()*60);
      var downHeight = (60 - upHeight)*3;
     // pyUp = upHeight*3 + pipeUp.height;
     // pyDown = 540- downHeight;


     var upHeight2 = Math.floor(Math.random()*60);
     var downHeight2 = (60 - upHeight2)*3;
     var upHeight3 = Math.floor(Math.random()*60);
     var downHeight3 = (60 - upHeight3)*3;

      var pipeUp = new createjs.Bitmap("/img/pipes-up.png");  // nach unten
      pipeUp.hadskipped = false;
      pipeUp.skipchange = false;
      var pipeUp2 = new createjs.Bitmap("/img/pipes-up.png"); 
      pipeUp2.hadskipped = false;
      pipeUp2.skipchange = false;
      var pipeUp3 = new createjs.Bitmap("/img/pipes-up.png"); 
      pipeUp3.hadskipped = false;
      pipeUp3.skipchange = false;
     
      
      var pipeDown = new createjs.Bitmap("/img/pipes-down.png"); 
      pipeDown.hadskipped = false;
      pipeDown.skipchange = false;
      var pipeDown2 = new createjs.Bitmap("/img/pipes-down.png"); 
      pipeDown2.hadskipped = false;
      pipeDown2.skipchange = false;
      var pipeDown3 = new createjs.Bitmap("/img/pipes-down.png"); 
      pipeDown3.hadskipped = false;
      pipeDown3.skipchange = false;
 

     
      // pipe up body
     var pipeBody = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody1 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody2 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody3 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody4 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody5 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody6 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody7 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody8 = new createjs.Bitmap("/img/pipesbody.png"); 
     // pipe down body
     var pipeBody9 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody10 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody11 = new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody12= new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody13= new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody14= new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody15= new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody16= new createjs.Bitmap("/img/pipesbody.png"); 
     var pipeBody17= new createjs.Bitmap("/img/pipesbody.png"); 

      
      function newRandom(){
        var a =  Math.floor(Math.random()*60);
        upHeight = a;
        downHeight = (60 - upHeight)*3;
        }
        function newRandom2(){
          var b =  Math.floor(Math.random()*60);
          upHeight2 = b;
          downHeight2 = (60 - upHeight2)*3;
        }
        function newRandom3(){
          var c =  Math.floor(Math.random()*60);
          upHeight3 = c;
          downHeight3 = (60 - upHeight3)*3;
        }

     function pipeMove(){
    
    
       px -= 20;
       if(px<0){
        var numTimer = window.setTimeout(newRandom,10);
        px = 1300;
        
       // newRandom();
       }
       px2 -= 20;
       if(px2<0){
        var numTimer2 = window.setTimeout(newRandom2,10);
         px2 = 1300;
       }
       px3 -= 20;
       if(px3<0){
        var numTimer3 = window.setTimeout(newRandom3,10);
         px3 = 1300;
       }
    
          pipeUp.x = px;
          pipeUp.y = upHeight*3;
        pipeUp2.x = px2;
          pipeUp2.y = upHeight2*3;
          pipeUp3.x = px3;
          pipeUp3.y = upHeight3*3;
     
          pipeDown.x = px;
          pipeDown.y = 580 - downHeight;
          pipeDown2.x = px2;
          pipeDown2.y = 580 - downHeight2;
          pipeDown3.x = px3;
          pipeDown3.y = 580 - downHeight3;


           //up body
          pipeBody.x = px;
          pipeBody.y =  0;
          pipeBody1.x = px;
          pipeBody1.y = upHeight;
          pipeBody1.visible = false;
          pipeBody2.x =px;
          pipeBody2.y = upHeight*2;
          pipeBody2.visible = false;
          if(upHeight*3>58){
            pipeBody1.visible = true;
            pipeBody2.visible = true;
          } 

          pipeBody3.x = px2;
          pipeBody3.y =  0;
          pipeBody4.x = px2;
          pipeBody4.y = upHeight2;
          pipeBody4.visible = false;
          pipeBody5.x =px2;
          pipeBody5.y = upHeight2*2;
          pipeBody5.visible = false;
          if(upHeight2*3>58){
            pipeBody4.visible = true;
            pipeBody5.visible = true;
          } 

          pipeBody6.x = px3;
          pipeBody6.y =  0;
          pipeBody7.x = px3;
          pipeBody7.y = upHeight3;
          pipeBody7.visible = false;
          pipeBody8.x =px3;
          pipeBody8.y = upHeight3*2;
          pipeBody8.visible = false;
          if(upHeight3*3>58){
            pipeBody7.visible = true;
            pipeBody8.visible = true;
          } 
          // down body

          pipeBody9.x =px;
          pipeBody9.y = 580-downHeight+90;

          pipeBody10.x = px;
          pipeBody10.y = 580-downHeight+148;
          pipeBody10.visible = false;

          pipeBody11.x = px;
          pipeBody11.y  = 580-58;
          pipeBody11.visible = false;

          if(580-downHeight+90<580){
            pipeBody10.visible = true;
            pipeBody11.visible = true;
          }

          pipeBody12.x =px2;
          pipeBody12.y = 580-downHeight2+90;

          pipeBody13.x = px2;
          pipeBody13.y = 580-downHeight2+148;
          pipeBody13.visible = false;

          pipeBody14.x = px2;
          pipeBody14.y  = 580-58;
          pipeBody14.visible = false;

          if(580-downHeight2+90<580){
            pipeBody13.visible = true;
            pipeBody14.visible = true;
          }

          pipeBody15.x =px3;
          pipeBody15.y = 580-downHeight3+90;

          pipeBody16.x = px3;
          pipeBody16.y = 580-downHeight3+148;
          pipeBody16.visible = false;

          pipeBody17.x = px3;
          pipeBody17.y  = 580-58;
          pipeBody17.visible = false;

          if(580-downHeight3+90<580){
            pipeBody16.visible = true;
            pipeBody17.visible = true;
          }

       crashTest(pipeUp,pipeDown);
       crashTest(pipeUp2,pipeDown2);
       crashTest(pipeUp3,pipeDown3);
       skipTest(pipeUp);
       skipTest(pipeUp2);
       skipTest(pipeUp3);

       // shouw the score 
 
     
        }
        var score = 0;
        var note = new createjs.Text("score: 0", "25px Monospace", "black");
        note.x =100;
        note.y = 100;
        function showScore(){
          
          note.text = "Score: "+Math.floor(score/8);
       
        }
        function crashTest(a,b){
          if((sonicN.x+ 30 > a.x)&&(sonicN.x< a.x + 60)){
            if((sonicN.y<a.y+60)|| (sonicN.y+30 > b.y)){
             dead();
            } else if(sonicN.y > 600){
              dead();
            } else if(sonic.y < 0){
              dead();
            }
          }
        }
        function skipTest(d){
         var v = 0;
          if(sonicN.x > d.x + 60){
            d.hadskipped = true;
            if(!d.skipchange && d.hadskipped){
              
              score += 1;
          //    d.skipchange = true;
            }

          }
        }

  // mode wahlen

  var note33 = new createjs.Text("Dann :", "25px Monospace", "black");
  note33.x =370;
  note33.y = 410;

  var einfach, schwer = 0;
  var easy = new createjs.Bitmap("/img/easy.jpg");
  easy.x = 550;
  easy.y = 350;
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

   einfach = 1;
   schwer = 0;
    
  });
  
  var hard = new createjs.Bitmap("/img/hard.jpg");
  hard.x = 650;
  hard.y = 350;
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
    einfach = 0;
    schwer = 1;
  });
        
        stage.addChild(bg);
        stage.addChild(bottom);
        stage.addChild(bottom2);
        stage.addChild(back);
        startSeite.addChild(start);
        startSeite.addChild(note22);
        startSeite.addChild(note33);
        startSeite.addChild(easy);
        startSeite.addChild(hard);
        startSeite.addChild(head);
        startSeite.addChild(sonicHead);
        startSeite.addChild(t);
        stage.addChild(startSeite);
        playSeite.addChild(note);
    
      pipe1.addChild(pipeUp);
      pipe1.addChild(pipeDown);
      pipe1.addChild(pipeBody);
      pipe1.addChild(pipeBody1);
      pipe1.addChild(pipeBody2);
      pipe1.addChild(pipeBody9);
      pipe1.addChild(pipeBody10);
      pipe1.addChild(pipeBody11);
      pipe2.addChild(pipeUp2);
      pipe2.addChild(pipeDown2);
      pipe2.addChild(pipeBody3);
      pipe2.addChild(pipeBody4);
      pipe2.addChild(pipeBody5);
      pipe2.addChild(pipeBody12);
      pipe2.addChild(pipeBody13);
      pipe2.addChild(pipeBody14);
      pipe3.addChild(pipeUp3);
      pipe3.addChild(pipeDown3);
      pipe3.addChild(pipeBody6);
      pipe3.addChild(pipeBody7);
      pipe3.addChild(pipeBody8);
      pipe3.addChild(pipeBody15);
      pipe3.addChild(pipeBody16);
      pipe3.addChild(pipeBody17);
    
    //   pipe2.addChild(pipeBody2);
 //     stage.addChild(deadSeite);
      deadSeite.addChild(gameover);
      deadSeite.addChild(restart);
      stage.addChild(deadSeite);
       

      //  playSeite.addChild(sonicN);
     
       // stage.addChild(playSeite);

       

        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick',tick);
 

    }
 


    function tick(event){
      
      stage.update(event);
    }
    
(function(){
  new init();
}(init));
 