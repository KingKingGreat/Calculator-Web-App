// Connect Button
var calcButton = document.getElementById("calcButton");

// Animation Function
function animate(id, v) {
	// Connect Parameters
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);

	// Check for true & false
	if (v) {
		// Fade In
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		// Fade Out
		if (currentOpacity > 0) {
		    element.style.opacity = currentOpacity - 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}
	}
};

// Animation Function
function animate(id, v) {
	// Connect Parameters
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);

	// Check for true & false
	if (v) {
		// Fade In
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		// Fade Out
		if (currentOpacity > 0) {
		    element.style.opacity = currentOpacity - 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}
	}
};

// Declare onButtonClick Function
function onButtonClick() {
	// Connect Parameters
	var num1 = parseFloat(document.getElementById("val1").value);
	var num2 = parseFloat(document.getElementById("val2").value);
	var operator = document.getElementById("operator").value;
	var result;

	// Check for invalid parameters
	if (!num1) {
		document.getElementById("eText").textContent = "Please insert value on input 1"; 
		return null;
	} else if (!num2) {
		document.getElementById("eText").textContent = "Please insert value on input 2"; 
		return null;
	} else if (!operator) {
		document.getElementById("eText").textContent = "Please pick an operator"; 
		return null;
	} else {
		// Check for invalid operator
		if (operator === "plus") {
			// Plus
			document.getElementById("rText").innerHTML = "Question : " + num1 + " + " + num2 + "<br>";  
		    result = num1 + num2;
		} else if (operator === "min") {
			// Min
			document.getElementById("rText").innerHTML = "Question : " + num1 + " - " + num2 + "<br>"; 
		    result = num1 - num2;
		} else if (operator === "div") {
			// Divide
			document.getElementById("rText").innerHTML = "Question : " + num1 + " / " + num2 + "<br>"; 
		    result = num1 / num2;
		} else {
			// Multiply
			document.getElementById("rText").innerHTML = "Question : " + num1 + " * " + num2 + "<br>"; 
		    result = num1 * num2;
		}
		// Display Result
		document.getElementById("rText").innerHTML += "Result : " + result;  
	}
}

// Declare Animation Variable
var fade;

// Add Event Listener on Button
calcButton.addEventListener("click", onButtonClick);

// On Start Up

// Hide Body
document.getElementById("body").style.opacity = 0;

// Set Scrollbar to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Display Version
var d = new Date();
document.getElementById("version").innerHTML = "<strong>Version 2.0.2019519.131601.LM</strong><br>© " + d.getFullYear() + " KingKingGreat";

// Fade in page
fade = window.setInterval(function() {animate("body", true)}, 100);
