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
let showPanel = (e)=> {
  console.log(e);

  let panel = document.querySelector("#infopanel");
  console.log(infopanel);
  panel.style.display = "block";


  let p = document.querySelector("#courseName");
  console.log(courseName);
  courseName.textContent = "CST 252";
}

document.addEventListener("DOMContentLoaded", () => {

});


//1. The exit button
//2. clicking
//3. The info panel/popup hides (disappears)
