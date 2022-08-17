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
  let s_choice = "";

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

function setScore(winner) {
  let game_limit = 5;
  round_result.innerText = "";
  game_winner.innerText = "";

  if (winner === "Draw") {
    round_result.innerText = "Draw!";
    round_result.style.color = "black";
    return;
  } else {
    round_result.innerText = winner + " has won the round!";

    if (winner === "Player") {
      p_score++;
      round_result.style.color = "#812E45";
    } else if (winner === "Computer") {
      c_score++;
      round_result.style.color = "#2E4681";
    }
  }

  total_score.innerText = "Player: " + p_score + " | Computer: " + c_score;

  if (p_score == game_limit) {
    game_winner.innerText = "Player won the GAME!";
    p_score = 0;
    c_score = 0;
  } else if (c_score == game_limit) {
    game_winner.innerText = "Computer has won the GAME!";
    p_score = 0;
    c_score = 0;
  }
}