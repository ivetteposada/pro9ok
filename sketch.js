var btn_red 
var btn_BLUE 
var r=0 
var g=0 
var b=0 

function setup()
{ 
  createCanvas(1000,1000); 
  btn_red=createButton("ROJO")
  btn_red.position(200,200) 
  btn_red.mousePressed(red_bg) 
  btn_BLUE=createButton("AZUL") 
  btn_BLUE.position(400,400) 
  btn_BLUE.mousePressed(BLUE) } 
  
  function draw(){ 
    background(r,g,b) } 
    
    function red_bg()
    { r=255; g=0; b=0; } 
    function BLUE(){ 
      r=0; g=0;b=255 }