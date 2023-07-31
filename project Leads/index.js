// 1. Create a variable, listItems, to hold all the HTML for the list items. Assign it to an empty string to begin with
// let listItems = ""



let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn");



//on click Push the value from the inputEl into the myLeads array
// put list items and the for loop and innerHTMcontent in a function
// after clearing input field, save myLeads array to localStorage
// call that function inside the click function
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  //clear input field
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);

  console.log( localStorage.getItem("myLeads") )
});



// Add the item to the listItems variable instead of the ulEl.innerHTML
// Render the listItems inside the unordered list using ulEl.innerHTML
// Wrap the lead in an anchor tag (<a>) inside the <li> make the link open in a new tab?
const render = (leads) => {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
   <li>
        <a href="${leads[i]}" target="_blank">
            ${leads[i]}
        </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
};



// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage)


// Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()
if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

//Listen for double clicks on the delete button, When clicked, clear localStorage, myLeads, and the DOM

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = []
  render(myLeads); //render leads which is now empty array
})

// Listen for clicks on tabBtn, grab the url on the tab,  push the URL from the tab to myLeads array, add myLeads array to local storage, and also trigger a render so the url is rendered on the page
tabBtn.addEventListener("click", () => {
chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  
    let tab = tabs[0].url
    myLeads.push(tab);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

  
})


