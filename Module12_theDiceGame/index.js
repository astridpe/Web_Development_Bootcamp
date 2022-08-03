var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var heading = document.querySelector("h1");

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
