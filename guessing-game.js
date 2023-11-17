const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const randomInRange = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const secretNumber = randomInRange(1, 100);

// const checkGuess = (number) => {
//     if (number > secretNumber) {
//         console.log("Too high!");
//         return false;
//     } else if (number < secretNumber) {
//         console.log("Too low!");
//         return false;
//     } else {
//         console.log("You win!");
//         return true;
//     }   
// }


// function askGuess () {
//     rl.question("Enter a guess: ", (guess) => {
//         const userGuess = Number(guess);

//         if (isNaN(userGuess)) {
//             console.log("please enter a valid number");
//             askGuess();
//         }

//         const isCorrect = checkGuess(userGuess);

//         if (!isCorrect) {
//             askGuess();
//         } else {
//             rl.close();
//         }
//     });
// }

// askGuess();

function askRange () {
    rl.question("Enter a minimum number: ", minNum);

    function minNum (min) {
        const lowerBound = Number(min);
        rl.question("Enter a maximum number: ", maxNum);

        function maxNum(max) {
            const upperBound = Number(max);
            rl.close();
            console.log(`I'm thinking of a number between ${lowerBound} and ${upperBound}`)
        }
    }
}
