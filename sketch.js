
//Video: https://drive.google.com/file/d/1pTFq_PE9zDsVLcbzkqNbZF63cXxES_pE/view?usp=sharing

// ---------------- Variaveis-----------------
var img_capa, img_introducao, img_creditos,img_over,img_vitoria;
var estrada,estrada2, fundo;
var xMenu = 200 ;   
var yMenu1 = 350;
var yMenu2 = 410;
var yMenu3 = 470;
var largura = 200;
var altura = 50;
var tela = 0;
var heroi, xh,yh;
var estradaImage, heroiImage, ObstImage,fundoImagem,bonus,fundofase2;
var obst, juelheira,luvas,cotoveleira, pare, cones;
var escolhaBonus = 0, escolhaObst = 0;
var cronometro = 30;
var auxcronometro = 0;
var aux = 0;
var condicaoVitoria = true;
var nivel = 1;
var som,somImpacto,somCura;
var jogo = true;

var vida1,vida2;
var colisao,salto,dano;
var danoBonus= true;

var mov = 1;
var mov2 = 1;
var dificuldade = -5;
var dificuldadeBonus = -2;
var dificuldadeTempo = 0;
var tempo;
var condicaoTempo = 0;
var condicaoTempo2 = 0
var condicao = 1;
var condicao2 = 1;
var tempoCondicao = 0;
var tempoCondicao2 = 0;

let myFont;
const GRAVITY = 0.9;


// ---------------- Preload-------------------
function preload(){
  
  img_capa = loadImage('imagens/Capa.png');
  img_vitoria = loadImage('imagens/Vitoria.png');
  img_introducao = loadImage('imagens/Introducao.png');
  img_creditos = loadImage('imagens/creditos.png');
  estradaImage = loadImage('imagens/Pista2.png');
  fundoImagem = loadImage ('imagens/Fundo.png');
  fundofase2 = loadImage ('imagens/fundo 2.png');
  heroiImage = loadImage('imagens/1a.png');
  obstImage = loadImage('imagens/hidr2.png');
  vida1 = loadImage('imagens/vida.png');
  vida2 = loadImage('imagens/vida2.png');
  img_over = loadImage('imagens/gameover.jpg');
  luvas = loadImage('imagens/Luvas.png');
  juelheira = loadImage('imagens/Juelheira.png');
  cotoveleira = loadImage('imagens/Cotoveleira.png');
  pare = loadImage('imagens/Pare.png');
  cones = loadImage('imagens/Cone.png');
  myFont = loadFont('fontes/BerthaMelanie.ttf');
  soundFormats('mp3', 'ogg');
  som = loadSound('som/music');
  somImpacto = loadSound('som/impacto');
  somCura = loadSound('som/cura');

}
function loadOpen(){
	som.play();
}
// ---------------- Setup---------------------
function setup() {
  createCanvas(600, 600);
  colisao=3;
  xh = 102;
  yh = 413;
  
  fundo = createSprite(300,200);
  fundo.addImage(fundoImagem);
  fundo2 = createSprite(900,200);
  fundo2.addImage(fundoImagem);
  
  estrada = createSprite(300,508);
  estrada.addImage(estradaImage);
  estrada2 = createSprite(900,508);
  estrada2.addImage(estradaImage);
  
  
  
  heroi = createSprite(xh,yh);
  heroi.addImage(heroiImage);
  
  //height
  obst = createSprite(width+50,435);
  obst.addImage(obstImage);
  
  bonus = createSprite(width+50,285);
  bonus.addImage(luvas);
  
}


// ------------------- Draw --------------------
function draw() {
  // ---- Tecla ESC --------------
  if(keyIsDown(ESCAPE)){
    tela =0;
    heroi.velocity.y=0;
    fundo.position.x = 300;
    fundo2.position.x = 900;
    estrada.position.x = 300;
    estrada2.position.x = 900;
  }
  if(cronometro==0){
    tela =5;
    heroi.velocity.y=0;
    fundo.position.x = 300;
    fundo2.position.x = 900;
    estrada.position.x = 300;
    estrada2.position.x = 900;
  }
  if(tela==0){
    menu();  
  }
  else if(tela==1){
    inicioGame();
    
  }
  else if(tela==2){
    instrucoes();
  }
  else if(tela==3){
    creditos();
  }
  else if(tela==4){
    gameover();
  }
  else if(tela==5){
    vitoria();
  }
  
}


// ------------------ Menu -------------------
function menu(){
  
  background(220);
  image(img_capa,0,0);
  
  
  // ----Botão Iniciar --------------
  botaoIniciar();
  
  // ----Botão Introdução --------------
  botaoIntroducao();
  
  // ----Botão Creditos --------------
  botaoCredito();
}


// ------------------ Telas -------------------
// ------------- Inicio do Game --------------
function inicioGame(){
  background(0);
  
  //image ( fundo ,0 , -100);
  
  
  
  heroi.velocity.y+=GRAVITY;
  if(heroi.collide(estrada)||heroi.collide(estrada2)){
    heroi.velocity.y=0;
    salto = false;
    dano = true;
  }
  
  heroi.collide(estrada);
  heroi.collide(estrada2);
  
  drawSprites();
  moveFundo();
  moveEstrada();
  moveObstaculo();
  moveBonus();
  
  
  
  
  textSize(32);
  text("Fase "+nivel, 50, 30);
  text(cronometro, 50, 80);
  
  
  
  
  
  for(var x=0;x<colisao;x++){
     image( vida1 , 500+(x*20),50,20,20);
  }
  if(colisao===2){ 
     image( vida2 , 540,50,20,20);
  }
  else if(colisao===1){
    for(var x=0;x<2;x++){
     image( vida2 , 540-(x*20),50,20,20);
    }
    
  }
  else if(colisao===0){
    for(var x=0;x<3;x++){
     image( vida2 , 540-(x*20),50,20,20);
    }
    tela=4;
    heroi.velocity.y=0;
    heroi.position.y = 450;
    auxcronometro=cronometro;
    som.stop();
  }
  
}

