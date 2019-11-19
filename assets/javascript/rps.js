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

  // const rock = [0];
  // const paper = [1];
  // const scissors = [2];
  const choices = document.querySelectorAll(".choice");
  const score1 = document.getElementById("#player1Score");
  const score2 = document.getElementById("#player2Score");
  const result = document.getElementById("#result");
  // const restart = document.getElementById("restart");
  const modal = document.querySelector(".modal");

  const scoreboard = {
    player1: 1,
    player2: 1
  };

  // Get a reference to the database service
  // var database = firebase.database();

  // Initializing our click count at 0
  var clickCounter = 0;

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  // On Click
  /*
  $(".choice").on("click", function() {
    console.log("Button Clicked");
  });
  */

  //Play Game
  function play(e) {
    const player1Choice = e.target.id;
    const player2Choice = getPlayer2Choice();
    const winner = getWinner(player1Choice, player2Choice);
    showWinner();
    console.log(
      "Player 1 Choice: " +
        player1Choice +
        "\n" +
        "Player 2 Choice: " +
        player2Choice +
        "\n" +
        "Winner: " +
        winner
    );
  }

  //Get player 2 choice

  function getPlayer2Choice() {
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
        return "Player 2";
      } else {
        return "Player 1";
      }
    }
    // Paper
    else if (p1 === "paper") {
      if (p2 === "scissors") {
        return "Player 2";
      } else {
        return "Player 1";
      }
    }
    // Scissors
    else if (p1 === "scissors") {
      if (p2 === "rock") {
        return "Player 2";
      } else {
        return "Player 1";
      }
    }
  }

  //Show Winner
  function showWinner(winner, player2Choice) {
    //Increment Score
    if (winner === "Player 1") {
      scoreboard.player1++;
    } else {
      scoreboard.player2++;
      //Show Modal
      // result.innerHTML = `<h1 class="text-win>You Win</h1>`;
    }
  }

  //Event Listeners
  choices.forEach(choice => choice.addEventListener("click", play));
});
