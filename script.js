let playerChoice;
let computerChoice;
let score = [0, 0];
let options = ["rock", "paper", "scissors"];
let outcome;

let playerOptions = document.querySelectorAll('.playerChoice');

document.querySelector("#playerScore").innerHTML = score[0];
document.querySelector("#computerScore").innerHTML = score[1];

function computerPlay(){
    let numChoice = Math.floor(Math.random() * 3);
    return options[numChoice];
}

function playRound(){
    let choices = [playerChoice, computerPlay()];


    if (choices[0] === choices[1]){
        return "It's a tie!";
    }

    else if (choices[0] === "rock"){
        if (choices[1] === "paper"){
            ++score[1]
            return "Computer wins!";
        }
        ++score[0]
        return "Player wins!"
    }

    else if(choices[0] === "paper"){
        if(choices[1] === "rock"){
            ++score[0]
            return "Player wins!";
        }
        ++score[1]
        return "Computer wins!"
    }

    else if(choices[1] === "rock"){
        ++score[1]
        return "Computer wins!";
    }
    ++score[0]
    return "Player wins!"
}

function updatePage(){
    outcome = playRound();
    document.querySelector('#outcome').innerHTML = outcome;
    document.querySelector("#playerScore").innerHTML = score[0];
    document.querySelector("#computerScore").innerHTML = score[1];
}

for (playerOption of playerOptions) {
    playerOption.addEventListener('click', function(){
        playerChoice = this.value;
        updatePage();
    });
}