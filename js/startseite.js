// Ö/ö  Ü/ü Ä/ä ß
var stage;
function init(){
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage('canvas');

    var bg = new createjs.Bitmap("/img/whitebg.jpg");
    bg.x = 0;
    bg.y = 0;
   
    var rect1 = new createjs.Shape();
    rect1.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect1.x = 100;
    rect1.y =50;

    rect1.addEventListener("click",function(e){
        Seite.visible = false;
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text= "Klicken Sie mit der linken Maustaste, um Ereignisse zu untersuchen, die in der Szene ausgelöst werden können!             Hinweise: Auto, Baum, Hase, Wolke, lesen";
        button.addEventListener('click',function(e){
            jumpToTree();
         });
        setTimeout(jumpToTree,10000);
    });

   

    var rect2 = new createjs.Shape();
    rect2.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect2.x = 550;
    rect2.y =50;
   
    rect2.addEventListener("click",function(e){
        Seite.visible = false;
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text = "Vorsicht! Zuerst Mode waehlen und dann starten. Klicken Sie mit der linken Maustaste/ Leertaste der Tastatur, um die Flughöhe des Sonic zu steuern. Vermeiden Sie Hindernisse während des Fluges. Ich wünsche die Highscores im Spiel!";
        button.addEventListener('click',function(e){
            jumpToSonic();
         });
        setTimeout(jumpToSonic,10000);
    });



    var rect3 = new createjs.Shape();
    rect3.graphics.beginFill(" #ebf5fb ").drawRect(0, 0, 400, 400);
    rect3.x = 1000;
    rect3.y =50;

    rect3.addEventListener("click",function(e){
        Seite.visible = false;
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text = "Vorsicht! Zuerst Mode waehlen und dann starten. Verwenden Sie die Tasten nach oben, unten, links und rechts zu zielen, und durch die Leertaste zu schiessen";
        button.addEventListener('click',function(e){
            jumpToShooting();
         });
        setTimeout(jumpToShooting,10000);
    });


    // jump function
    function jumpToShooting(){
        window.location.href= "/html/shooting.html";
    }

    function jumpToTree(){
        window.location.href= "/html/tree.html";
    }
    function jumpToSonic(){
        window.location.href= "/html/moutain.html";
    }

    // thema setting

    var thema = new createjs.Bitmap("/img/lake.png");
    thema.x = 175;
    thema.y = 130;
    thema.addEventListener("click",function(e){
        Seite.visible = false;
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text= "Klicken Sie mit der linken Maustaste, um Ereignisse zu untersuchen, die in der Szene ausgelöst werden können!             Hinweise: Auto, Baum, Hase, Wolke, lesen";
        button.addEventListener('click',function(e){
            jumpToTree();
         });
        setTimeout(jumpToTree,10000);
    });
    var thema2 = new createjs.Bitmap("/img/fly.png");
    thema2.x = 625;
    thema2.y = 130;
    thema2.addEventListener("click",function(e){
        Seite.visible = false;
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text ="Vorsicht! Zuerst Mode waehlen und dann starten. Klicken Sie mit der linken Maustaste/ Leertaste der Tastatur, um die Flughöhe des Sonic zu steuern. Vermeiden Sie Hindernisse während des Fluges. Ich wünsche die Highscores im Spiel!";
        button.addEventListener('click',function(e){
            jumpToSonic();
         });
        setTimeout(jumpToSonic,10000);
    });
    var thema3 = new createjs.Bitmap("/img/shooting.png");
    thema3.x = 1075;
    thema3.y = 130;
    thema3.addEventListener("click",function(e){
       
        Seite.visible = false;
       
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text = " Vorsicht! Zuerst Mode waehlen und dann starten. Verwenden Sie die Tasten nach oben, unten, links und rechts zu zielen, und durch die Leertaste zu schiessen"
        
        button.addEventListener('click',function(e){
           jumpToShooting();
        });
        setTimeout(jumpToShooting,10000);
        
   
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
  

    // keyboard Navigation 
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

    // normal seite
    var Seite = new createjs.Container;
    // while loading 
    var loadSeite = new createjs.Container;

    var loadbg = new createjs.Bitmap("/img/bg99.svg");
    loadbg.x = 0;
    loadbg.y = 0;
    var logo = new createjs.Bitmap("/img/explore.png");
    logo.x = 30;
    logo.y = 700;

    function logoMove(){
        logo.x += 75;
       

    }

    var num = 0;
  
    var button = new createjs.Bitmap("/img/box.png");
    
    button.x = 1070;
    button.y = 580;
 
    var buttonText =  new createjs.Text("Alles klar und springen", "23px Monospace","#707376");
    buttonText.x = 1090;
    buttonText.y = 595;
    buttonText.lineWidth = 230;
    buttonText.lineHeight = 35;

    var load = new createjs.Text("0", "25px Monospace","white");
    load.x = -200;
    load.y = 735;

    var loadRect =  new createjs.Shape();
    loadRect.graphics.beginFill("#4D4948").drawRect(0, 0, 1500, 80);
    loadRect.x = -1500;
    loadRect.y = 700;
   
    function loadMove(){
        load.x += 75;
        num+=5;
        loadRect.x+= 75;
        load.text = "loading..."+ num + "%";
       
    }
    var note = new createjs.Text("Spielregeln", "50px Times","black");
    note.x = 600;
    note.y = 170;
    var inhalt = new createjs.Text("inhalt", "25px Monospace","black");
    inhalt.x = 300;
    inhalt.y = 340;
    inhalt.lineWidth = 1000;
    inhalt.lineHeight = 50;

    
    loadSeite.addChild(loadbg);
    loadSeite.addChild(logo);
    loadSeite.addChild(loadRect);
    loadSeite.addChild(load);
   
    loadSeite.addChild(note);
    loadSeite.addChild(inhalt);
    loadSeite.addChild(button);
    loadSeite.addChild(buttonText);
    loadSeite.visible = false;

    Seite.addChild(bg);
    Seite.addChild(rect1);
    Seite.addChild(outline1);
    Seite.addChild(rect2);
    Seite.addChild(outline2);
    Seite.addChild(rect3);
    Seite.addChild(outline3);
    Seite.addChild(thema);
    Seite.addChild(thema2);
    Seite.addChild(thema3);
    Seite.addChild(bubble);
    Seite.addChild(leo);
    Seite.addChild(dialog);
    Seite.addChild(dialog2);


    stage.addChild(Seite);
    stage.addChild(loadSeite);

    


    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}

function update(e){
    stage.update();
}
























