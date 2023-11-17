const secretNumber = 5;

const checkGuess = (number) => {
    if (number > secretNumber) {
        console.log("Too high!");
        return false;
    } else if (number < secretNumber) {
        console.log("Too low!");
        return false;
    } else {
        console.log("Correct, you win!");
        return true;
    }   
}

checkGuess(6);