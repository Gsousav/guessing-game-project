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
        console.log("You win!");
        return true;
    }   
}


function askGuess () {
    rl.question("Enter a guess: ", (guess) => {
        const userGuess = Number(guess);

        if (isNaN(userGuess)) {
            console.log("please enter a valid number");
            askGuess();
        }

        const isCorrect = checkGuess(userGuess);

        if (!isCorrect) {
            askGuess();
        } else {
            rl.close();
        }
    });
}

askGuess();
