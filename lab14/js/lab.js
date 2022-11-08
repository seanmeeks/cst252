document.addEventListener("DOMContentLoaded", () => {


	//putting the input box into a variable
	let inputBox = document.querySelector('.guessingBox');


	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"
	let inputHandler = () => {
		if (+inputBox.value === '6') {
			let newBox = document.createElement('div');
			newBox.classList.add('box');
			newBox.textContent = "You won!";
		}
	};

	inputBox.addEventListener('input', inputHandler);

});
