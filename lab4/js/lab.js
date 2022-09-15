function flowerFunction() {
	//initialize();

	//YOUR CODE GOES RIGHT HERE

  //this code adds the two variables together to get the nnumber in the center of the last flower
	document.querySelector("#flower5 .center").textContent = document.querySelector("#flower1 .center").textContent + document.querySelector("#flower3 .center").textContent;

  //this code changes the center of the flower's color to red
  document.querySelector("#flower5 .center").style.backgroundColor = "red";

  //this code changes the text in the center of the flower's color to black
	document.querySelector("#flower5 .center").style.color = "black";

  //this code changes the left petal of the flower's color to green
  document.querySelector("#flower4 .petal").style.backgroundColor = "green";

	document.querySelector(`#flower1`).style.marginTop = "100px";
	document.querySelector(`#flower2`).style.marginTop = "100px";
	document.querySelector(`#flower3`).style.marginTop = "100px";
	document.querySelector(`#flower4`).style.marginTop = "100px";
	document.querySelector(`#flower5`).style.marginTop = "100px";

	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();



}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}
