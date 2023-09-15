function makeMovingCircles() {
  const screenWidth = $(window).width();
  let top = "-25px";
  let left = "47.5vw";
  let movingObjs = "";
  numberForimage = 1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      style = `  
        position: absolute;
        top: ${top};
        left: ${left};
        width: 50px;
        height: 50px;
        border-radius : 100%
        margin: auto;
        animation: circular-movement-${i + 1}-${j + 1} ${
        i == 0 ? "10s" : i == 1 ? "10s" : "10s"
      } infinite linear;
        animation-direction: ${i == 1 ? "reverse" : "normal"}; 
        background-image: url('./img/circle${
          numberForimage == 15 ? 5 : numberForimage
        }.png');
        background-repeat: no-repeat;
        background-position: center;`;

      movingObjs += `<div style="${style}"></div>`;
      numberForimage++;
    }
  }
  $("#circles-cotainer").append(movingObjs);
}

makeMovingCircles();

/*let animation;
animation += `@keyframes circular-movement-${i + 1}-${j + 1} {
    0% {
        transform: rotate(${0 - 360 * (j / 5) + i * 25}deg) translateY(${
        30 + i * 7.5
      }vw) rotate(${-(0 - 360 * (j / 5) + i * 25)}deg);
    }

    100% {
        transform: rotate(${360 - 360 * (j / 5) + i * 25}deg) translateY(${
        30 + i * 7.5
      }vw) rotate(-${360 - 360 * (j / 5) + i * 25}deg);
    }
} ---- `;  
*/
