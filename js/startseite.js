
var stage;
function init(){
    canvas = document.getElementById("canvas");
    
   
    
    stage = new createjs.Stage('canvas');
   
    var rect1 = new createjs.Shape();
    rect1.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect1.x = 100;
    rect1.y =50;
    rect1.focus = false;
    rect1.addEventListener("click",function(e){
        window.location.href= "/html/tree.html";
    });

   

    var rect2 = new createjs.Shape();
    rect2.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect2.x = 550;
    rect2.y =50;
    rect2.focus = false;
    rect2.addEventListener("click",function(e){
        window.location.href= "/html/moutain.html";
    });



    var rect3 = new createjs.Shape();
    rect3.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect3.x = 1000;
    rect3.y =50;
    rect3.focus = false;
    rect3.addEventListener("click",function(e){
        window.location.href= "/html/shooting.html";
    });


    var thema = new createjs.Bitmap("/img/lake.png");
    thema.x = 175;
    thema.y = 130;
    thema.addEventListener("click",function(e){
        window.location.href= "/html/tree.html";
    });
    var thema2 = new createjs.Bitmap("/img/fly.png");
    thema2.x = 625;
    thema2.y = 130;
    thema2.addEventListener("click",function(e){
        window.location.href= "/html/moutain.html";
    });
    var thema3 = new createjs.Bitmap("/img/shooting.png");
    thema3.x = 1075;
    thema3.y = 130;
    thema3.addEventListener("click",function(e){
        window.location.href= "/html/shooting.html";
    });
    var bubble= new createjs.Bitmap("/img/bubble.png");
    bubble.x = 580;
    bubble.y = 500;

    var leo= new createjs.Bitmap("/img/leo.png");
    leo.x = 300;
    leo.y = 650;
 
    var dialog = new createjs.Text("Hello, nice to meet you, choose one of these three thema,",  "25px Arial", "black");
    dialog.x = 600;
    dialog.y = 600;
    var dialog2 = new createjs.Text("my brothers will help you do the next steps",  "25px Arial", "black");
    dialog2.x = 650;
    dialog2.y = 640;
  




    stage.addChild(rect1);
    stage.addChild(rect2);
    stage.addChild(rect3);
    stage.addChild(thema);
    stage.addChild(thema2);
    stage.addChild(thema3);
    stage.addChild(bubble);
    stage.addChild(leo);
    stage.addChild(dialog);
    stage.addChild(dialog2);



    


    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}

function update(e){
    stage.update();
}
























