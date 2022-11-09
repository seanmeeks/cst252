document.addEventListener("DOMContentLoaded", () => { // events are live at the same time


	//putting the input box into a variable
	let inputBox = document.querySelector('.guessingBox');


	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"

	let inputHandler = () => { //function/event that's supposed to occur if input is correct
		if (+inputBox.value === '6') { //sets input value as a variable
			let newBox = document.createElement('div'); //creates new div for box
			newBox.classList.add('box'); //creates a new class in the div
			newBox.textContent = "You won!"; //adds text to the new box
		}
	};

	inputBox.addEventListener('input', inputHandler); //event occurs when numnber is correctly input into the input box

});
