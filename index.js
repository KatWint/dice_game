var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";

var player1 = document.querySelectorAll("img")[0];
var player2 = document.querySelectorAll("img")[1]; 

player1.setAttribute("src", randomDice1);
player2.setAttribute("src", randomDice2);
var playerwins = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    playerwins.innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    playerwins.innerHTML = "Player 2 Wins";
} else {
    playerwins.innerHTML = "Draw - Try Again";
}






