const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkGuess = (number, secretNumber) => {
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

const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askRange() {
    rl.question("Enter a minimum number: ", (min) => {
        const lowerBound = Number(min);

        rl.question("Enter a maximum number: ", (max) => {
            const upperBound = Number(max);

            if (isNaN(lowerBound) || isNaN(upperBound) || lowerBound >= upperBound) {
                console.log("Please enter valid minimum and maximum numbers. The maximum must be greater than the minimum.");
                askRange();
            } else {
                console.log(`I'm thinking of a number between ${lowerBound} and ${upperBound}`);
                const secretNumber = randomInRange(lowerBound, upperBound);
                askGuess(secretNumber);
            }
        });
    });
}

askRange();
