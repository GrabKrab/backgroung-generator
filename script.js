var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var random = document.querySelector(".random");
console.log(random);
// var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.innerText=body.style.background;
}

function randomNumber() {
	return Math.floor(Math.random() * 256);
}

function numberToHex(n) {
  var hex = n.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function randomColors() {
	color1.value = "#"
	+ numberToHex(randomNumber())
	+ numberToHex(randomNumber())
	+ numberToHex(randomNumber());
	color2.value = "#"
	+ numberToHex(randomNumber())
	+ numberToHex(randomNumber())
	+ numberToHex(randomNumber());
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

random.addEventListener("click", randomColors)