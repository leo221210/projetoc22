var starImg,imgFada,bgImg;
var star, starBody;
var fada,vozFada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    vozFada = loadSound("sound/JoyMusic.mp3")
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 600);

    //escrever código para tocar o som vozFada
  vozFada.play()  
    //criar sprite de fada e adicionar animação para fada

    fada = createSprite (300,490)
    fada.addAnimation("fadavoando",imgFada)
    fada.scale = 0.2

    star=createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){

    Engine.update(engine)

    background(bgImg)
    fada.velocityX=0
    fada.velocityY=0

    if(keyDown(LEFT_ARROW)){
        fada.velocityX = -6 
       }else if(keyDown(RIGHT_ARROW)){
        fada.velocityX = 6 
       }else if(keyDown(DOWN_ARROW)){
          star.velocityY=3
      }   
      
  if(star.y > 470){
    star.velocityY = 0
  }
    
 drawSprites()   
}


