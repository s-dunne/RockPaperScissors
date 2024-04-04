//The user chooses which to play, and the computer counters based on a randomly chosen number.

//This function is used if the player chooses Rock.
function playRock() {
	var comp = counterattack();
	
	if (comp == "Rock") {
		alert("Computer chose Rock. Draw!");
	}
	
	else if (comp == "Paper") {
		alert("Computer chose Paper. You win!");
	}
	
	else if (comp == "Scissors") {
		alert("Computer chose Scissors. You lose!");
	}
	
	//This should never appear, assuming there are no errors.
	else {
		alert("error");
	}
}

//This function is used if the player chooses Paper.
function playPaper() {
	var comp = counterattack();
	
	if (comp == "Rock") {
		alert("Computer chose Rock. You win!");
	}
	
	else if (comp == "Paper") {
		alert("Computer chose Paper. Draw!");
	}
	
	else if (comp == "Scissors") {
		alert("Computer chose Scissors. You lose!");
	}
	
	//This should never appear, assuming there are no errors.
	else {
		alert("error");
	}
}

//This function is used if the player chooses Scissors.
function playScissors() {
	var comp = counterattack();
	
	if (comp == "Rock") {
		alert("Computer chose Rock. You lose!");
	}
	
	else if (comp == "Paper") {
		alert("Computer chose Paper. You win!");
	}
	
	else if (comp == "Scissors") {
		alert("Computer chose Scissors. Draw!");
	}
	
	//This should never appear, assuming there are no errors.
	else {
		alert("error");
	}
}

function counterattack() {
	//A random number is chosen: either 0, 1, or 2.
	//The computer's counterattack is decided by this number.
	
	const rando = Math.floor(Math.random() * 3);
	
	if (rando == 0) {
		return "Rock";
	}
	
	else if (rando == 1) {
		return "Paper";
	}
	
	else if (rando == 2) {
		return "Scissors";
	}
	
	//This should never be chosen, assuming there are no errors.
	else {
		return "error"
	}

}