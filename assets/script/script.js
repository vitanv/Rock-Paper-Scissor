const chooseHand = (value) =>{
    switch(value){
        case "rock":
            document.getElementById("Player").innerHTML = '<i class="fa-regular fa-hand-back-fist fa-2xl"></i>';
        case "paper":
            document.getElementById("Player").innerHTML = '<i class="fa-regular fa-hand fa-2xl"></i>';
        case "scissors":
            document.getElementById("Player").innerHTML = '<i class="fa-regular fa-hand-scissors fa-2xl"></i>';

    }
}