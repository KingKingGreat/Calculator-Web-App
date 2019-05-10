// Step 1: Find the element we want the event on
var calcButton = document.getElementById("calcButton");
// Step 2: Define the event listener function
	     
function onButtonClick() {
	var num1 = parseInt(document.getElementById("val1").value);
	var num2 = parseInt(document.getElementById("val2").value);
	var operator = document.getElementById("operator").value;
	var result = parseInt(num1) + parseInt(num2);

	if (!num1) {
		document.getElementById("eText").textContent = "Please insert value on input 1"; 
		return null;
	} else if (!num2) {
		document.getElementById("eText").textContent = "Please insert value on input 2"; 
		return null;
	} if (!operator) {
		document.getElementById("eText").textContent = "Please pick an operator"; 
		return null;
	}

	if (operator === "plus") {
		document.getElementById("rText").innerHTML = "Question : " + num1 + " + " + num2 + "<br>";  
	    result = num1 + num2;
	} else if (operator === "min") {
		document.getElementById("rText").innerHTML = "Question : " + num1 + " - " + num2 + "<br>"; 
	    result = num1 - num2;
	} else if (operator === "div") {
		document.getElementById("rText").innerHTML = "Question : " + num1 + " / " + num2 + "<br>"; 
	    result = num1 / num2;
	} else {
		document.getElementById("rText").innerHTML = "Question : " + num1 + " * " + num2 + "<br>"; 
	    result = num1 * num2;
	}
	document.getElementById("rText").innerHTML += "Result : " + result;  
}
// Step 3: Attach event listener to element
calcButton.addEventListener("click", onButtonClick);