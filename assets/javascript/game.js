$(document).ready(function() {

//Global variables
var randNum = []

//Generate a random number between 19 and 120
var randNum = Math.floor(Math.random() * 102) + 19;
console.log(randNum);

//Write random number to page
$("#randomNumber").html(randNum);

//Generate 4 random numbers between 1 and 12
//Assign 4 random generated numbers to individual gems
var diamondRandom = Math.floor(Math.random() * 12) + 1;
var emeraldRandom = Math.floor(Math.random() * 12) + 1;
var rubyRandom = Math.floor(Math.random() * 12) + 1;
var sapphireRandom = Math.floor(Math.random() * 12) + 1;

//Each click on each gem adds its random value to userscore
//Evaluate userscore and random number, if userscore > random number, you lose
//If userscore and random number ===, you win
//If userscore < random number, keep playing
var startScore = 0;
var userScore = parseInt(0);
var winCounter = 0;
var lossCounter = 0;

$("#userScore").text(startScore);

$("#diamond").on("click", function(){
    userScore += diamondRandom
    $("#userScore").text(userScore);
    if(userScore === randNum) {
        winCounter++;
        document.getElementById("wins").innerHTML = winCounter;
        alert("Winner Winner");
    }
    else if (userScore > randNum) {
        lossCounter++;
        document.getElementById("losses").innerHTML = lossCounter;
        alert("You Lose!");
    }
});

$("#emerald").on("click", function(){
    userScore += emeraldRandom
    $("#userScore").text(userScore);
    if(userScore === randNum) {
        winCounter++;
        document.getElementById("wins").innerHTML = winCounter;
        alert("Winner Winner");
    }
    else if (userScore > randNum) {
        lossCounter++;
        document.getElementById("losses").innerHTML = lossCounter;
        alert("You Lose!");
    }
});

$("#ruby").on("click", function(){
    userScore += rubyRandom
    $("#userScore").text(userScore);
    if(userScore === randNum) {
        winCounter++;
        document.getElementById("wins").innerHTML = winCounter;
        alert("Winner Winner");
    }
    else if (userScore > randNum) {
        lossCounter++;
        document.getElementById("losses").innerHTML = lossCounter;
        alert("You Lose!");
    }
});

$("#sapphire").on("click", function(){
    userScore += sapphireRandom
    $("#userScore").text(userScore);
    if(userScore === randNum) {
        winCounter++;
        document.getElementById("wins").innerHTML = winCounter;
        alert("Winner Winner");
    }
    else if (userScore > randNum) {
        lossCounter++;
        document.getElementById("losses").innerHTML = lossCounter;
        alert("You Lose!");
    }
});















})