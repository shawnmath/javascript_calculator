(function(){
	
	// Function expression to be evaluated
	let expression = "";


	// Display Calculator input & populate expression
	const calcDisplay = document.querySelector("#operation_display"),
		  answer = document.querySelector("#answer"),
		  inputs = document.querySelectorAll(".input");
	
	function registerCalcInput() {
		let inputValue = this.childNodes[1];
		calcDisplay.innerHTML += inputValue.textContent;
		inputValue.dataset.operand !== undefined ? expression += inputValue.dataset.operand : expression += inputValue.textContent;
		calcDisplay.classList.add("active");
	}

	inputs.forEach(input => input.addEventListener("click", registerCalcInput));


	// Clear calc display & expression val
	document
		.querySelector(".clear")
		.addEventListener("click", () => {
			calcDisplay.innerHTML = "";
			answer.innerHTML = "";
			expression = "";
			calcDisplay.classList.remove("active");
			answer.classList.remove("active");
		});


	// Calculate Inputs
	document
		.querySelector(".enter")
		.addEventListener("click", () => {
			let theAnswer = new Function("return " + expression)();
			if (isFinite(theAnswer)) {
				answer.innerHTML = theAnswer;					
			} else {
				answer.innerHTML = 0;
				expression = "";
			}						
			answer.classList.add("active");
		});
})();
		