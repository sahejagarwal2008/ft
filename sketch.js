var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
var Constraint = Matter.Constraint 

var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14;
var keyhunter
var bhoot1,bhoot2,bhoot3,bhoot4,bhoot5,bhoot6,bhoot7,bhoot8,bhoot9,bhoot0
function setup(){
    var canvas = createCanvas(1500,700)
    engine = Engine.create();
    world = engine.world;
   
    m1 = new Maze(750,20,1455,10)
    m2 = new Maze(20,350,10,670)
    m3 = new Maze(750,680,1455,10)
    m4 = new Maze(1480,350,10,670)
    
    m5 = new Maze(715,70,1300,10);

    m6 = new Maze(70,238,10,331);
    m7 = new Maze(150,250,10,50);
    m8 = new Maze(660,410,1190,10);
    m9 = new Maze(750,270,1190,10);
    m10 = new Maze(1350,430,10,331);
    m11 = new Maze(1250,437,10,50);
    m12 = new Maze(660,457,1190,10);
    m13 = new Maze(712,601,1285,10);
   // m14 = new Maze();

   keyhunter = new KeyHunter(200 ,200 ,50 ,50);
   bhoot1 = new Bhoot(400,100,10,10)
   bhoot2 = new Bhoot(480,100,10,10)
   bhoot3 = new Bhoot(400,100,10,10)
   bhoot4 = new Bhoot(400,700,10,10)
   bhoot5 = new Bhoot(400,400,10,10)
   bhoot6 = new Bhoot(457,100,10,10)
   bhoot7 = new Bhoot(400,800,10,10)
   bhoot8 = new Bhoot(600,100,10,10)
   bhoot9 = new Bhoot(480,100,10,10)
   bhoot0 = new Bhoot(400,500,10,10)
}



   

function draw(){
    Engine.update(engine)
    background(0);
   m1.display();
   m2.display();
   m3.display();
   m4.display();
   m5.display();
   m6.display();
   m7.display();
   m8.display();
   m9.display();
   m10.display();
   m11.display();
   m12.display();
   m13.display();
   keyhunter.display();
   bhoot1.display();
   bhoot2.display();
   bhoot3.display();
   bhoot4.display();
   bhoot5.display();
   bhoot6.display();
   bhoot7.display();
   bhoot8.display();
   bhoot9.display();
   bhoot0.display();
   if(keyCode === 32){
    keyhunter.velocityY = -3
   }
}
//function keyPressed(){
 //   if(keyCode === 38){
 //      keyhunter.velocityY = -3
  //  }
//}
