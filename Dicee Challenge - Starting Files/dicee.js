var randomNumber1 = Math.floor((Math.random()*6)+1); //1-6
var randomNumber2 = Math.floor((Math.random()*6)+1);

// Change image with each dice roll
document.querySelector(".dice .img1").setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelector(".dice .img2").setAttribute("src",`images/dice${randomNumber2}.png`);

// Chanbe title with each dice roll
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector(".container h1").innerText = "Draw";
}