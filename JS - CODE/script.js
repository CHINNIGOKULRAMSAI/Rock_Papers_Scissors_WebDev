let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscore1 = document.querySelector("#user-score");
let compscore1 = document.querySelector("#comp-score");

let drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#070d1f";

}

let compGame = () => {
    let options = ["rock", "paper", "scissors"];
    let compOP = Math.floor(Math.random() * 3);
    return options[compOP];
}

let showWinner = (userWin, userId, compId) => {
    if(userWin){
        userScore++;
        userscore1.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! Your ${userId} beats ${compId}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscore1.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose. ${compId} beats your ${userId}`;
        msg.style.backgroundColor = "red"
    }
}

let playGame = (userId) => {
    console.log("user choice = ", userId);
    // generate comp
    let compId = compGame();
    console.log("comp choice = ",compId);
    if (userId === compId) {
        //game  was  draw
        drawGame();
    }else{
        let userWin = true;
        if (userId === "rock") {
            //paper, scissors
            userWin = compId === "paper" ? false : true;
        }else if(userId === "paper") {
            //scissors, rock
            userWin = compId === "scissors" ? false : true;
        }else{
            //
            userWin = compId === "rock" ? false : true;
        }
        showWinner(userWin, userId, compId);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        userId = choice.getAttribute("id");
        playGame(userId)
    })
})