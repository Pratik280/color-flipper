let btn = document.querySelector(".btn");
let textValue = document.querySelector(".main__color");
let body = document.querySelector("body");

var currentColor;

function changeColor(e) {
  var currentColor = Math.floor(Math.random()*16777215).toString(16);
  textValue.textContent = "#" + currentColor;
  body.style.background = "#" + currentColor;
}

btn.onclick = changeColor;

// text value and bg color = current color
