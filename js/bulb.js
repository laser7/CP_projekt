
    var stage;
    function init(){
        stage = new createjs.Stage("canvas");
 
        var bg = new createjs.Bitmap("/img/bg33.svg");
        bg.x = 0;
        bg.y = 0;

     var temp;
 
        var r = ['book', 'sun', 'cow', 'write', 'mouth','cup', 'fish','hundred','earth', 'clock', 'computer', 'robot','goat','lion','grapes','banana'];
        　　temp=r[Math.round(Math.random()*(r.length-1))];
        var txt = new createjs.Text("find the corresponding picture of  -"+temp+"-  below", "26px Times","black");
        txt.x = 100;
        txt.y = 250;

        var position = ['400','600','800'];
        position.sort(function(){
            return Math.random()-0.5;
        });
        var a = temp;
        var rightAn = new createjs.Bitmap("/img/"+a+".png");
        rightAn.x = position[0];
        rightAn.y = 350;
        rightAn.addEventListener("click",function(e){


            swal("congratulation!","you are right","success");
            setTimeout(reload,3000);
        });


        function reload(){
            location.reload();
        }
        var false1 = new createjs.Bitmap("/img/"+r[Math.round(Math.random()*(r.length-1))]+".png");
        false1.x = position[1];
        false1.y = 350;
        false1.addEventListener("click",function(e){
            swal("try again carefully?");
        });
    
        var random = ['flower','windmill','pig','house','plane','guitar','icecream','pineapple','camera','bicycle','plant','like','watermelon','lemon'];
       

        var false2 = new createjs.Bitmap("/img/"+random[Math.round(Math.random()*(random.length-1))]+".png");
        false2.x = position[2];
        false2.y = 350;

        false2.addEventListener("click",function(e){
            swal("try again carefully?");
        });
      

         var back = new createjs.Bitmap("/img/left.png");
         back.x = 1300;
         back.y = 10;
         back.addEventListener("click",function(e){
            window.location.href= "/html/tree.html";
         });

        stage.addChild(bg);
        stage.addChild(txt);
        stage.addChild(rightAn);
        stage.addChild(false1);
        stage.addChild(false2);
        stage.addChild(back);

 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',update);
    }
 
 
    function update(event){
        stage.update();
    }










































