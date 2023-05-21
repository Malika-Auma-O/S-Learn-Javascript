// initialize count as 0
// listen to click on increment-bt and increment
// change the count in html to reflect the ne count

let count = 0;
let btn = document.getElementById("increment-btn");
let countChange = document.getElementById("count");
let saveBtn = document.getElementById("save-btn");
let saveElement = document.getElementById("save");
let total = document.getElementById("total");

function increment() {
    count++
    countChange.textContent = count
    console.log(count)
}

// btn.addEventListener("click", () => {
//     return increment();
// })


// setting the count and count change to 0 after saving will ensures count starts from the beginning again
function saveCount() {
    let countStr = ` ${count} - `;
    saveElement.textContent += countStr;
    totalCount();  
    count = 0;
    countChange.textContent = 0;
    console.log(count)
}

// saveBtn.addEventListener("click", () => {
//     return saveCount();
// })

let array = []
function totalCount() {
    let numbers = saveElement.innerHTML.split("- ").map(str => {
      const num = parseInt(str.trim());
      return isNaN(num) ? 0 : num;
    });
    
    let sum = numbers.reduce((total, num) => total + num, 0);
    total,
    
    total.innerHTML = sum;
  }
  
  totalCount();
  
  
  
  
  