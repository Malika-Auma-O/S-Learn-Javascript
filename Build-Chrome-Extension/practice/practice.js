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