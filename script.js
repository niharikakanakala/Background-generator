var css = document.querySelector("h3");
var paint1 = document.querySelector(".paint1");
var paint2 = document.querySelector(".paint2");
var body = document.getElementById("gradient");

function bgcolor() {
    body.style.background = 
    "linear-gradient(to right, "  + paint1.value + ", " + paint2.value + ")";
  css.textContent = body.style.background + ";";
}

paint1.addEventListener("input",bgcolor)

paint2.addEventListener("input", bgcolor)

