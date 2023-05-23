// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with

const listItems = ""
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
    // Push the value from the inputEl into the myLeads array 
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// Log out the items in the myLeads array using a for loop 
// for (let i = 0; i < myLeads.length; i++) {
//     console.log(myLeads[i]);
    
// }

// Render the leads in the unordered list using ulEl.textContent
// here we use innerHTML because texContent renders everything written including tags, innerHTML will render it as a HTML element does
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += `<li> ${myLeads[i]} </>`     
// }

// Let's try a different method for the same as above
for (let i = 0; i < myLeads.length; i++) {
    const li = document.createElement("li") 
    li.textContent = myLeads[i]  
    ulEl.append(li);
}