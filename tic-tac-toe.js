// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

  function topLeft(){
  var myCircle = document.createElementNS(namespace, "circle")
  myCircle.setAttribute("cx", 45)
  myCircle.setAttribute("cy", 45)
  myCircle.setAttribute("r", 30)
  myCircle.setAttribute("fill", "black")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(myCircle)
}
