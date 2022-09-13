const rockImage = '<image src="assets/style/Images/Rock.png" class="Display-Image">';
const paperImage = '<image src="assets/style/Images/Paper.png" class="Display-Image">';
const scissorImage = '<image src="assets/style/Images/Scissor.png" class="Display-Image">';

 
function playGame (value){
    playerChoice(value);
    computerChoice();
}

function playerChoice (value){
    switch(value){
        case "rock":
            document.getElementById("Player").innerHTML = rockImage;
            break;
        case "paper":
            document.getElementById("Player").innerHTML = paperImage;
            break;
        case "scissors":
            document.getElementById("Player").innerHTML = scissorImage;
            break;

    }
}

function computerChoice(){
    let random = Math.floor(Math.random() * 3 + 1);
    switch(random){
        case 1:
            document.getElementById("AI").innerHTML = rockImage;
            break;
        case 2:
            document.getElementById("AI").innerHTML = paperImage;
            break;
        case 3:
            document.getElementById("AI").innerHTML = scissorImage;
            break;
    }
}