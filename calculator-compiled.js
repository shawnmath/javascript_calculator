"use strict";

(function () {

	// Function expression to be evaluated
	var expression = "";

	// Display Calculator input & populate expression
	var calcDisplay = document.querySelector("#operation_display"),
	    answer = document.querySelector("#answer"),
	    inputs = document.querySelectorAll(".input");

	function registerCalcInput() {
		var inputValue = this.childNodes[1];
		calcDisplay.innerHTML += inputValue.textContent;
		inputValue.dataset.operand !== undefined ? expression += inputValue.dataset.operand : expression += inputValue.textContent;
		calcDisplay.classList.add("active");
	}

	inputs.forEach(function (input) {
		return input.addEventListener("click", registerCalcInput);
	});

	// Clear calc display & expression val
	document.querySelector(".clear").addEventListener("click", function () {
		calcDisplay.innerHTML = "";
		answer.innerHTML = "";
		expression = "";
		calcDisplay.classList.remove("active");
		answer.classList.remove("active");
	});

	// Calculate Inputs
	document.querySelector(".enter").addEventListener("click", function () {
		var theAnswer = new Function("return " + expression)();
		if (isFinite(theAnswer)) {
			answer.innerHTML = theAnswer;
		} else {
			answer.innerHTML = 0;
			expression = "";
		}
		answer.classList.add("active");
	});
})();
