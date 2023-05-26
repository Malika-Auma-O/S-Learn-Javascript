
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const appSettings = {
  databaseURL: "https://playground-90f90-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shopping-list")

const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const shoppingList = document.getElementById("shopping-list");

addButton.addEventListener("click", () => {
  let inputValue = inputField.value;
  
  push(shoppingListInDB, inputValue)
    clearInput(inputField);
    // addItems(inputValue); // addItems(inputValue); items already are added on value so this duplicates it
    console.log(`${inputValue} added to database`)
    
})

const clearInput = (input) => input.value = "";

// const addItems = (itemValue) => shoppingList.innerHTML += `<li>${itemValue}</li>`;
const addItems = (item) => {
  let itemID = item[0]
  let itemValue = item[1]
  let list = document.createElement("li");
  list.textContent = itemValue;
  list.addEventListener("dblclick", () => {
    let exactLocationOfItemInDB = ref(database, `shopping-list/${itemID}`);
    remove(exactLocationOfItemInDB);
  })

  shoppingList.append(list)
}


const clearShoppingList = () => shoppingList.innerHTML = "";


onValue(shoppingListInDB, (snapshot) => {
  if(snapshot.exists()) {
    clearShoppingList()
  const itemsArray = Object.entries(snapshot.val())
  for (let i = 0; i < itemsArray.length; i++) {
    const items = itemsArray[i];
    const currentItemID = items[0];
    const currentItemValue = items[1];

    addItems(items);
    // console.log(items) 
  }

  } else {
    shoppingList.innerHTML = "No items here... yet";
  }
})

// console.log(snapshot.val()) //logs both values and ids, but has to be inside the onvalue fn to work
