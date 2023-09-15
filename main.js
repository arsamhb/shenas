function makeMovingCircles() {
  let movingObjs = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      style = `  
        position: absolute;
        left: 47.5vw;
        top: -25px;
        width: 50px;
        height: 50px;
        margin: auto;
        animation: circular-movement-${i + 1}-${j + 1} 40s infinite linear;
        background-image: url('./img/circle${j + i + 1}.png');
        background-repeat: no-repeat;
        background-position: center;`;

      movingObjs += `<div style="${style}"></div>`;
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
} ---- `;  */
