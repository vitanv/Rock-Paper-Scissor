const rockImage = '<image src="assets/style/Images/Rock.png" class="Display-Image">';
const paperImage = '<image src="assets/style/Images/Paper.png" class="Display-Image">';
const scissorImage = '<image src="assets/style/Images/Scissor.png" class="Display-Image">';

let playerHand;
let computerHand;
let playerScore = 0;
let computerScore = 0;
 
function playGame (value){
    playerChoice(value);
    computerChoice();
    if(playerHand == "rock"){
        if(computerHand == "paper"){
            playerLost();
        }else if(computerHand == "scissor"){
            playerWon();
        }else{
            draw()
        }
    }else if(playerHand == "paper"){
        if(computerHand == "scissor"){
            playerLost();
        }else if(computerHand == "rock"){
            playerWon();
        }else{
            draw()
        }
    }else {
        if(computerHand == "rock"){
            playerLost();
        }else if(computerHand == "paper"){
            playerWon();
        }else{
            draw()
        }
    }
   
}

function playerChoice (value){
    switch(value){
        case "rock":
            document.getElementById("Player").innerHTML = rockImage;
            playerHand = "rock";
            break;
        case "paper":
            document.getElementById("Player").innerHTML = paperImage;
            playerHand = "paper";
            break;
        case "scissors":
            document.getElementById("Player").innerHTML = scissorImage;
            playerHand = "scissors";
            break;

    }
}

function computerChoice(){
    let random = Math.floor(Math.random() * 3 + 1);
    switch(random){
        case 1:
            document.getElementById("AI").innerHTML = rockImage;
            computerHand = "rock";
            break;
        case 2:
            document.getElementById("AI").innerHTML = paperImage;
            computerHand = "paper";
            break;
        case 3:
            document.getElementById("AI").innerHTML = scissorImage;
            computerHand = "scissors";
            break;
    }
}

function playerLost(){
    document.getElementById("status").innerHTML ="You Lost!";
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;
}

function playerWon(){
    document.getElementById("status").innerHTML ="You Won!";
    playerScore++;
    document.getElementById("human-score").innerHTML = playerScore;
}

function draw(){
    document.getElementById("status").innerHTML ="Its a draw";
}