/*
Example: input is 4 (cents) and [1, 2, 3] (coins that you can use to make amount)

Edge Cases: repeats, negative numbers, invalid input values

Desired Output: 4 
1) 1, 1, 1, 1
2) 1, 1, 2
3) 2, 2
4) 3, 1

*/

let makeChange = (amountLeft, coins, currentIndex) => {
  currentIndex = (typeof currentIndex !== 'undefined') ? currentIndex : 0; 

  //base cases
  if (amountLeft === 0) return 1; 
  if (amountLeft < 0) return 0; 
  if (currentIndex === coins.length) return 0; 

  console.log('Checking Ways to Make ' + amountLeft + ' with ' + '[' + coins.slice(currentIndex).join(',') + ']'); 

  let currentCoin = coins[currentIndex]; // currentCoin = 1
  let numPossibilities = 0; //possibilities = 0

  while (amountLeft >= 0) { //while 4 >= 0
    numPossibilities += makeChange(amountLeft, coins, currentIndex + 1); //0 += makeChange(4, [1, 2, 3], 1)
    amountLeft -= currentCoin; //4 - 1 = 3
  }

  return numPossibilities; 
};
