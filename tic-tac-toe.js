
var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"
var buttonClicked = 0
function topLeft(){
  if(buttonClicked == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 45)
    myCircle.setAttribute("cy", 45)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 45)
    myCircle.setAttribute("cy", 45)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
  buttonClicked = 1
  }
}

var turn = "player1"
var buttonShape = 0
function topMiddle(){
if(buttonShape == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 145)
    myCircle.setAttribute("cy", 45)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonShape = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 145)
    myCircle.setAttribute("cy", 45)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
  buttonShape = 1
}
}

var turn = "player1"
var buttonClicked2 = 0
function topRight(){
  if(buttonClicked2 == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 245)
    myCircle.setAttribute("cy", 45)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked2 = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 245)
    myCircle.setAttribute("cy", 45)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
    buttonClicked2 = 1
  }
}
}

var turn = "player1"
var buttonClicked3 = 0
function middleLeft(){
  if(buttonClicked3 == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 45)
    myCircle.setAttribute("cy", 145)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked3 = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 45)
    myCircle.setAttribute("cy", 145)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
  buttonClicked3 = 1
}
}

var turn = "player1"
var buttonClicked5 = 0
function middleMiddle(){
  if(buttonClicked5 == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 145)
    myCircle.setAttribute("cy", 145)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked5 = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 145)
    myCircle.setAttribute("cy", 145)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
   buttonClicked5 = 1
  }
}

var turn = "player1"
var buttonClicked6 = 0
function middleRight(){
  if(buttonClicked6 == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 245)
    myCircle.setAttribute("cy", 145)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked6 = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 245)
    myCircle.setAttribute("cy", 145)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
  buttonClicked6 = 1
  }
}

var turn = "player1"
var buttonClicked7 = 0
function bottomLeft(){
  if(buttonClicked7 == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 45)
    myCircle.setAttribute("cy", 245)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked7 = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 45)
    myCircle.setAttribute("cy", 245)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
  buttonClicked7 = 1
  }
}

var turn = "player1"
var buttonClicked8 = 0
function bottomMiddle(){
  if(buttonClicked8 == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 145)
    myCircle.setAttribute("cy", 245)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked8 = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 145)
    myCircle.setAttribute("cy", 245)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
  buttonClicked8 = 1
  }
}

var turn = "player1"
var buttonClicked9 = 0
function bottomRight(){
  if(buttonClicked9 == 0){
  if(turn == "player1"){
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 245)
    myCircle.setAttribute("cy", 245)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "red" )
    canvas.appendChild(myCircle)
    buttonClicked9 = 1
    turn = "player2"
  }else{
    var myCircle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    myCircle.setAttribute("cx", 245)
    myCircle.setAttribute("cy", 245)
    myCircle.setAttribute("r", 30)
    myCircle.setAttribute("fill", "black" )
    canvas.appendChild(myCircle)
    turn = "player1"
  }
  buttonClicked9 = 1
  }
}
