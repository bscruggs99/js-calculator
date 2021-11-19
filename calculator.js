let value = 0;
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

button.addEventListener("click", calc);
});

function calc(event) {
const clicked = event.target.value;

if(clicked === "=") {

	display.value = eval(display.value);
} else if(clicked === "C") {

	display.value = "";
} else {

	display.value += clicked;
}

}
