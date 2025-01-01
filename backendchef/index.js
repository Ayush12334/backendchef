import readline from 'readline';

// Create an interface for user input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for the name and greet
export function askName() {
    rl.question('What is your name? ', (name) => {
        console.log(`Hello, ${name}!`);
        rl.close();
    });
}

// Call the function
askName();