// ------------- Introdução --------------
function instrucoes(){
  background(img_introducao);
  
}
// ------------- Creditos --------------
function creditos(){
  background(img_creditos);
  
}
// ------------- GameOver --------------
function gameover(){
  background('black');
  image(img_over,120, 150);
  textSize(32);
  fill('#ED225D');
  textFont(myFont);
  text("Tempo que faltou: " + auxcronometro, 30, 300);
  text("Aperte ESC", 300, 400);
  colisao = 3;
  nivel = 1;
  cronometro = 30;
  var mov = 1;
 mov2 = 1;
 dificuldade = -5;
 dificuldadeBonus = -2;
 dificuldadeTempo = 0;
 
 condicaoTempo = 0;
 condicaoTempo2 = 0
 condicao = 1;
 condicao2 = 1;
 tempoCondicao = 0;
 tempoCondicao2 = 0;
  fundo.addImage(fundoImagem);
  fundo2.addImage(fundoImagem);
  jogo = true;
  
  
  
  
  
}
// ------------- Vitória --------------
function vitoria(){
  background(img_vitoria);
      
      
      if(aux>1){
        textSize(32);
        fill('#ED225D');
        textFont(myFont);
        text("Concluído fase " + nivel, 30, 300);
      }
      if(aux>2){
        textSize(32);
        fill('#ED225D');
        textFont(myFont);
        text("Tempo: 30s", 30, 350);
      }
      if(aux>3){
        BotaoContinue();
      }
      if(tempo < second()){
        aux++;

      }
    
    tempo = second();
  colisao = 3;

}


// ------------------- Pulo ---------------------
function keyPressed(){
  
  if(keyCode === UP_ARROW && salto==false){
    
    heroi.velocity.y-=15;
    salto = true;
    
  }
  
}

function moveBonus(){
  
  if(condicaoTempo2){
    if(tempoCondicao2 <= 0){
      condicao2 = 1;
      condicaoTempo2 = 0;
    }
  }
  
  if(condicao2){
    
    bonus.velocity.x= dificuldadeBonus;
    if(bonus.position.x < 0){
      bonus.position.x = width+50;
      tempoCondicao2 = Math.random()*5;
      escolhaBonus = parseInt(Math.random()*5);
      switch(escolhaBonus){
        case 1:
          bonus.addImage(luvas);
        break;
        case 2:
          bonus.addImage(juelheira);
        break;
        case 3:
          bonus.addImage(cotoveleira);
        break;
      }
      
      condicao2 = 0;
      condicaoTempo2 = 1;
    }
    
  }
  if(bonus.overlapPoint(heroi.position.x, heroi.position.y)){
      if(colisao<3){
        if(dano){
          colisao++;
          dano = false;
          somCura.play();
        }
        
      }
  }
}
function moveObstaculo(){
  
  if(condicaoTempo){
    if(tempo < second()){
      cronometro--;
      tempoCondicao--;
      if(condicaoTempo2){
        tempoCondicao2--;
      }
      dificuldadeTempo++;
      if(dificuldadeTempo ==5){
        dificuldade--;
        dificuldadeBonus--;
        dificuldadeTempo =0;
      }
    }
    if(tempoCondicao <= 0){
      condicao = 1;
      condicaoTempo = 0;
    }
    tempo = second();
    
  }
  
  if(condicao){
    
    obst.velocity.x= dificuldade;
    if(obst.position.x < 0){
      obst.position.x = width+50;
      tempoCondicao = Math.random()*5;
      escolhaObst = parseInt(Math.random()*3);
      if(escolhaObst==0){
        escolhaObst = 1;
      }
      switch(escolhaObst){
        case 1:
          obst.addImage(obstImage);
          obst.position.y = 435;
        break;
        case 2:
          obst.addImage(pare);
          obst.position.y = 285;
        break;
        case 3:
          obst.addImage(cones);
          obst.position.y = 435;
        break;
      }
      condicao = 0;
      condicaoTempo = 1;
    }

  }
  if(obst.overlapPoint(heroi.position.x, heroi.position.y)){  
    if(dano){
      heroi.velocity.y-=20;
      colisao--;
      somImpacto.play();
      dano = false;
    }
  }
}
function moveEstrada(){
  estrada.velocity.x= -5;
  if(estrada.position.x <= 0-300){
    
    estrada.position.x = 900;
      
  }
  estrada2.velocity.x= -5;
  if(estrada2.position.x <= 0-300){
    
    estrada2.position.x = 900;
      
  }
}
function moveFundo(){
  fundo.velocity.x= -2;
  if(fundo.position.x <= 0-300){
    
    fundo.position.x = 900;
     
  }
  fundo2.velocity.x= -2;
  if(fundo2.position.x <= 0-300){
    
    fundo2.position.x = 900;
      
  }
}