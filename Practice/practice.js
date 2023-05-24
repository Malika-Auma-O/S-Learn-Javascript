// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked


let box = document.getElementById("box");
box.addEventListener("click", ()=> console.log("I want to open the box!"));




// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)




// Use .innerHTML to render a Buy! button inside the div container

let container = document.getElementById("container");
container.innerHTML = "<button onclick='buy()'> Buy! <button/>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

let buy = () => {
    container.innerHTML += "<p>Thank you for buying!<p/>"
}

// template strings/literals




// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage
// localStorage.setItem("Myleads", "ww/example.com");
// let name = localStorage.getItem("Myleads");
// console.log(name)
// localStorage.clear();


// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string
let myLeads =`["www.example.com"]`


// let myLeads = [];
myLeads = JSON.parse(myLeads);
myLeads.push("www.example2.com");
console.log(myLeads)
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)


// falsy values:
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN
let currentViewers = null //no viewer yet
currentViewers = ["jane", "nick"] //viewers updated as they come
// we cannot use an empty array because it is truthy not falsy value

// to check if a value is truthy or falsy, use Boolean(valuetoccheck)

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) //false


// Log out the items in the myLeads array using a for loop
// for (let i = 0; i < myLeads.length; i++) {
//     console.log(myLeads[i]);

// }

// Render the leads in the unordered list using ulEl.textContent
// here we use innerHTML because texContent renders everything written including tags, innerHTML will render it as a HTML element does
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += `<li> ${myLeads[i]} </>`
// }

// Let's try a different method for the same as above code
// for (let i = 0; i < myLeads.length; i++) {
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li);
// }


const welcomeEl = document.getElementById("welcome-el")
// parameters are inside the function
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`     
}
// arguments are outside the function
greetUser("Howdy", "Malika", " 👋")

let add = (num1, num2) => num1 + num2;
console.log(add(2,2))

// Create a function, getFirst(arr), that returns the first item in the array
// Call it with an array as an argument to verify that it works
let getFirst = (arr) => arr[0];
console.log(getFirst([1,2,3]))


let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

let myItems = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])       
    }
}

myItems(myCourses)



// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
// localStorage.setItem("Name", "malika") I have commented it instead of deleting it
let value = localStorage.getItem("Name")
console.log(value) //logs out malika in console





let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
let logBtn = document.getElementById("log-btn");
logBtn.addEventListener("click", () => console.log(data[0].score))




// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString =`The ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++) {
        if(i === arr.length-1) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", " 
        }
            
    }
    return baseString;
}

let sentence = generateSentence("best fruits", ["Apples", "Bananas", "oranges"])

console.log(sentence)


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/face1.avif",
    "images/face2.avif",
    "images/face3.avif"
]

const container2 = document.getElementById("container2")

let render = (array) => {
    let imgsDom = "";
 for (let i = 0; i < array.length; i++) {
    imgsDom += `<img class="team-img" alt="employee profile" src="${array[i]}" />`
    } 
    //  prevents manipulating the DOM on each iteration above if e put container2.innerhtml += `<img class="team-img" src="${array[i]}" />`, so better use a string to iterate then manipulate the DOM once below to help performance
    container2.innerHTML = imgsDom  ; 
}
render(imgs);




// Challenge:
// Round the price in the button down to two decimal places.

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ totalPrice.toFixed(2) }`


// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ parseFloat(totalPrice).toFixed(2) }`
