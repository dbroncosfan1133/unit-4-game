$(document).ready(function () {
    //Global varibles
    //Generate a random number between 19 and 120
    //Generate 4 random numbers between 1 and 12
    //Assign 4 random generated numbers to individual gems
    var startScore = 0;
    var userScore = 0;
    var winCounter = 0;
    var lossCounter = 0;
    var randNum = Math.floor(Math.random() * 102) + 19;
    var diamondRandom = Math.floor(Math.random() * 12) + 1;
    var emeraldRandom = Math.floor(Math.random() * 12) + 1;
    var rubyRandom = Math.floor(Math.random() * 12) + 1;
    var sapphireRandom = Math.floor(Math.random() * 12) + 1;

    function resetGame() {
        startScore = 0;
        userScore = 0;
        diamondRandom = 0;
        emeraldRandom = 0;
        rubyRandom = 0;
        sapphireRandom = 0;
        randNum = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").text(randNum);
        $("#userScore").text(startScore);

        startGame();
    }
    //Start game, select random numbers for gems and target number
    function startGame() {

        randNum = Math.floor(Math.random() * 102) + 19;
        diamondRandom = Math.floor(Math.random() * 12) + 1;
        emeraldRandom = Math.floor(Math.random() * 12) + 1;
        rubyRandom = Math.floor(Math.random() * 12) + 1;
        sapphireRandom = Math.floor(Math.random() * 12) + 1;

        //Testing
        console.log(diamondRandom);
        console.log(emeraldRandom);
        console.log(rubyRandom);
        console.log(sapphireRandom);

        //Write random number and userScore to page
        $("#randomNumber").text(randNum);
        $("#userScore").text(startScore);
    }

    //Each click on each gem adds its random value to userscore
    //Evaluate userscore and random number, if userscore > random number, you lose
    //If userscore and random number ===, you win
    //If userscore < random number, keep playing
    $("#diamond").on("click", function () {
        userScore += diamondRandom
        $("#userScore").text(userScore);
        if (userScore === randNum) {
            winCounter++;
            document.getElementById("wins").innerHTML = winCounter;
            alert("Winner Winner");
            resetGame();
        }
        else if (userScore > randNum) {
            lossCounter++;
            document.getElementById("losses").innerHTML = lossCounter;
            alert("You Lose!");
            resetGame();
        }
    });

    $("#emerald").on("click", function () {
        userScore += emeraldRandom
        $("#userScore").text(userScore);
        if (userScore === randNum) {
            winCounter++;
            document.getElementById("wins").innerHTML = winCounter;
            alert("Winner Winner");
            resetGame();
        }
        else if (userScore > randNum) {
            lossCounter++;
            document.getElementById("losses").innerHTML = lossCounter;
            alert("You Lose!");
            resetGame();
        }
    });

    $("#ruby").on("click", function () {
        userScore += rubyRandom
        $("#userScore").text(userScore);
        if (userScore === randNum) {
            winCounter++;
            document.getElementById("wins").innerHTML = winCounter;
            alert("Winner Winner");
            resetGame();
        }
        else if (userScore > randNum) {
            lossCounter++;
            document.getElementById("losses").innerHTML = lossCounter;
            alert("You Lose!");
            resetGame();
        }
    });

    $("#sapphire").on("click", function () {
        userScore += sapphireRandom
        $("#userScore").text(userScore);
        if (userScore === randNum) {
            winCounter++;
            document.getElementById("wins").innerHTML = winCounter;
            alert("Winner Winner");
            resetGame();
        }
        else if (userScore > randNum) {
            lossCounter++;
            document.getElementById("losses").innerHTML = lossCounter;
            alert("You Lose!");
            resetGame();
        }
    });


    startGame();
})