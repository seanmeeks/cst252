/**
 * Author:    Sean Meeks
 * Created:   04.10.2022
 *
 *           CSUMB
 **/

function ready (){
  let outputEl = document.querySelector("#output");
  let oneEl = document.createElement("button");
  let twoEl = document.createElement("button");

  outputEl.appendChild(oneEl);
  oneEl.textContent = 'BUTTON';
  oneEl.style.color= 'red';

  outputEl.appendChild(twoEl);
  twoEl.textContent = 'BUTTON';
  twoEl.style.backgroundColor = 'blue';
  twoEl.style.color='orange';
}
