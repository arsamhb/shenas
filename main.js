document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  setTimeout(() => {
    const topElement = document.getElementById("content-one");
    const main = document.getElementById("main");
    console.log(topElement.offsetTop);
    let myPath = document.getElementById("responsive-svg");
    myPath.setAttribute(
      "d",
      `
      M 0 0
      L 30 3000 
   `
    );
    console.log("done");
  }, 1000);
});

/* 
<svg xmlns="http://www.w3.org/2000/svg" width="1372" height="1903" viewBox="0 0 1372 1903" fill="none">
  <path d="
  M1408.5 0.5
  C1292 332 1000.48 295 649.5 295
  C298.523 295 0.5 333.5 0.5 593
  C0.5 852.5 228.5 930.5 677 930.5
  C1125.5 930.5 1294 984.5 1294 1260
  C1294 1535.5 983 1532.5 565.5 1531
  C148 1529.5 54.5 1902.5 54.5 1902.5" stroke="#CFB3FD"/>
</svg> */
