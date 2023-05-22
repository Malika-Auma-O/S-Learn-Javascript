// in blackjack, J,Q,K are worth 10 each, A can be worth 1 and 11, using 1 here



let cards = []; // create array to store all cards
let sum = 0; //starting number
let hasBlackJack = false;
let isAlive = false; //state before game starts
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")
// create player object with  keys, name and chips
let playerObject = {
    name: "Mal",
    chips: 0
}

playerEl.textContent = `${playerObject.name}: $ ${playerObject.chips}`


//Create a function, getRandomCard(), that always returns random number between 1-13 for blackjack game
// check if num is 1, return 11, else if > 10 return 10, else return the number
let getRandomCard = () => {
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1) { //this is for the ace
        return 11;
    } else if(randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}


//  Create a startGame() function.
let startGame = () => {
    isAlive = true; //state when starting game
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard] //the empty array will contain these 2 cards to start with
    sum = firstCard + secondCard;

    // this will call render game again when new card is selected
    renderGame();
}



let renderGame = () => {
//    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
// we will us an array instead
//    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
//Create a for loop that renders out all the cards instead of just two
cardsEl.textContent = "Cards: ";
for (let i= 0; i< cards.length; i++) {
    cardsEl.textContent += `${cards[i]}  ` //add space between numbers   
}

// 3. Render the sum on the page using this format -> "Sum: 14"
sumEl.textContent = `Sum:  ${sum}`;
if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }

  messageEl.textContent = message;
}


let newCard = () => {
// Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false) {
        let drawCard =  getRandomCard();
        sum += drawCard;
        
        //Push the card to the cards array
        cards.push(drawCard);
        
        //call the game to start again
        startGame();
    }   
}










