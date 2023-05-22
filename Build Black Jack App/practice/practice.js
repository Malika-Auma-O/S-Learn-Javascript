

    // Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age1 = 22

// if less than 21 -> "You can not enter the club!"

if(age1 < 21) {
    console.log("You can not enter the club!");

    // else  -> "Welcome!"
} else {
    console.log("Welcome!");
}


// Check if the person is eligible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not eligible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not eligible, you have already gotten one"


if(age < 100) {
    console.log("Not eligible");
} else if(age === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not eligible, you have already gotten one");
}


console.log(4 === 3)  // false
console.log(5 > 2)    //  true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false


// Arrays - ordered lists of items
// arrays are 0 indexed, meaning we start counting from 0
// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let array = [
    "one", 
    "me", 
    "wash"
]

let cards = [7,4]
cards.push(6) //adds 6 to the end of the array
cards.pop() //removes last item in the array


// counting in arrays using for loop
//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {  
    console.log(count)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
for (let i = 10; i <= 100; i += 10) {
    console.log(i)
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!"
]
// we need this to be DRY so use for loop instead of this
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])


// this logs the array items one by one as well
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
    
}

let cards2 = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards2.length; i++) {
    console.log(cards2[i]);
}


let sentence = ["Hello ", "my ", "name ", "is ", "Malika"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i= 0; i< sentence.length; i++) {

    // this renders only the last item, Per
    // greetingEl.textContent = sentence[i];

    // this renders all of them inclusive
    greetingEl.textContent += sentence[i]    
}


// How do you keep the spaces between the words if I remove them from the array? just concatenate sentence with space sentence[i] + ""



let player1Time = 102
let player2Time = 107
// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

let totalRace = () => {
    return player1Time + player2Time;
}

let totalTime = totalRace();
console.log(totalTime);


// Create a function, rollDice(), that returns a random number between 1 and 6
let rollDice = () => {
    let randomNUmber = Math.floor(Math.random() * 6) + 1;
    return randomNUmber;
}
console.log(rollDice());

    // this generate random positive number between 0 and 12
    let firstCard = Math.floor(Math.random() * 13);
    // this generate random positive number between 1 and 13 as we added 1
    let secondCard = Math.floor(Math.random() * 13) + 1;
    

    let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {
    if (hasSolvedChallenge === false && hasHintsLeft === false) {
        showSolution()
    }
    console.log("Showing the solution....")
}


// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airBnbCastle = {
    title: "suit",
    price: 200,
    listing: ["keys", "foo"]
}

console.log(airBnbCastle.title)