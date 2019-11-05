$(document).ready(function() {


//Global variables
var randNum = []



//Generate a random number between 19 and 120
var randNum = Math.floor(Math.random() * 102) + 19;
console.log(randNum);

//Write random number to page
$("#randomNumber").html(randNum);

//Generate 4 random numbers between 1 and 12
var diamondRandom = Math.floor(Math.random() * 12) + 1;
var emeraldRandom = Math.floor(Math.random() * 12) + 1;
var rubyRandom = Math.floor(Math.random() * 12) + 1;
var sapphireRandom = Math.floor(Math.random() * 12) + 1;

//Assign 4 random generated numbers to individual gems


//Each click on each gem adds its random value to userscore
var startScore = 0;
var userScore;
var scoreHolder = "";

$("#userScore").text(startScore);

$(".img1").on("click", function(){
    $("#img1").val(diamondRandom);
    $("#userScore").text(scoreHolder + diamondRandom);
    
    //userScore = Number(diamondRandom) + Number($(this).val());
    //$("#userScore").text(userScore);
});

$(".img2").on("click", function(){
    userScore = Number(emeraldRandom) + Number($(this).val());
    $("#userScore").text(userScore);
});

$(".img3").on("click", function(){
    userScore = Number(rubyRandom) + Number($(this).val());
    $("#userScore").text(userScore);
});

$(".img4").on("click", function(){
    userScore = Number(sapphireRandom) + Number($(this).val());
    $("#userScore").text(userScore);
});


//Evaluate userscore and random number, if userscore > random number, you lose
//If userscore and random number ===, you win
//If userscore < random number, keep playing













})