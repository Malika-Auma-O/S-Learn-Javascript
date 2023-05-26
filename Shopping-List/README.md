// import initializeApp function  & getDatabase function from fire base

// create an object to hold the link url from my own https://console.firebase.google.com database url

// use initializeApp function and our data base url as parameter

// create a database variable that will use getDatabase function and pass in the app

// set up the reference variable, and use the ref function in getDatabase which takes 2 parameters, the database above and a name

// Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.

 // use the firebase function push to push the input value into our database, We use our shoppinglistdb as the reference and the input value to be pushed

 // add the items using innerhHTML to the DOM

 // clear the input field function with a parameter s it is reusable
created append item function and added to the even listener

Call the onValue function with
shoppingListInDB as the first argument and
function(snapshot) {} as the second argument
-  //Write a for loop to iterate on itemsArray
- // the addItems(itemValue) function inside of the for loop to append item to the shopping list element for each iteration.

// use the onValue function with params for reference herew we will get the data from, the shopping InDB 
// the second parameter is a function with snapshot param
// JSON.stringify(snapshot) converts the snapshot object into a string representation, including the key-value pairs. 

// convert the object into an array though, not stringify it
// Use the appendshopping sListEl() function to append
// clear the function added before the loop to avoid duplicating the items

//change items array to sho both key and value
in the on value, Make two let variables: currentItemID and currentItemValue and use items to set both of them equal to the correct values.
append only the currentitem value to the browser

stop using innerhtml and insteaad create element using document.create eelent, add items to the elemend and append it, this allows us to manipulate ech ite for deletion 

 Attach an event listener to list element that as created inside the additem function and make it so when dblclicked ....
 Inside the event listener, Make a let variable called 'exactLocationOfItemInDB' and set it equal to ref(database, something) where you substitute something with the code that will give you the exact location of the item in question.
 Then Use the remove function to remove the item from the database, make sure to iport it as well

 // Change the onValue code so that it uses snapshot.exists() to show items when there are items in the database and if there are not displays the text 'No items here... yet'.

//add a fav icon, it should be a square image in png format. go to favicon.io and press png to ico button. download the zipped file and add the items in the file to your project so different websites ill give the best quality of the image in one of them. then copy the link tags to html. site.webmanifest is a file that lets show the icon on a mobile phone like a native mobile app.
//organize the manifest file to lok lie an object with proper indentation. In the blank nam and short name section we enter Add to cart, change the theme colorand background color to the browser background color


 // I changed the firebase rule to read true and write false, i can change later for true for write if i want it to be edited by anyone else. hen i put false data is not added to database
