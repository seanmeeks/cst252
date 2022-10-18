document.addEventListener("DOMContentLoaded", () => {
  let theBorder = document.querySelector('.box1');

  let showBorder = () => {
    theBorder.style.border = "thick solid";
}

  let hideBorder = () => {
    theBorder.style.border = 'none';
  }

    theBorder.addEventListener('mouseover', showBorder);
    theBorder.addEventListener('mouseout', hideBorder);
});

document.addEventListener("DOMContentLoaded", () => {
  let theBorder = document.querySelector('.box2');

  let showBorder = () => {
    theBorder.style.border = "thick solid";
}

  let hideBorder = () => {
    theBorder.style.border = 'none';
  }

    theBorder.addEventListener('mouseover', showBorder);
    theBorder.addEventListener('mouseout', hideBorder);
});

document.addEventListener("DOMContentLoaded", () => {
  let theBorder = document.querySelector('.box3');

  let showBorder = () => {
    theBorder.style.border = "thick solid";
}

  let hideBorder = () => {
    theBorder.style.border = 'none';
  }

    theBorder.addEventListener('mouseover', showBorder);
    theBorder.addEventListener('mouseout', hideBorder);
});

document.addEventListener("DOMContentLoaded", () => {
  let theBorder = document.querySelector('.box4');

  let showBorder = () => {
    theBorder.style.border = "thick solid";
}

  let hideBorder = () => {
    theBorder.style.border = 'none';
  }

    theBorder.addEventListener('mouseover', showBorder);
    theBorder.addEventListener('mouseout', hideBorder);

  let box1 = document.querySelectorAll('.box1');
  let turnYellow = (div) => {
      div.style.backgroundColor = '#ffff00';
    }
    box1.forEach(turnYellow);

    let box2 = document.querySelectorAll('.box2');
    box2.forEach(turnYellow);

    let box3 = document.querySelectorAll('.box3');
    box3.forEach(turnYellow);

    let box4 = document.querySelectorAll('.box4');
    box4.forEach(turnYellow);
});
