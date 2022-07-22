x = 0;
y = 0;

width = "";
height = "";

apple= "";

function preload(){
apple= loadImage("a.png");
}

draw_apple = "";



var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 to_number = Number(content);}

 if (content == to_number + "Apples."){
  document.getElementById("status").innerHTML = "Initializing 'Apple' ";
  draw_apple= "set"
}

function setup() {

 width= window.innerWidth;
 height= window.innerHeight;
 canvas= createCanvas(width, height - 150)
 canvas.position(0, 100)

}

function draw() {
  if(draw_apple == "set")
  {
    for(var a=1; a <= to_number ; a ++){
      x= Math.floor(Math.random * 700);
      y= Math.floor(Math.random * 400) ;
      image(apple, x, y, 50, 50);
    } 
    speak_data = to_number +  "Apple/s drawn";
    document.getElementById("status").innerHTML = to_number + " Apple/s drawn";
    draw_apple = "";
  }
  
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}
