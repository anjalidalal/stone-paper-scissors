const main = document.querySelector(".main");
const secondPage = document.querySelector(".second-page");
const gameState = document.querySelector(".state-of-game");
const playAgain = document.getElementById("play-again");
const yPlayer = document.querySelector(".you");
const cPlayer = document.querySelector(".computer");

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

    if (e.target.className === "scissors") {
      yPlayer.innerHTML = "";
      yPlayer.appendChild(scissors);
      cPlayer.innerHTML = "";
      cPlayer.appendChild(randomArray[randomNum]);
    }
    if (e.target.className === "stone") {
      yPlayer.innerHTML = "";
      yPlayer.appendChild(stone);
      cPlayer.innerHTML = "";
      cPlayer.appendChild(randomArray[randomNum]);
    }
    if (e.target.className === "paper") {
      yPlayer.innerHTML = "";
      yPlayer.appendChild(paper);
      cPlayer.innerHTML = "";
      cPlayer.appendChild(randomArray[randomNum]);
    }

    tieMatch();
    yourWinCondition();
    computerWinConditions();
  });
});

playAgain.addEventListener("click", () => {
  location.reload();
});

function yourWinCondition() {
  if (
    yPlayer.children[0].classList.contains("stone-style") &&
    cPlayer.children[0].classList.contains("paper-style")
  ) {
    setTimeout(() => {
      main.style.display = "none";
      gameState.innerHTML = "YOU WIN🎉";
      secondPage.classList.add("second-page-style");
    }, 1000);
  } else if (
    yPlayer.children[0].classList.contains("scissors-style") &&
    cPlayer.children[0].classList.contains("paper-style")
  ) {
    setTimeout(() => {
      main.style.display = "none";
      gameState.innerHTML = "YOU WIN🎉";
      secondPage.classList.add("second-page-style");
    }, 1000);
  } else if (
    yPlayer.children[0].classList.contains("stone-style") &&
    cPlayer.children[0].classList.contains("scissors-style")
  ) {
    setTimeout(() => {
      main.style.display = "none";
      gameState.innerHTML = "YOU WIN🎉";
      secondPage.classList.add("second-page-style");
    }, 1000);
  }
}

function computerWinConditions() {
  if (
    yPlayer.children[0].classList.contains("scissors-style") &&
    cPlayer.children[0].classList.contains("stone-style")
  ) {
    setTimeout(() => {
      main.style.display = "none";
      gameState.innerHTML = "COMPUTER WIN🎉";
      secondPage.classList.add("second-page-style");
    }, 1000);
  } else if (
    yPlayer.children[0].classList.contains("paper-style") &&
    cPlayer.children[0].classList.contains("scissors-style")
  ) {
    setTimeout(() => {
      main.style.display = "none";
      gameState.innerHTML = "COMPUTER WIN🎉";
      secondPage.classList.add("second-page-style");
    }, 1000);
  } else if (
    yPlayer.children[0].classList.contains("paper-style") &&
    cPlayer.children[0].classList.contains("stone-style")
  ) {
    setTimeout(() => {
      main.style.display = "none";
      gameState.innerHTML = "COMPUTER WIN🎉";
      secondPage.classList.add("second-page-style");
    }, 1000);
  }
}

function tieMatch() {
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
  }
}

//  Y         C
// stone      scissor    y++
// paper      scissor    c++
// scissor    scissor    tie
// stone      paper      y++
// paper      paper      tie
// scissor    paper      y++
// stone      stone      tie
// paper      stone      c++
// scissor    stone      c++
