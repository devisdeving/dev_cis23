let body = document.body;
let button = document.querySelector(".button");

function turnOnLight() {
    body.classList.toggle("light");
    button.classList.toggle("buttonOn");
}

button.addEventListener("click", turnOnLight);