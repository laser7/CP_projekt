var stage;
function init(){
    stage = new createjs.Stage("canvas");
    var txt = new createjs.Text("Klein", "25px Arial", "black");
    txt.x = 300;
    txt.y = 65;
    var txt1 = new createjs.Text("Berg", "25px Arial", "black");
    txt1.x = 500;
    txt1.y = 65;
    var txt2 = new createjs.Text("Frank", "25px Arial", "black");
    txt2.x = 680;
    txt2.y = 65;
    var txt3 = new createjs.Text("Hermann", "25px Arial", "black");
    txt3.x = 850;
    txt3.y = 65;

    var back = new createjs.Bitmap("/img/left.png");
    back.x = 1250;
    back.y = 10;
    back.addEventListener("click",function(e){
       window.location.href= "/html/tree.html";
    });
    
    var park = new createjs.Shape();
    park.graphics.beginFill("white").drawRect(0, 0, 810, 30);
    park.x = 200;
    park.y = 60;
    var park1 = new createjs.Shape();
    park1.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park1.x = 240;
    park1.y = 90;
    var park2 = new createjs.Shape();
    park2.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park2.x = 430;
    park2.y = 90;
    var park3 = new createjs.Shape();
    park3.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park3.x = 620;
    park3.y = 90;
    var park4= new createjs.Shape();
    park4.graphics.beginFill("grey").drawRect(0, 0, 170, 240);
    park4.x = 810;
    park4.y = 90;
    var park5 = new createjs.Shape();
    park5.graphics.beginFill("white").drawRect(0, 0, 810, 30);
    park5.x = 200;
    park5.y = 330;


    var man = new createjs.Bitmap("/img/boy.png");
    man.x = 1400;
    man.y = 150;
    man.addEventListener("click",function(e){
        swal("Spielregeln","Hi, ich bin Herr Hermann, kannst du mein Auto in der richtige Platz parken ? und nicht vergessen, bevor du startest, waehlen ein Mode aus");
    });

// keyboard
     var outline = new createjs.Shape();
    outline.graphics.beginStroke('#696969').drawRect(0,0,402,502);
    outline.x= 1170;
    outline.y = 350;
   
    var up = new createjs.Shape();
    up.graphics.beginFill("#DCDCDC").drawRect(0, 0, 400,120);
    up.x = 1171;
    up.y = 351;
    up.addEventListener("click",function(e){
        img.src = "/img/cartop.png";
        car.y -= 30;
        checkPosition(car.x,car.y);
    });
    var down = new createjs.Shape();
    down.graphics.beginFill("#D3D3D3").drawRect(0, 0, 400,120);
    down.x = 1171;
    down.y = 731;
    down.addEventListener("click",function(e){
        img.src = "/img/cardown.png";
        car.y += 30;
        checkPosition(car.x,car.y);
    });
    var left = new createjs.Shape();
    left.graphics.beginFill("#A9A9A9").drawRect(0, 0, 200,260);
    left.x = 1171;
    left.y = 471;
    left.addEventListener("click",function(e){
        img.src = "/img/carleft.png";
        car.x -= 30;
        checkPosition(car.x,car.y);
    });
    var right = new createjs.Shape();
    right.graphics.beginFill("#C0C0C0").drawRect(0, 0, 200,260);
    right.x = 1371;
    right.y = 471;
    right.addEventListener("click",function(e){
        img.src = "/img/carright.png";
        car.x += 30;
        checkPosition(car.x,car.y);
    });

    var arrowU = new createjs.Bitmap("/img/uparrow.png");
    arrowU.x = 1335;
    arrowU.y = 380;

    var arrowD = new createjs.Bitmap("/img/downarrow.png");
    arrowD.x = 1335;
    arrowD.y = 760;

    var arrowL = new createjs.Bitmap("/img/leftarrow.png");
    arrowL.x = 1240;
    arrowL.y = 550;

    var arrowR = new createjs.Bitmap("/img/rightarrow.png");
    arrowR.x = 1420;
    arrowR.y = 550;
    var img = new Image();
    img.src = "/img/cartop.png";
    var car = new createjs.Bitmap(img);
    car.x = 400;
    car.y = 700;
   
    window.addEventListener('keydown',keyOper, true);
    function keyOper(e){
        var keyID = e.keyCode ? e.keyCode :e.which;
        if(keyID === 37){
            img.src = "/img/carleft.png";
            car.x -= 30;
          
            checkPosition(car.x,car.y);
        } else if(keyID === 38){
            img.src = "/img/cartop.png";
            car.y -= 30;
           
           checkPosition(car.x,car.y);
        } else if(keyID === 39){
            img.src = "/img/carright.png";
            car.x += 30;
         
            checkPosition(car.x,car.y);
        } else if (keyID === 40){
            img.src = "/img/cardown.png";
            car.y += 30;
          
            checkPosition(car.x,car.y);
        }
    }

    function checkPosition(x, y){
      if((810 < x )&&(x<980) && (90 < y )&&( y <230)){
            swal("Good Job", "Du hast den richtige Parkplatz gefunden","success");
       }
       if( b == 1 || c == 1 ){
       if(cone.x < x+110 && cone.x +70 > x ){
           if( cone.y  < y+90  && cone.y + 70 > y ){
            crashed();
           }
           
       }
    }
    if(c == 1){
       if(rock.x < x+110 && rock.x +70 > x ){
           if( rock.y  <y+90 && rock.y + 70 > y){
            crashed();
           }
        }
    }
    if(a ==1 || b==1 || c==1){
    if(barrier.x < x+110 && barrier.x +80 > x  ){
        if(barrier.y  <y+90 && barrier.y + 80 > y){
            crashed();
        }
    }
    }
    if(c == 1){
    if(barrier1.x < x+110 && barrier1.x +80 > x  ){
        if(barrier1.y  <y+90 && barrier1.y + 80 > y){
            crashed();
        }
    }
    }
    if(a ==1 || b==1 || c==1){
    if(hydrant.x < x+110 && hydrant.x +70 > x ){
        if(hydrant.y  <y+90 && hydrant.y + 70 > y ){
            crashed();
        }
    }
    }
    if( b==1 || c==1){
    if(ob.x < x+110 && ob.x +70 > x  ){
        if(ob.y  <y+90 && ob.y + 70 > y){
            crashed();
        }
    }
 }
    }


    function crashed(){
        swal("Crashed","please restart");
      var carTimemr = setTimeout(carReturn,2000);

    }
    function carReturn(){
        img.src = "/img/cartop.png";
        car.x = 400;
        car.y = 700;

    }
   
    var rock = new createjs.Bitmap("/img/caveB.png");
    rock.x = 200;
    rock.y = 400;
    rock.visible = true;

    var barrier = new createjs.Bitmap("/img/barrier.png");
    barrier.x = 250;
    barrier.y = 750;
    barrier.visible = true;
    var barrier1 =new createjs.Bitmap("/img/barrier1.png");
    barrier1.x = 320;
    barrier1.y = 560;
    barrier1.visible = true;
    var cone = new createjs.Bitmap("/img/cone.png");
    cone.x = 600;
    cone.y = 450; 
    cone.visible = true;
    var hydrant = new createjs.Bitmap("/img/hydrant.png");
    hydrant.x = 930;
    hydrant.y = 400;
    hydrant.visible = true;
    var ob = new createjs.Bitmap("/img/obstacle.png");
    ob.x = 750;
    ob.y = 700;
    ob.visible = true;
    var a =1, b=1, c=1;
    var easy = new createjs.Bitmap("/img/easy.jpg");
    easy.x = 1250;
    easy.y = 150;
    easy.addEventListener("click",function(e){
        a = 1;
        b = 2;
        c = 2;
        ob.visible = false;
        cone.visible = false;
        barrier1.visible = false;
        rock.visible = false;
    });
    var medium = new createjs.Bitmap("/img/medium.jpg");
    medium.x = 1250;
    medium.y = 200;
    medium.addEventListener("click",function(e){
        a =2;
        b= 1;
        c = 2;
        hydrant.visible = true;
        barrier.visible = true;
        ob.visible = true;
        cone.visible = true;
        barrier1.visible = false;
        rock.visible = false;
    });
    var hard = new createjs.Bitmap("/img/hard.jpg");
    hard.x = 1250;
    hard.y = 250;
    hard.addEventListener("click",function(e){
        a=2;
        b = 2;
        c = 1;
        hydrant.visible = true;
        barrier.visible = true;
        ob.visible = true;
        cone.visible = true;
        barrier1.visible = true;
        rock.visible = true;
    });


    stage.addChild(park);
    stage.addChild(back);
    stage.addChild(outline);
    stage.addChild(up);
    stage.addChild(down);
    stage.addChild(left);
    stage.addChild(right);
    stage.addChild(arrowU);
    stage.addChild(arrowD); 
    stage.addChild(arrowR);
    stage.addChild(arrowL); 
  
    stage.addChild(park5);
    stage.addChild(park1);
    stage.addChild(park2);
    stage.addChild(park3);
    stage.addChild(park4);
    stage.addChild(txt);
    stage.addChild(txt1);
    stage.addChild(txt2);
    stage.addChild(txt3);
   
    stage.addChild(man);
    stage.addChild(car);
    stage.addChild(rock);

    stage.addChild(barrier);
    stage.addChild(barrier1);
    stage.addChild(cone);
    stage.addChild(hydrant);
    stage.addChild(ob);
    stage.addChild(easy);
    stage.addChild(medium);
    stage.addChild(hard);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick',update);
}


function update(event){
    stage.update();
}


