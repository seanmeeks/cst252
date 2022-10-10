//1. What element triggers the event? (button)
//2. What's the actual event (click, mousing over)
//3. What happens when that event happens

//1. The course box
//2.
//3. Course inforomation


//1. One of the course boxes
//2. mouseover
//3. The color of the box changes


//1. One of the courseboxes
//2. mouseout
//3. the box goes back to the way it was before

//the course boxesclick
//the info panel shows up
/////update the course name text
/////update the course description
/////change the picture


document.addEventListener("DOMContentLoaded", () => {
  let itemBox = document.querySelector('.itembox');
  let showPanel = (e)=> {
    console.log(e);

    let panel = document.querySelector("#infopanel");
    console.log(infopanel);
    panel.style.display = "block";

    let p = document.querySelector("#courseName");
    console.log(courseName);
    courseName.textContent = "CST 252: Scripting for Multiimedia ";

    let description = document.querySelector('#courseDescription');
    console.log(description);
    description.textContent = "A course about learning Javascript.";

    document.querySelector("#courseimage").src="images/cst252.jpg";
  }
  itemBox.addEventListener('click',showPanel);

  let theBorder = document.querySelector('.itembox');

  let showBorder = () => {
    theBorder.style.border = "thick solid";
}

  let hideBorder = () => {
    theBorder.style.border = 'none';
  }

  theBorder.addEventListener('mouseover', showBorder);
  theBorder.addEventListener('mouseout', hideBorder);

  let exitButton = document.querySelector('#exitbutton');
  let infoPanel = document.querySelector('#infopanel');
  let closePanel = () => {
   infoPanel.style.display = 'none';
 }
 exitButton.addEventListener('click',closePanel);

})
