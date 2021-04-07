//http://www.colabeduc.org/descricao/show/480
var tela = 1; 
function setup() {
  createCanvas(854, 480);
}
//UPLOAD DE IMAGENS
let img;

function preload() {
  imgvoltar= loadImage('voltar.png');
  imgback = loadImage('Back.jpg');
  imgjogar = loadImage('Jogar.png');
  imgcreditos = loadImage('credito1.png')
  imginstruções = loadImage('Instruções.png') 
  imgtela2 = loadImage('Tela2.png')
  imgtela3 = loadImage('creditos.jpg')
  imgfase1 = loadImage('fase1.jpg')
}
//IMAGENS
function draw() {
  if (tela==1){
  background(176,224,230);
  image(imgback, 0, 0)
  image(imgjogar, 266, 120)
  image(imgcreditos, 266, 320)
  image(imginstruções, -10, 21)
//COMANDOS MOUSE
    if((mouseIsPressed) && mouseX>315 && mouseX<=315+220 && mouseY>240 && mouseY<=240+70){
      tela=2 }
    if((mouseIsPressed) && mouseX>315 && mouseX<=315+220 && mouseY>340 && mouseY<=340+65){
      tela=3}
    if((mouseIsPressed) && mouseX>315 && mouseX<=315+220 && mouseY>140 && mouseY<=140+65){
      tela=4}    
   }
  //Tela Intruções
  if(tela==2){
     image(imgtela2, 1, 1)
     image(imgvoltar, 10, 10)
  if((mouseIsPressed) && mouseX>10 && mouseX<=10+50 && mouseY>10 && mouseY<=10+50){
      tela=1 }}
  //Tela Créditos
     if(tela==3){
       image(imgtela3, 1, 1);
       image(imgvoltar, 10, 10);
       if((mouseIsPressed) && mouseX>10 && mouseX<=10+50 && mouseY>10 && mouseY<=10+50){
      tela=1
       }
     }
  //Tela Jogar
       else if(tela==4){
       image(imgfase1, 0, 0)
       image(imgvoltar, 10, 10);
       if((mouseIsPressed) && mouseX>10 && mouseX<=10+50 && mouseY>10 && mouseY<=10+50){
      tela=1
       }
}
}