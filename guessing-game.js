const readline = require('readline');

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
};

let numAttempts;

function askGuess() {
    rl.question("Enter a guess: ", (guess) => {
        const userGuess = Number(guess);

        if (isNaN(userGuess)) {
            console.log("Please enter a valid number");
            askGuess();
        } else {
            const isCorrect = checkGuess(userGuess, secretNumber);

            if (!isCorrect && numAttempts > 1) {
                numAttempts--;
                askGuess();
            } else if (numAttempts === 1) {
                console.log(`You lose. No more attempts left. The correct number was ${secretNumber}`);;
                rl.close();
            } else {
                rl.close();
            }
        }
    });
}

const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let secretNumber; // Define secretNumber in the global scope

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
                secretNumber = randomInRange(lowerBound, upperBound);
                askGuess();
            }
        });
    });
}

function askLimit () {
    rl.question("Enter the number of attempts: ", (attempts) => {
        numAttempts = Number(attempts);

        if (isNaN(numAttempts) || numAttempts <= 0) {
            console.log("Please enter a valid number of attempts greater than 0.");
            askLimit();
        } else {
            askRange();
        }
    });
}

askLimit();

