// variables
var userText = document.getElementById("user");
var computerText = document.getElementById("computer");
var result = document.getElementById("result");
var userScore = document.getElementById("userScore");
var computerScore = document.getElementById("computerScore");
var html_user_image = document.getElementById("user_image");
var html_cpu_image = document.getElementById("cpu_image");
var num_games = document.getElementById("games");

// user and computer variables   
var computerChoices = ["r", "p", "s"];
var userScore_count = 0;
var computerScore_count = 0;
var num_games_count = 0;
var userGuess;
var computerGuess = function () { return computerChoices[Math.floor(Math.random() * computerChoices.length)]; }
var computerReturn = function (play) {
    var text;
    switch (play) {
        case "r":
            text = "ROCK"
            html_cpu_image.src = "./css/images/rock.png"
            break;
        case "p":
            text = "PAPER"
            html_cpu_image.src = "./css/images/paper.png"
            break;
        case "s":
            text = "SCISSORS"
            html_cpu_image.src = "./css/images/scissors.png"
            break;
    }
    return text;
}

// if user === rock

document.getElementById("rock").onclick = function () {
    userGuess = "r";
    userText.textContent = "ROCK";
    html_user_image.src = "./css/images/rock.png"
    console.log(computerGuess());

    let play = computerGuess();
    computerText.textContent = computerReturn(play);

    return game(userGuess, play);
}

// if user === paper

document.getElementById("paper").onclick = function () {
    userGuess = "p";
    userText.textContent = "PAPER";
    html_user_image.src = "./css/images/paper.png"
    console.log(computerGuess());

    let play = computerGuess();
    computerText.textContent = computerReturn(play);

    return game(userGuess, play);
}

// if user === scissors

document.getElementById("scissors").onclick = function () {
    userGuess = "s";
    userText.textContent = "SCISSORS";
    html_user_image.src = "./css/images/scissors.png"
    console.log(computerGuess());

    let play = computerGuess();
    computerText.textContent = computerReturn(play);

    return game(userGuess, play);
}

// conditions

let game = function (user, computer) {
    num_games_count++;
    num_games.textContent = num_games_count;

    if (user == computer) {
        result.textContent = "Tie!";
        result.style = "color: rgb(99, 189, 187)";
    } else if (user == "r") {
        if (computer == "s") {
            userScore_count = userScore_count + 1;
            // userScore_count ++;
            result.textContent = "WIN";
            result.style = "color: rgb(245, 188, 74)";
            console.log(userScore_count);
        } else if (computer == "p") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "YOU LOSE";
            result.style = "color: rgb(243, 102, 82)";
        }
    } else if (user == "p") {
        if (computer == "r") {
            userScore_count = userScore_count + 1;
            result.textContent = "WIN";
            result.style = "color: rgb(245, 188, 74)";
            console.log(userScore_count);
        } else if (computer == "s") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "YOU LOSE";
            result.style = "color: rgb(243, 102, 82)";
        }
    } else if (user == "s") {
        if (computer == "p") {
            userScore_count++;
            result.textContent = "WIN";
            result.style = "color: rgb(245, 188, 74)";
        } else if (computer == "r") {
            computerScore_count = computerScore_count + 1;
            result.textContent = "YOU LOSE";
            result.style = "color: rgb(243, 102, 82)";
        }
    }
    userScore.textContent = userScore_count;
    computerScore.textContent = computerScore_count;
}