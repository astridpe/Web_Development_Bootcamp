let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let heading = document.querySelector("h1");

img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML  = "🚩 Player 1 wins";

}
else if (randomNumber1 === randomNumber2) {
  heading.innerHTML = "Draw!";
}
else {
  heading.innerHTML = "Player 2 wins 🚩";

}
