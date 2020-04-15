var randomNumber1 = Math.floor(Math.random() * 6 + 1);

if (randomNumber1 == 1){
  Ifa1()
}
else if(randomNumber1 == 2){
  Ifa2()
}
else if(randomNumber1 == 3){
  Ifa3()
}

else if(randomNumber1 == 4){
  Ifa4()
}

else if(randomNumber1 == 5){
  Ifa5()
}

else if(randomNumber1 == 6){
  Ifa6()
}

else{

}
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

if (randomNumber2 == 1){
  If1()
}
else if(randomNumber2 == 2){
  If2()
}
else if(randomNumber2 == 3){
  If3()
}

else if(randomNumber2 == 4){
  If4()
}

else if(randomNumber2 == 5){
  If5()
}

else if(randomNumber2 == 6){
  If6()
}

else{

}

function If1(){

  document.querySelectorAll("img");
  document.querySelector("img#img2").getAttribute("src");
  document.querySelector("img#img2").setAttribute("src", "dice1.png");

 }

 function If2(){
   document.querySelectorAll("img");
   document.querySelector("img#img2").getAttribute("src");
   document.querySelector("img#img2").setAttribute("src", "dice2.png");

 }
function If3(){
  document.querySelectorAll("img");
  document.querySelector("img#img2").getAttribute("src");
  document.querySelector("img#img2").setAttribute("src", "dice3.png");

}
function If4(){
  document.querySelectorAll("img");
  document.querySelector("img#img2").getAttribute("src");
  document.querySelector("img#img2").setAttribute("src", "dice4.png");

}
function If5(){
  document.querySelectorAll("img");
  document.querySelector("img#img2").getAttribute("src");
  document.querySelector("img#img2").setAttribute("src", "dice5.png");

}
function If6(){
  document.querySelectorAll("img");
  document.querySelector("img#img2").getAttribute("src");
  document.querySelector("img#img2").setAttribute("src", "dice6.png");

}

function Ifa1(){

  document.querySelectorAll("img");
  document.querySelector("img").getAttribute("src");
  document.querySelector("img").setAttribute("src", "dice1.png");

 }

 function Ifa2(){
   document.querySelectorAll("img");
   document.querySelector("img").getAttribute("src");
   document.querySelector("img").setAttribute("src", "dice2.png");

 }
function Ifa3(){
  document.querySelectorAll("img");
  document.querySelector("img").getAttribute("src");
  document.querySelector("img").setAttribute("src", "dice3.png");

}
function Ifa4(){
  document.querySelectorAll("img");
  document.querySelector("img").getAttribute("src");
  document.querySelector("img").setAttribute("src", "dice4.png");

}
function Ifa5(){
  document.querySelectorAll("img");
  document.querySelector("img").getAttribute("src");
  document.querySelector("img").setAttribute("src", "dice5.png");

}
function Ifa6(){
  document.querySelectorAll("img");
  document.querySelector("img").getAttribute("src");
  document.querySelector("img").setAttribute("src", "dice6.png");

}

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 won";
}
else if(randomNumber1 = randomNumber2){
  document.querySelector("h1").innerHTML = "Draw";
}
