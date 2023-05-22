// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Mal is 40 years old and lives in Greece"

// Call the logData() function to verify that it works

let person = {
    name: "Mal",
    age: 41,
    country: "Greece"
}

let logData = () => {
    return `${person.name} is ${person.age} years old and lives in ${person.country}`;
} 

console.log(logData());



let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("free");
} else if (age >= 6 || age <= 17) {
    console.log("child discount")
} else if (age >= 18 || age <= 26) {
    console.log("student discount")
} else if (age >= 27 || age <= 66) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}



let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log(`- ${largeCountries[i]}`)   
}




let largeCountries1 = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries1.pop(); //remove last
largeCountries1.shift(); //remove first
largeCountries1.push("Pakistan"); //add to the end
largeCountries1.unshift("CHina"); //add to the beginning

console.log(largeCountries1)



let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱");
}



let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

let randomItem = () => {
    let random = Math.floor(Math.random() * hands.length); //random numbers 0,1,2
    return hands[random];
}

console.log(randomItem());





let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
let randomFighter1 = Math.floor(Math.random() * fighters.length);
let randomFighter2 = Math.floor(Math.random() * fighters.length);
stageEl.textContent = `${fighters[randomFighter2]} vs ${fighters[randomFighter1]}`

})



let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.



let arrange = () => {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"; // += includes all, = only erases and includes the last one
        } else {
            orangeShelf.textContent += "🍊";
        }     
    }
}

arrange();

