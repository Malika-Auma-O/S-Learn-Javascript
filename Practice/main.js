// function to add and function to remove points

let myPoints = 3;

let add3Points = () => console.log(myPoints += 3);

let remove1Point = () => console.log(myPoints -= 1);

add3Points()
add3Points()
remove1Point()
remove1Point()
add3Points()


console.log(myPoints) //should log 10





// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114


// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMessage = () => {
    let error = document.getElementById("error");
    error.textContent = "Something went wrong, please try again";
}




let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

//clear the sum before making a new calcualtion
let clearSum = () => {
    sumEl.textContent = "Sum:";
  };

let add = () => {
    clearSum();
  let total =  num1 + num2;
  sumEl.textContent += total;
  document.window.reload()
} 

let subtract = () => {
    clearSum();
    let total =  num1 - num2;
  sumEl.textContent += total;
}
let divide = () => {
    clearSum();
    let total =  num1 / num2;
    sumEl.textContent += total;
}
let multiply = () => {
    clearSum();
    let total =  num1 * num2;
    sumEl.textContent += total;
}