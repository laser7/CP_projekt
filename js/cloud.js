var stage;
function init(){
    stage = new createjs.Stage("canvas");
   
    var img = new Image();
    img.src = "/img/shopright.png";
    var shop = new createjs.Bitmap(img);
    shop.x = 400;
    shop.y = 650;
   window.addEventListener('keydown',keyOper, true);
    function keyOper(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 37){
            img.src = "/img/shopleft.png";
            shop.x -= 50;
           
        
        }  else if(keyID === 39){
            img.src = "/img/shopright.png";
            shop.x += 50;
       
 
        } 
    }

    var start = new createjs.Bitmap("/img/start1.png");
    start.x = 1290;
    start.y = 50;
    start.addEventListener('click',function(e){
        var timer = window.setInterval(candy1Move,500);
        var timer1 = window.setInterval(candyMove,500);
        var timer2 = window.setInterval(candy2Move,500);
        var timer3 = window.setInterval(candy3Move,500);
        var timerB = window.setInterval(bombMove,500);
        var timerB1 = window.setInterval(bomb1Move,500);
        var timerc = window.setInterval(crashTest,500);
        var timercScore= window.setInterval(showScore,500);
     
    });  


    var imgC = new Image();
    imgC.src = "/img/candy.png";
     var candy1 = new createjs.Bitmap(imgC);
     candy1.x = randomNum(20,1200);
     candy1.y = 0;
     function candy1Move(){

        candy1.y += 30;
        if(candy1.y>700){
            candy1.y = 0;
            candy1.x = randomNum(20,1200);
        }
    }

    var imgC1 = new Image();
    imgC1.src = "/img/candy1.png";
    var candy = new createjs.Bitmap(imgC1);
    candy.x = randomNum(20,1200);
    candy.y = -600;

    function candyMove(){

        candy.y += 30;
        if(candy.y>700){
            candy.y = 0;
            candy.x = randomNum(20,1200);
        }
    }
    var imgC2 = new Image();
    imgC2.src = "/img/candy2.png";
    var candy2 = new createjs.Bitmap(imgC2);
    candy2.x = randomNum(20,1200);
    candy2.y = -300;

    function candy2Move(){

        candy2.y += 30;
        if(candy2.y>700){
            candy2.y = 0;
            candy2.x = randomNum(20,1200);
        }
    }
    var imgC3 = new Image();
    imgC3.src = "/img/candy3.png";
    var candy3 = new createjs.Bitmap(imgC3);
    candy3.x = randomNum(20,1200);
    candy3.y = 0;

    function candy3Move(){

        candy3.y += 30;
        if(candy3.y>700){
            candy3.y = 0;
            candy3.x = randomNum(20,1200);
        }
    }

    // bomb



 // bumb
   
    var bomb = new createjs.Bitmap("/img/bomb.png");
    bomb.x = randomNum(20,1200);
    bomb.y = -100;

    function bombMove(){
        bomb.y += 30;
        if (bomb.y > 700){
            bomb.y =0;
            bomb.x = randomNum(20, 1200);
        }
    }

    var bomb1 = new createjs.Bitmap("/img/bomb1.png");
    bomb1.x = randomNum(20,1200);
    bomb1.y = -400;

    function bomb1Move(){
        bomb1.y += 30;
        if (bomb1.y > 700){
            bomb1.y =0;
            bomb1.x = randomNum(20, 1200);
        }
    }



    var score = 0;

    function crashTest(){
        if(shop.x + 100 > candy.x && candy.x + 50 > shop.x){
            if( candy.y < shop.y+100  && candy.y + 50 > shop.y ){
                score+=1;
                candy.rotate = 90;
               }
        }
        if(shop.x + 100 > candy1.x && candy1.x + 50 > shop.x){
            if( candy1.y < shop.y+100  && candy1.y + 50 > shop.y ){
                score+=1;
               
               }
        }
        if(shop.x + 100 > candy2.x && candy2.x + 50 > shop.x){
            if( candy2.y < shop.y+100  && candy2.y + 50 > shop.y ){
                score+=1;
               
               }
        }
        if(shop.x + 100 > candy3.x && candy3.x + 50 > shop.x){
            if( candy3.y < shop.y+100  && candy3.y + 50 > shop.y ){
                score+=1;
               
               }
        }
        if(shop.x + 100 > bomb.x && bomb.x + 50 > shop.x){
            if( bomb.y < shop.y+100  && bomb.y + 50 > shop.y ){
                score-=3;
               
               }
        }
        if(shop.x + 100 > bomb1.x && bomb1.x + 50 > shop.x){
            if( bomb1.y < shop.y+100  && bomb1.y + 50 > shop.y ){
                score-=3;
               
               }
        }
    }

    var back = new createjs.Bitmap("/img/left.png");
    back.x = 1300;
    back.y = 150;
    back.addEventListener("click",function(e){
       window.location.href= "/html/tree.html";
    });
   
    var note = new createjs.Text("score: 0", "25px Arial", "black");
    note.x = 1300;
    note.y = 500;
    function showScore(){
      
      note.text = "Score: "+ Math.floor(score/3);
   
    }
    
    
    function randomNum(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }

    var info = new createjs.Bitmap("/img/information.png");
    info.x =1300;
    info.y = 300;
    info.addEventListener("click",function(e){
        swal("SpielRegeln","avoid the bombs and get more score!");
    });

    stage.addChild(start);   
    stage.addChild(shop);
  
   stage.addChild(candy1);
     stage.addChild(candy);
    stage.addChild(candy2);
    stage.addChild(candy3);
    stage.addChild(bomb1);
    stage.addChild(bomb);
    stage.addChild(note); 
    stage.addChild(back);
    stage.addChild(info);  

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}


function update(event){
    stage.update();
}


