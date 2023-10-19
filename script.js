var player = "";
var bt1text = document.getElementById("bt1");
var bt2text = document.getElementById("bt2");
var bt3text = document.getElementById("bt3");
var bt4text = document.getElementById("bt4");
var bt5text = document.getElementById("bt5");
var bt6text = document.getElementById("bt6");
var bt7text = document.getElementById("bt7");
var bt8text = document.getElementById("bt8");
var bt9text = document.getElementById("bt9");



function whoStarts() {
    // Zufällige Zahl zwischen 0 und 1 generieren
    var zufallszahl = Math.random();
 
    // Wenn die Zahl kleiner als 0,5 ist, dann "X" zurückgeben, sonst "O"
    if (zufallszahl < 0.5) {
      player = "X";
      updateLabel();
    } else {
      player = "O";
      updateLabel();
    }
}
function checkwin(){
  if ((bt1text.innerHTML == "X" && bt2text.innerHTML == "X" && bt3text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt1text.innerHTML == "O" && bt2text.innerHTML == "O" && bt3text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
  if ((bt4text.innerHTML == "X" && bt5text.innerHTML == "X" && bt6text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt4text.innerHTML == "O" && bt5text.innerHTML == "O" && bt6text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
  if ((bt7text.innerHTML == "X" && bt8text.innerHTML == "X" && bt9text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt7text.innerHTML == "O" && bt8text.innerHTML == "O" && bt9text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
  if ((bt1text.innerHTML == "X" && bt4text.innerHTML == "X" && bt7text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt1text.innerHTML == "O" && bt4text.innerHTML == "O" && bt7text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
  if ((bt2text.innerHTML == "X" && bt5text.innerHTML == "X" && bt8text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt2text.innerHTML == "O" && bt5text.innerHTML == "O" && bt8text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
  if ((bt3text.innerHTML == "X" && bt6text.innerHTML == "X" && bt9text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt3text.innerHTML == "O" && bt6text.innerHTML == "O" && bt9text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
  if ((bt1text.innerHTML == "X" && bt5text.innerHTML == "X" && bt9text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt1text.innerHTML == "O" && bt5text.innerHTML == "O" && bt9text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
  if ((bt3text.innerHTML == "X" && bt5text.innerHTML == "X" && bt7text.innerHTML == "X")){
    alert(player + " hat gewonnen!");
  }
  if ((bt3text.innerHTML == "O" && bt5text.innerHTML == "O" && bt7text.innerHTML == "O")){
    alert(player + " hat gewonnen!");
  }
}
function placebt1() {
    if (bt1text.innerHTML == "Ö"){
      bt1text.innerHTML = player;
      bt1text.classList.add("showFont");
      bt1text.classList.add("newhover");
      nextplayer();
      checkwin()
    }
}
function placebt2() {
  if (bt2text.innerHTML == "Ö"){
    bt2text.innerHTML = player;
    bt2text.classList.add("showFont");
    bt2text.classList.add("newhover");
    checkwin();
    nextplayer();
    
    }
    
}
function placebt3() {
  if (bt3text.innerHTML == "Ö"){
    bt3text.innerHTML = player;
    bt3text.classList.add("showFont");
    bt3text.classList.add("newhover");
    checkwin();
    nextplayer();
    }
    
}
function placebt4() {
  if (bt4text.innerHTML == "Ö"){
    bt4text.innerHTML = player;
    bt4text.classList.add("showFont");
    bt4text.classList.add("newhover");
    checkwin()
    nextplayer();
    }
    
}
function placebt5() {
  if (bt5text.innerHTML == "Ö"){
    bt5text.innerHTML = player;
    bt5text.classList.add("showFont");
    bt5text.classList.add("newhover");
    checkwin()
    nextplayer();
    }
    
}
function placebt6() {
  if (bt6text.innerHTML == "Ö"){
    bt6text.innerHTML = player;
    bt6text.classList.add("showFont");
    bt6text.classList.add("newhover");
    checkwin()
    nextplayer();
    }
    
}
function placebt7() {
  if (bt7text.innerHTML == "Ö"){
    bt7text.innerHTML = player;
    bt7text.classList.add("showFont");
    bt7text.classList.add("newhover");
    checkwin()
    nextplayer();
    }
    
}
function placebt8() {
  if (bt8text.innerHTML == "Ö"){
    bt8text.innerHTML = player;
    bt8text.classList.add("showFont");
    bt8text.classList.add("newhover");
    checkwin()
    nextplayer();
    }
    
}
function placebt9() {
  if (bt9text.innerHTML == "Ö"){
    bt9text.innerHTML = player;
    bt9text.classList.add("showFont");
    bt9text.classList.add("newhover");
    checkwin()
    nextplayer();
    }
    
}



function updateLabel() {
    var label = document.getElementById("Label1");
    enterdtext = document.createElement(player)
    label.innerHTML = "Spieler " + player + " ist an der Reihe";
}

function onClick() {

   
}
window.onload = function(){
    whoStarts(); 
    buttontextupdate();
}
function buttontextupdate(){
 bt1text = document.getElementById("bt1");
 bt2text = document.getElementById("bt2");
 bt3text = document.getElementById("bt3");
 bt4text = document.getElementById("bt4");
 bt5text = document.getElementById("bt5");
 bt6text = document.getElementById("bt6");
 bt7text = document.getElementById("bt7");
 bt8text = document.getElementById("bt8");
 bt9text = document.getElementById("bt9");

 
}
function nextplayer(){
  if (player == "O"){
    player = "X"
  }
  else{
    player = "O"
  }
}
