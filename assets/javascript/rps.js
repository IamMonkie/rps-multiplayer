/* -------------------------------------------------------------------------- */
/*                               run on startup                               */
/* -------------------------------------------------------------------------- */

$(document).ready(function() {
  /* -------------------------------------------------------------------------- */
  /*                             Initialize Firebase                            */
  /* -------------------------------------------------------------------------- */

  // firebase.initializeApp(firebaseConfig);

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */

  //const choices = document.querySelectorAll(".choice");
  const result = document.getElementById("result");
  //const restart = document.getElementById("restart");
  const modal = document.querySelector(".modal");

  let scoreboard = {
    player1: 0,
    computer: 0
  };
  const score1 = document.getElementById("player1Score");
  const score2 = document.getElementById("computerScore");

  // Get a reference to the database service
  // var database = firebase.database();

  // Initializing our click count at 0
  var clickCounter = 0;

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  //Play Game
  function play(e) {
    const player1Choice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(player1Choice, computerChoice);
    showWinner(winner, computerChoice);
    // clearModal();
    console.log(
      "Player 1 Choice: " +
        player1Choice +
        "\n" +
        "computer Choice: " +
        computerChoice +
        "\n" +
        "Winner: " +
        winner +
        "\n" +
        "scoreboard.player1: " +
        scoreboard.player1 +
        "\n" +
        "scoreboard.computer: " +
        scoreboard.computer
    );
  }

  //Get computer choice

  function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
      return "rock";
    } else if (rand <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getWinner(p1, p2) {
    //Draw
    if (p1 === p2) {
      return "draw";
    }
    // Rock
    else if (p1 === "rock") {
      if (p2 === "paper") {
        return "Computer";
      } else {
        return "Player 1";
      }
    }
    // Paper
    else if (p1 === "paper") {
      if (p2 === "scissors") {
        return "Computer";
      } else {
        return "Player 1";
      }
    }
    // Scissors
    else if (p1 === "scissors") {
      if (p2 === "rock") {
        return "Computer";
      } else {
        return "Player 1";
      }
    }
  }

  //Show Winner
  function showWinner(winner, computerChoice) {
    //Increment Score
    if (winner === "Player 1") {
      scoreboard.player1++;
      result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>The computer has chosen: <strong>${computerChoice}</strong></p>`;
    } else if (winner === "Computer") {
      scoreboard.computer++;
      result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>The computer has chosen: <strong>${computerChoice}</strong></p>`;
    } else {
      result.innerHTML = `
      <h1>Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>The computer has chosen: <strong>${computerChoice}</strong></p>`;
    }

    // Show Score

    score1.innerHTML = `<h3>Player 1 Wins: ${scoreboard.player1} </h3>`;
    score2.innerHTML = `<h3>Computer Wins: ${scoreboard.computer} </h3>`;

    // Show Modal
    modal.style.display = "block";
    // Show Restart Button
    restartBtn.style.display = "block";
  }

  // clear modal
  function clearModal(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

  function restartGame() {
    scoreboard.player1 = 0;
    scoreboard.computer = 0;
    score1.innerHTML = `<h3>Player 1 Wins: ${scoreboard.player1} </h3>`;
    score2.innerHTML = `<h3>Computer Wins: ${scoreboard.computer} </h3>`;
    restartBtn.style.display = "none";
  }

  //Event Listeners
  // Button clicks
  //choices.forEach(choice => choice.addEventListener('click', play));
  $(".choice").on("click", play);

  // Modal
  window.addEventListener("click", clearModal);
  // Restart Button
  restartBtn.addEventListener("click", restartGame);
});
