
  //   Ü ẞ Ö ä ö Ä ü 
  
  var stage;
    function init(){
        stage = new createjs.Stage("canvas");
        
        var bg = new createjs.Bitmap("/img/bg57.jpg");
        bg.x = 0;
        bg.y = 0;
        var donate = new createjs.Bitmap("/img/lpdonate.png");
        donate.x = 1450;
        donate.y = 720;
        donate.addEventListener("click",function(e){
            swal("Spielregeln", "Klicken Sie mit der linken Maustaste, um Ereignisse zu untersuchen, die in der Szene ausgelöst werden können!");
          });
       
        var tree = new createjs.Bitmap("/img/lptree.png");
        tree.x =50;
        tree.y = 500;
        tree.addEventListener("click",function(e){
            swal("Wieviel Apfel haben Sie gesehen?", {
                buttons:{
                    less: {
                        text: test-2,
                        value: "less",
                    },
                    right: {
                        text: test,
                        value: "right",
                    },
                    more:{
                        text: test+1,
                        value:"more",
                    },
                },
            })
            .then((value) =>{
                switch(value){
                    case "less" :
                        swal("schaust du noch mal genau an?");
                        break;
                    case "right":
                        swal("super gemacht!", "du hast richtig geantwortet","success");
                       setTimeout(back,5000);
                        break;
                    default:
                        swal("schaust du noch mal genau an?");
                }
            })
        });
        var tree1 = new createjs.Bitmap("/img/lptree1.png");
        tree1.x = 900;
        tree1.y = 400;
        tree1.addEventListener("click",function(e){
            swal("Wieviel Apfel haben Sie gesehen?", {
                buttons:{
                    less: {
                        text: test-2,
                        value: "less",
                    },
                    right: {
                        text: test,
                        value: "right",
                    },
                    more:{
                        text: test+1,
                        value:"more",
                    },
                },
            })
            .then((value) =>{
                switch(value){
                    case "less" :
                        swal("schaust du noch mal genau an?");
                        break;
                    case "right":
                        swal("super gemacht!", "du hast richtig geantwortet","success");
                       setTimeout(back,5000);
                        break;
                    default:
                        swal("schaust du noch mal genau an?");
                }
            })
        });
        var tree2 = new createjs.Bitmap("/img/lptree1.png");
        tree2.x = 1050;
        tree2.y = 430;
        tree2.addEventListener("click",function(e){
            swal("Wieviel Apfel haben Sie gesehen?", {
                buttons:{
                    less: {
                        text: test-2,
                        value: "less",
                    },
                    right: {
                        text: test,
                        value: "right",
                    },
                    more:{
                        text: test+1,
                        value:"more",
                    },
                },
            })
            .then((value) =>{
                switch(value){
                    case "less" :
                        swal("schaust du noch mal genau an?");
                        break;
                    case "right":
                        swal("super gemacht!", "du hast richtig geantwortet","success");
                       setTimeout(back,5000);
                        break;
                    default:
                        swal("schaust du noch mal genau an?");
                }
            })
        });
        var tree3 = new createjs.Bitmap("/img/lptree1.png");
        tree3.x = 600;
        tree3.y = 440;
        tree3.addEventListener("click",function(e){
            swal(" Q1 : Wieviel Apfel haben Sie gesehen?", {
                buttons:{
                    less: {
                        text: test-2,
                        value: "less",
                    },
                    right: {
                        text: test,
                        value: "right",
                    },
                    more:{
                        text: test+1,
                        value:"more",
                    },
                },
            })
            .then((value) =>{
                switch(value){
                    case "less" :
                        swal("schaust du noch mal genau an?");
                        break;
                    case "right":
                        swal("super gemacht!", "du hast richtig geantwortet","success");
                       setTimeout(back,5000);
                        break;
                    default:
                        swal("schaust du noch mal genau an?");
                }
            })
        });

        var arr1 =[true,false];
        var apple = new createjs.Bitmap("/img/lpapple1.png");
        apple.x = 160;
        apple.y = 620;
       var a = arr1[Math.floor(Math.random()*arr1.length)];
       apple.visible = a;
        
       
        var test = 0;
        if(a=='1'){
            test+=1;
        }
        var app2 = new createjs.Bitmap("/img/lpapple1.png");
        app2.x = 320;
        app2.y = 680;
        
        var b = arr1[Math.floor(Math.random()*arr1.length)];
      app2.visible =b;
     
        if(b=='1'){
            test+=1;
        }
 
        var app3 = new createjs.Bitmap("/img/lpapple1.png");
        app3.x = 110;
        app3.y = 680;
        var c = arr1[Math.floor(Math.random()*arr1.length)];
     app3.visible = c;

        if(c=='1'){
            test+=1;
        }

        var app4 = new createjs.Bitmap("/img/lpapple1.png");
        app4.x = 220;
        app4.y = 650;
        var d = arr1[Math.floor(Math.random()*arr1.length)];
        app4.visible =d;
 
        if(d=='1'){
            test+=1;
        }
        var app5 = new createjs.Bitmap("/img/lpapple1.png");
        app5.x = 280;
        app5.y = 720;
        var e = arr1[Math.floor(Math.random()*arr1.length)];
        app5.visible = e;
        if(e=='1'){
            test+=1;
        }
        var app6 = new createjs.Bitmap("/img/lpapple1.png");
        app6.x = 780;
        app6.y = 560;
        var f = arr1[Math.floor(Math.random()*arr1.length)];
       app6.visible = f;

        if(f =='1'){
            test+=1;
        }
        var app7 = new createjs.Bitmap("/img/lpapple1.png");
        app7.x = 670;
        app7.y = 550;
        var g = arr1[Math.floor(Math.random()*arr1.length)];
    app7.visible =g;
      
        if(g =='1'){
            test+=1;
        }
        var app8 = new createjs.Bitmap("/img/lpapple1.png");
        app8.x = 700;
        app8.y = 500;
        var h = arr1[Math.floor(Math.random()*arr1.length)];
      app8.visible =h;
      
        if(h =='1'){
            test+=1;
        }
        var app9 = new createjs.Bitmap("/img/lpapple1.png");
        app9.x = 960;
        app9.y = 500;
        var i = arr1[Math.floor(Math.random()*arr1.length)];
       app9.visible =i;
  
        if(i =='1'){
            test+=1;
        }
        var app10 = new createjs.Bitmap("/img/lpapple1.png");
        app10.x = 1000;
        app10.y = 530;
        var j = arr1[Math.floor(Math.random()*arr1.length)];
       app10.visible =j;
    
        if(j=='1'){
            test+=1;
        }
        var app11 = new createjs.Bitmap("/img/lpapple1.png");
        app11.x = 1060;
        app11.y = 545;
        var k = arr1[Math.floor(Math.random()*arr1.length)];
       app11.visible =k;
     
        if(k=='1'){
            test+=1;
        }
        var app12 = new createjs.Bitmap("/img/lpapple1.png");
        app12.x = 1100;
        app12.y = 570;
        var l = arr1[Math.floor(Math.random()*arr1.length)];
        app12.visible = l;  //l
        if(l =='1'){
            test+=1;
        }
        var app13 = new createjs.Bitmap("/img/lpapple1.png");
        app13.x = 1180;
        app13.y = 550;
        var m = arr1[Math.floor(Math.random()*arr1.length)];
        app13.visible = m;   //m
        if(m =='1'){
            test+=1;
        }
        var app14 = new createjs.Bitmap("/img/lpapple1.png");
        app14.x = 1210;
        app14.y = 560;
         var z = arr1[Math.floor(Math.random()*arr1.length)];
        app14.visible = z;      //z
        if(z =='1'){
            test+=1;
        }
        var app15 = new createjs.Bitmap("/img/lpapple1.png");
        app15.x = 150;
        app15.y = 660;
      var o = arr1[Math.floor(Math.random()*arr1.length)];
        app15.visible = o;  
        if(o=='1'){
            test+=1;
        }
     
            function back(){
                location.reload();
            }
        var rabbit = new createjs.Bitmap("/img/lprabbit1.png");
        rabbit.x = 1280;
        rabbit.y = 430;
        rabbit.addEventListener("click",function(e){
            Seite.visible = false;
       
            var timerS = setInterval(logoMove, 500);
            var timerl = setInterval(loadMove, 500);
            loadSeite.visible = true;
            inhalt.text = "Sie werden die Rolle eines Kaninchens spielen, um gegen die Schildkröte anzutreten. Klicken Sie auf den Startknopf, um das Spiel zu starten, beschleunigen Sie das Kaninchen mit der linken Maustaste/ Leertaste der Tastatur! ";
    
            setTimeout(jumpToRace,10000);
        });
    
        

       // reading

       var read = new createjs.Bitmap("/img/read3.png");
       read.x = 500;
       read.y = 610;
       read.addEventListener("click",function(e){
        Seite.visible = false;
       
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text = "Wählen Sie das entsprechende Bild gemäß der englischen Wortmeldung";

        setTimeout(jumpToRead,10000);
    });

    var park = new createjs.Bitmap("/img/car22.png");
    park.x = 300;
    park.y = 410;
   
    park.addEventListener("click",function(e){
        Seite.visible = false;
       
        var timerS = setInterval(logoMove, 500);
        var timerl = setInterval(loadMove, 500);
        loadSeite.visible = true;
        inhalt.text = "Bitte helfen Sie Herr Hermann, das Auto am richtigen Ort abzustellen. Sie können auch einen Modus auswählen, bevor Sie beginnen. Vermeiden Sie Hindernisse und erledigen Sie die parkaufgabe! ";

        setTimeout(jumpToCar,10000);
 });


    var img = new Image();
    img.src = "/img/thunder.png";
    
     var cloud = new createjs.Bitmap(img);
    
    cloud.x = 975;
    cloud.y = -5;
    cloud.addEventListener("click",function(e){
        Seite.visible = false;
       
            var timerS = setInterval(logoMove, 500);
            var timerl = setInterval(loadMove, 500);
            loadSeite.visible = true;
            inhalt.text = "Klicken Sie auf die Startknopf, um das Spiel zu starten. Sie können die linke/ rechte Tastaturtaste verwenden oder Maus auf die virtuelle Tastatur in der unteren rechten Ecke zu klicken, um die Bewegung des Charakters nach links/ rechts zu steuern. Punkte werden abgezogen, wenn Sie eine Bombe erhalten. Versuchen Sie Bomben zu vermeiden, um hohe Punktzahlen zu erzielen!";
    
            setTimeout(jumpToCloud,10000);
    });

    
    var back = new createjs.Bitmap("/img/arrow.png");
    back.x =20;
    back.y = 20;
    back.addEventListener('click',function(e){
        window.location.href= "/index.html";
    });


    // jump to page function
    
    function jumpToRead(){
        window.location.href= "/html/bulb.html";
    }
    function jumpToCloud(){
        window.location.href= "/html/cloud.html";
    }
    function jumpToCar(){
        window.location.href= "/html/car.html";
    }
    function jumpToRace(){
        window.location.href= "/html/race.html";
    }
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
   var load = new createjs.Text("0", "25px Monospace","white");
   load.x = -200;
   load.y = 735;

   var loadRect =  new createjs.Shape();
   loadRect.graphics.beginFill("black").drawRect(0, 0, 1500, 80);
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
        loadSeite.visible = false;
        
        Seite.addChild(bg);
        Seite.addChild(donate);
        Seite.addChild(tree);
        Seite.addChild(tree1);
        Seite.addChild(tree2);
        Seite.addChild(tree3);
        Seite.addChild(rabbit);

        Seite.addChild(apple);
        Seite.addChild(app2);
        Seite.addChild(app3);
        Seite.addChild(app4);
        Seite.addChild(app5);
        Seite.addChild(app6);
        Seite.addChild(app7);
        Seite.addChild(app8);
        Seite.addChild(app9);
        Seite.addChild(app10);
        Seite.addChild(app11);
        Seite.addChild(app12);
        Seite.addChild(app13);
        Seite.addChild(app14);
        Seite.addChild(app15);

      

        Seite.addChild(read);
        Seite.addChild(park);
        Seite.addChild(cloud);
        Seite.addChild(back);

        stage.addChild(Seite);
        stage.addChild(loadSeite);
 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }




