 var bg1, bg2;
 var charImg, char;
 var form;
 var z1, z2, z3, z4, z5, z6, z7, z8, z9, z10, z11, z12, z13, z14, z15, z16, z17, z18, z19, z20;
 var zombie1, zombie2, zombie3, zombie4;
 var bulletImg, bullet;
 var score = 0;
 var gameState;
 gameState = "Intro";

 function preload(){
   bg1 = loadImage("images/start.png");
   bg2 = loadImage("images/z bg.jpg");

   charImg = loadImage("images/char p.png");

   bulletImg = loadImage("images/bullet.png");

   z1 = loadImage("images/z1.png");
   z2 = loadImage("images/z2.png");
   z3 = loadImage("images/z3.png");
   z4 = loadImage("images/z4.png");
   z5 = loadImage("images/z5.png");
   z6 = loadImage("images/z6.png");
   z7 = loadImage("images/z7.png");
   z8 = loadImage("images/z8.png");
   z9 = loadImage("images/z9.png");
   z10 = loadImage("images/z10.png");
   z11 = loadImage("images/z11.png");
   z12 = loadImage("images/z12.png");
   z13 = loadImage("images/z13.png");
   z14 = loadImage("images/z14.png");
   z15 = loadImage("images/z15.png");
   z16 = loadImage("images/z16.png");
   z17 = loadImage("images/z17.png");
   z18 = loadImage("images/z18.png");
   z19 = loadImage("images/z19.png");
   z20 = loadImage("images/z20.png");
 }


function setup() {
  createCanvas(displayWidth - 10, displayHeight - 130);
  form = new Form();

  char = createSprite(displayWidth/2 - 450, displayHeight/2 + 100, 20, 20);
  char.addImage(charImg);
  char.scale = 0.3;
  char.visible = false;

}

function draw() {
  background(bg1); 

  if(gameState == "Start")
  {
    background(bg2);

    char.visible = true;

    textSize(30);
    stroke("white");
    fill("white");
    text("Score: " + score, displayWidth/2 + 400, displayHeight/4 - 100);

    spawn();
  }
 
  form.display(); 
  drawSprites();
}

function spawn()
{
  if(frameCount % 300 == 0)
  {
   zombie1 = createSprite(displayWidth-50, displayHeight/2 + 100, 20, 20);

   zombie1.velocityX = -5;
   
   var rand = Math.round(random(1,20));
   console.log(rand);

   switch(rand)
   {
    case 1: zombie1.addImage(z1);
            zombie.scale = .3;
            break;
    case 2: zombie1.addImage(z2);
            zombie1.scale = .6;
            break;
    case 3: zombie1.addImage(z3);
            zombie1.scale = .5;
            break;
    case 4: zombie1.addImage(z4);
            zombie1.scale = .5;
            break;
    case 5: zombie1.addImage(z5);
            zombie1.scale = .5;
            break;
    case 6: zombie1.addImage(z6);
            zombie1.scale = .6;
            break;  
    case 7: zombie1.addImage(z7);
            zombie1.scale = .5;
            break;      
    case 8: zombie1.addImage(z8);
            zombie1.scale = .4;
            break;
    case 9: zombie1.addImage(z9);
            zombie1.scale = .3;
            break;
    case 10: zombie1.addImage(z10);
            zombie1.scale = .3;
            break;
    case 11: zombie1.addImage(z11);
            zombie1.scale = .4;
            break;
    case 12: zombie1.addImage(z12);
            zombie1.scale = .4;
            break;
    case 13: zombie1.addImage(z13);
            zombie1.scale = .3;
            break;
    case 14: zombie1.addImage(z14);
            zombie1.scale = .4;
            break;
    case 15: zombie1.addImage(z15);
            zombie1.scale = .3;
            break;
    case 16: zombie1.addImage(z16);
            zombie1.scale = .5;
            break;
    case 17: zombie1.addImage(z17);
            zombie1.scale = .4;
            break;
    case 18: zombie1.addImage(z18);
            zombie1.scale = .6;
            break;
    case 19: zombie1.addImage(z19);
            zombie1.scale = .6;
            break;
    case 20: zombie1.addImage(z20);
            zombie1.scale = .4;
            break;
   }

   zombie1.debug = true;

  }

//   if(frameCount % 300 == 0)
//   {
//    zombie1 = createSprite(displayWidth-50, displayHeight/2 + 100, 20, 20);

//    zombie1.velocityX = -5;
   
//    var ran = Math.round(random(1,20));
//    console.log(ran);

//    switch(ran)
//    {
//     case 1: zombie1.addImage(z1);
//             zombie.scale = .3;
//             break;
//     case 2: zombie1.addImage(z2);
//             zombie1.scale = .6;
//             break;
//     case 3: zombie1.addImage(z3);
//             zombie1.scale = .5;
//             break;
//     case 4: zombie1.addImage(z4);
//             zombie1.scale = .5;
//             break;
//     case 5: zombie1.addImage(z5);
//             zombie1.scale = .5;
//             break;
//     case 6: zombie1.addImage(z6);
//             zombie1.scale = .6;
//             break;  
//     case 7: zombie1.addImage(z7);
//             zombie1.scale = .5;
//             break;      
//     case 8: zombie1.addImage(z8);
//             zombie1.scale = .4;
//             break;
//     case 9: zombie1.addImage(z9);
//             zombie1.scale = .3;
//             break;
//     case 10: zombie1.addImage(z10);
//             zombie1.scale = .3;
//             break;
//     case 11: zombie1.addImage(z11);
//             zombie1.scale = .4;
//             break;
//     case 12: zombie1.addImage(z12);
//             zombie1.scale = .4;
//             break;
//     case 13: zombie1.addImage(z13);
//             zombie1.scale = .3;
//             break;
//     case 14: zombie1.addImage(z14);
//             zombie1.scale = .4;
//             break;
//     case 15: zombie1.addImage(z15);
//             zombie1.scale = .3;
//             break;
//     case 16: zombie1.addImage(z16);
//             zombie1.scale = .5;
//             break;
//     case 17: zombie1.addImage(z17);
//             zombie1.scale = .4;
//             break;
//     case 18: zombie1.addImage(z18);
//             zombie1.scale = .6;
//             break;
//     case 19: zombie1.addImage(z19);
//             zombie1.scale = .6;
//             break;
//     case 20: zombie1.addImage(z20);
//             zombie1.scale = .4;
//             break;
//    }

//    zombie.debug = true;

//   }
}

function keyPressed()
{
   if(keyCode == 32 && gameState == "Start")
   {
     bullet = createSprite(displayWidth/2 - 400, displayHeight/2 + 110, 20, 20);
     bullet.addImage(bulletImg);
     bullet.scale = 0.3;
     bullet.velocityX = 3;

     bullet.debug = true;

     if(bullet.isTouching(zombie))
     {
         score = score + 1;

     }
   }
   
//   if(bullet.isTouching(zombie))
//   {
//           zombie.destroy();
//           score = score + 1;
//           console.log(score);
//   }
}