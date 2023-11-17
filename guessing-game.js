const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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


function askGuess () {
    rl.question("Enter a guess: ", (guess) => {
        const userGuess = Number(guess);

        checkGuess(userGuess);
        rl.close();
    });
}

askGuess();
