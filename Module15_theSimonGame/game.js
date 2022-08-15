
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let gameStarted = false;
let level = 0;

$(document).keypress(function(){
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence()
    gameNotStarted = true;
  }
});

$(".btn").click(function(){
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence()
      }, 1000);
    }

  }
  else {
    let gameOverSound = new Audio("sounds/wrong.mp3");
    gameOverSound.play();
    let redBackground = $("body");
    redBackground.addClass("game-over");

    setTimeout(function(){
      redBackground.removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver()
  }
}

function nextSequence(){
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function playSound(name){
  let sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColour) {
  let activeButton = $("#" + currentColour);
  activeButton.addClass("pressed");

  setTimeout(function(){
    activeButton.removeClass("pressed");
  }, 100);
}

function startOver(){
  level = 0;
  gamePattern = [];
  gameNotStarted = true;
}
