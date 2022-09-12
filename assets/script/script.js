const chooseHand = (value) =>{
    switch(value){
        case "rock":
            document.getElementById("Player").innerHTML = '<image src="assets/style/Images/Rock.png" class="Button-Image">';
            break;
        case "paper":
            document.getElementById("Player").innerHTML = '<image src="assets/style/Images/Paper.png" class="Button-Image">';
            break;
        case "scissors":
            document.getElementById("Player").innerHTML = '<image src="assets/style/Images/Scissor.png" class="Button-Image">';
            break;

    }
}