document.addEventListener("DOMContentLoaded", () => {

  let box = document.querySelector('.box');

  console.log(box);

  let animateFunction = (e) => {
    box.classList.add('boxFinal');
  };
  box.addEventListener('click', animateFunction);

let nickiImage = document.querySelector('.nickiDiv');

let changeImage = (e) => {
  document.querySelector('.nicki').src="img/nicki.jpeg";
}
  nickiImage.addEventListener('mouseover', changeImage);

    let revertImage = (e) => {
      document.querySelector('.nicki').src="img/yikes.png"
    }
    nickiImage.addEventListener('mouseout', revertImage);
});
