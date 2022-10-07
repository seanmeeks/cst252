let button = document.getElementById('btn');
let result = document.querySelector('.results');


let handle = (e) => {
 console.log('goodbye!');
 console.log(e);
 let header = document.querySelector('h1');
 header.style.color = 'red';
};

let subheading = (e) => {
  console.log(e);
  let results = document.querySelector('.results');
  results.style.color = 'green'
  let challenge = document.querySelector('.challenge');
  challenge.style.color = 'green'
  let problems = document.querySelector('.problems');
  problems.style.color = 'green';
}

let yass = (e) => {
  console.log(e);
  let resultz = document.querySelector('.results');
  resultz.style.color = 'red'
  let challenged = document.querySelector('.challenge');
  challenged.style.color = 'red'
  let problemo = document.querySelector('.problems');
  problemo.style.color = 'red';
}

addEventListener("click", handle);
addEventListener("mouseover", subheading);
addEventListener("mouseout", yass);
