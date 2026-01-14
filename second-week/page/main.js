console.log("loaded");

let isBlack = false;


const body = document.querySelector("body");

  body.addEventListener("click", () => {
    isBlack = !isBlack;
    body.style.backgroundColor = isBlack ? "black" : "ivory";
  });
console.log(body);
