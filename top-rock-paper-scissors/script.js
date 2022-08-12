function getComputerChoice() {
    let s_choice = "";
    let n_choice = Math.floor(Math.random() * 3) + 1;

    switch (n_choice) {
        case 1:
            s_choice = "ROCK";
            break;
        case 2:
            s_choice = "PAPER";
            break;
        case 3:
            s_choice = "SCISSORS";
            break;
    }

    return s_choice;
}

function getPlayerChoice() {
    let s_choice = prompt("Selection:").toUpperCase();

    return s_choice;
}

function playRound(playerChoice, computerChoice) {
    let p_win = "Player";
    let c_win = "Computer";
    let winner = "";

    if (computerChoice === playerChoice) {
        winner = "Draw";
    }

    if (computerChoice == "ROCK" && playerChoice == "PAPER") {
        winner = p_win;
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        winner = c_win;
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        winner = c_win;
    } else if (computerChoice == "PAPER" && playerChoice == "SCISSORS") {
        winner = p_win;
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
        winner = c_win;
    } else if (computerChoice == "SCISSORS" && playerChoice == "ROCK") {
        winner = p_win;
    }

    return winner;
}

function playGame() {
    let p_score = 0;
    let c_score = 0;
    let winner = "";

    while (p_score < 5 && c_score < 5) {
        winner = playRound(getPlayerChoice(), getComputerChoice());
        if (winner == "Draw") {
            console.log("Draw!" + " Player: " + p_score + " Computer: " + c_score);
            continue;
        }

        winner == "Player" ? p_score++ : c_score++;

        console.log(winner + " has won the round!" + " Player: " + p_score + " Computer: " + c_score);
    }

    return "\n" + winner + " has won the game !" + " Player: " + p_score + " Computer: " + c_score;
}

console.log(playGame());