function getRandomInt() {
  return Math.floor(Math.random() * 100);
}


document.addEventListener('DOMContentLoaded', () => {
	let randomNumber = getRandomInt();
	document.querySelector('#secretNumber').textContent = randomNumber;

  let inputBox = document.querySelector('#inputBox');

  let checkNumber = (e) => {
    console.log(+e.currentTarget.value);
    let userInput = e.currentTarget.value;
    if (userInput === randomNumber) {
      console.log("You guessed it!");
    }
    else {
      console.log("Wrong answer!");
    }
  }

  inputBox.addEventListener('input', checkNumber);


})
