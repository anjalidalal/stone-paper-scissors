const main = document.querySelector(".main");
const secondPage = document.querySelector(".second-page");
const gameState = document.querySelector(".state-of-game");
const playAgain = document.getElementById("play-again");
const yPlayer = document.querySelector(".you");
const cPlayer = document.querySelector(".computer");
const yourScore = document.querySelector("you-score");
const computerScore = document.querySelector("computer-score");

const buttons = document.querySelectorAll(".button-section button");

const stone = document.createElement("img");
stone.src = "./rock.svg";
stone.classList.add("stone-style");

const paper = document.createElement("img");
paper.src = "./paper.svg";
paper.classList.add("paper-style");

const scissors = document.createElement("img");
scissors.src = "./scissors.svg";
scissors.classList.add("scissors-style");

let randomArray = [stone.cloneNode(), paper.cloneNode(), scissors.cloneNode()];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let randomNum = Math.floor(Math.random() * randomArray.length);

    cPlayer.innerHTML = "";
    cPlayer.appendChild(randomArray[randomNum]);
    if (e.target.className === "scissors") {
      yPlayer.innerHTML = "";
      yPlayer.appendChild(scissors);
    }
    if (e.target.className === "stone") {
      yPlayer.innerHTML = "";
      yPlayer.appendChild(stone);
    }
    if (e.target.className === "paper") {
      yPlayer.innerHTML = "";
      yPlayer.appendChild(paper);
    }

    //console.log(yPlayer.innerHTML === cPlayer.innerHTML);

    if (
      yPlayer.innerHTML === cPlayer.innerHTML &&
      yPlayer.innerHTML !== "" &&
      cPlayer.innerHTML !== ""
    ) {
      setTimeout(() => {
        main.style.display = "none";
        gameState.innerHTML = "Match is Tie !";
        secondPage.classList.add("second-page-style");
      }, 1000);
      console.log("match is tie", true);
    }
  });
});

playAgain.addEventListener("click", () => {
  location.reload();
});
