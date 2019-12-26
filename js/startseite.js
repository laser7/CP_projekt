
var stage;
function init(){
    canvas = document.getElementById("canvas");
    
   
    
    stage = new createjs.Stage('canvas');
   
    var rect1 = new createjs.Shape();
    rect1.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect1.x = 100;
    rect1.y =50;

    rect1.addEventListener("click",function(e){
        window.location.href= "/html/tree.html";
    });

   

    var rect2 = new createjs.Shape();
    rect2.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect2.x = 550;
    rect2.y =50;
   
    rect2.addEventListener("click",function(e){
        window.location.href= "/html/moutain.html";
    });



    var rect3 = new createjs.Shape();
    rect3.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect3.x = 1000;
    rect3.y =50;

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
  
    var outline1 = new createjs.Shape();
    outline1.graphics.beginStroke('yellow').drawRect(0,0,400,400);
    outline1.x= 100;
    outline1.y = 50;
    outline1.visible = false;
    function rect1Focus(){
        outline1.visible = true;
        outline2.visible = false;
        outline3.visible = false;
       
        window.addEventListener("keydown",function(e){
            var keyID = e.keyCode ? e.keyCode :e.which;
            if(keyID === 13){
                window.location.href= "/html/tree.html";
            } else if(keyID === 39){
                rect2Focus();
            } 
        });
    }
    var outline2 = new createjs.Shape();
    outline2.graphics.beginStroke('yellow').drawRect(0,0,400,400);
    outline2.x= 550;
    outline2.y = 50;
    outline2.visible = false;
    function rect2Focus(){
        outline1.visible = false;
        outline3.visible = false;
        outline2.visible = true;
        window.addEventListener("keydown",function(e){
            var keyID = e.keyCode ? e.keyCode :e.which;
            if(keyID === 13){
                window.location.href= "/html/moutain.html";
            } else if(keyID === 39){
                rect3Focus();
            } else if(keyID === 37){
                rect1Focus();
            }
        });
    }
    var outline3 = new createjs.Shape();
    outline3.graphics.beginStroke('yellow').drawRect(0,0,400,400);
    outline3.x= 1000;
    outline3.y = 50;
    outline3.visible = false;
    function rect3Focus(){
        outline3.visible = true;
        outline1.visible = false;
        outline2.visible = false;
        window.addEventListener("keydown",function(e){
            var keyID = e.keyCode ? e.keyCode :e.which;
            if(keyID === 13){
                window.location.href= "/html/shooting.html";
            } else if(keyID === 39){
                rect1Focus();
            } else if(keyID === 37){
                rect2Focus();
            }
        });
    }
    window.addEventListener("keydown",function(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 39){
            rect1Focus();
        }
    });
   
    stage.addChild(rect1);
    stage.addChild(outline1);
    stage.addChild(rect2);
    stage.addChild(outline2);
    stage.addChild(rect3);
    stage.addChild(outline3);
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
























