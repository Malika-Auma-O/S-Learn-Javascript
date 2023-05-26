// transform JS object into an array
let scrimbaUsers = {
  "00": "sindre@scrimba.com",
  "01": "per@scrimba.com",
  "02": "frode@scrimba.com"
}
 // logs all the values into an array
console.log(Object.values(scrimbaUsers))
// logs all the keys into an array
console.log(Object.keys(scrimbaUsers))
// logs all the keys and their values in separate arrays, all contained in one array
console.log(Object.entries(scrimbaUsers))

// use on value function in the getDatabase import to fetch the database from the firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-90f90-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}

// use the onValue function with params for reference herew we will get the data from, the booksInDB 
// the second parameter is a function with snapshot param
// JSON.stringify(snapshot) converts the snapshot object into a string representation, including the key-value pairs. 
// convert the object into an array though, not stringify it
// Write a for loop where you console log each book.
// Use the appendBookToBooksListEl() function to append book instead of console logging
// clear books function added before the loop to avoid duplicating the items
onValue(booksInDB, function(snapshot) {
  let array = Object.values(snapshot.val())

  clearBooksListEl();

  for (let i = 0; i < array.length; i++) {
    let book = array[i];
    appendBookToBooksListEl(book)
  }
})
