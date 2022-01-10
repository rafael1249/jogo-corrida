var caminho,menino,dinheiro,diamantes,joias,espada;
var imgCaminho,imgMenino,imgDinheiro,imgDiamantes,imgJoias,imgEspada;
var colecaoTesouros = 0;
var dinheiroG,diamantesG,joiasG,grupoEspada;

var rua
var a


//Estados de jogo
var JOGAR=1;
var ENCERRAR=0;
var estadoJogo=1;

function preload(){
  imgCaminho = loadImage("a.png");
  imgMenino = loadAnimation("Runner-1.png","Runner-2.png");
  imgDinheiro = loadImage("cash.png");
  imgDiamantes = loadImage("diamonds.png");
  imgJoias = loadImage("jwell.png");
  imgEspada = loadImage("sword.png");
  imgFim =loadAnimation("gameOver.png");
  a = loadAnimation("3.png");

}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// movendo o plano de fundo
caminho=createSprite(width/2,200);
caminho.addImage(imgCaminho);
caminho.velocityY = 5


console.log(caminho.velocityY)
//rua = createSprite(width/2,)


//criando o menino correndo
menino = createSprite(width/2,height-100,20,20);
menino.addAnimation("SahilRunning",imgMenino);
menino.scale=0.08;
  
  
dinheiroG=new Group();
diamantesG=new Group();
joiasG=new Group();
grupoEspada=new Group();

}

function draw() {

  if(estadoJogo===JOGAR){
  background(0);
  menino.x = World.mouseX;
  
  
  
  
  
  edges= createEdgeSprites();
  menino.collide(edges);
  
  //código para resetar o plano de fundo
  if(caminho.y > height ){
   // caminho.y = height/2;
  }

  if(colecaoTesouros > 299){
    menino.addAnimation("SahilRunning",a)
    menino.x=width/2
    menino.y=300
    menino.scale=2
    
    joiasG.destroyEach();
    diamantesG.destroyEach();
    dinheiroG.destroyEach();
    grupoEspada.destroyEach();
    caminho.velocityY = 0
     
   
     
   }
  
    criarDinheiro();
    criarDiamantes();
    criarJoias();
    criarEspadas();
    se();
   

    if (dinheiroG.isTouching(menino)) {
      dinheiroG.destroyEach();
      colecaoTesouros=colecaoTesouros+50;
    }
    else if (diamantesG.isTouching(menino)) {
      diamantesG.destroyEach();
      colecaoTesouros=colecaoTesouros-50;

      
    }else if(joiasG.isTouching(menino)) {
      joiasG.destroyEach();
      colecaoTesouros=colecaoTesouros +20;

      
    }else{
      if(grupoEspada.isTouching(menino)) {
        
        estadoJogo=ENCERRAR;
        
        menino.addAnimation("SahilRunning",imgFim)
        menino.x=width/2
        menino.y=300
        menino.scale=0.6
        
        joiasG.destroyEach();
        diamantesG.destroyEach();
        dinheiroG.destroyEach();
        grupoEspada.destroyEach();
        caminho.velocityY = 0
    }
  }
  
  

   }
    
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouros: "+ colecaoTesouros,150,30);
  }



function criarDinheiro() {
  if (World.frameCount % 155 == 0) {
  var dinheiro = createSprite(Math.round(random(50, width-50),40, 10, 10));
  dinheiro.addImage(imgDinheiro);
  dinheiro.scale=0.12;
  dinheiro.velocityY = 5;
  dinheiro.lifetime = 300;
  dinheiroG.add(dinheiro);
  }
}

function criarDiamantes() {
  if (World.frameCount % 100 == 0) {
  var diamantes = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamantes.addImage(imgDiamantes);
  diamantes.scale=0.03;
  diamantes.velocityY = 5;
  diamantes.lifetime = 300;
  diamantesG.add(diamantes);
}
}

function criarJoias() {
  if (World.frameCount % 150 == 0) {
  var joias = createSprite(Math.round(random(50, width-50),40, 10, 10));
  joias.addImage(imgJoias);
  joias.scale=0.13;
  joias.velocityY = 5;
  joias.lifetime = 300;
  joiasG.add(joias);
  }
}

function criarEspadas(){
  if (World.frameCount % 70 == 0) {
  var espada = createSprite(Math.round(random(50, width-100),-400, -100, -100));
  espada.addImage(imgEspada);
  espada.scale=0.1;
  espada.velocityY = 5;
  espada.lifetime = 300;
  grupoEspada.add(espada);
  }
}


function se(){
  

}