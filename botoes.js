function BotaoContinue(){
  
  
  textAlign(CENTER);
  textSize(26);
  
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > 400 && mouseY < 400 + altura){
    stroke('red');
    if(mouseIsPressed){
      tela = 1;
      
      fundo.position.y = 235;
      fundo2.position.y = 235;
      fundo.addImage(fundofase2);
      fundo2.addImage(fundofase2);
      if(nivel ==1){
        cronometro = 120;
        nivel =2;
      }
      else if(nivel==2){
        cronometro = 999;
        nivel = 1;
      }
    }
  }
  else{
    stroke(255);
  }
  
  fill('#686868');
  rect(xMenu, 400, largura, altura, 10);
  
  
  fill(240);
  noStroke();
  textFont('Georgia');
  text("Continuar", 300, 432);
  
  
}


function botaoCredito(){
  
  textAlign(CENTER);
  textSize(26);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke('red');
    if(mouseIsPressed){
      tela = 3;
      
    }
  }
  else{
    stroke(255);
  }
  fill('#1b0047');
  rect(xMenu, yMenu3, largura, altura, 10);
  
  fill(240);
  noStroke();
  text("Creditos", 300, 505);
}


function botaoIntroducao(){
  textAlign(CENTER);
  textSize(26);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke('red');
    if(mouseIsPressed){
      tela = 2;
      
    }
  }
  else{
    stroke(255);
  }
  fill('#1b0047');
  rect(xMenu, yMenu2, largura, altura, 10);
  
  fill(240);
  noStroke();
  text("Instruções", 300, 445);
}


function botaoIniciar(){
  textAlign(CENTER);
  textSize(26);
  
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    stroke('red');
    if(mouseIsPressed){
      tela = 1;
      if(jogo){
        loadOpen();
        jogo=false;
      }
      if(nivel == 1){
        fundo.position.y = 200;
        fundo2.position.y = 200;
      }
      
    }
  }
  else{
    stroke(255);
  }
  
  fill('#1b0047');
  rect(xMenu, yMenu1, largura, altura, 10);
  
  
  fill(240);
  noStroke();
  textFont('Georgia');
  text("Iniciar", 300, 385);
}