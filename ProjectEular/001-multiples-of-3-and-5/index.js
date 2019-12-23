let maxNumber = 1000
let mutlipleThree = 3
let mutlipleFive = 5
let sum = 0

/**
 * This function checks to see if a number can be divide evenly into an integer than adds the sum
 */
for(let i = 0; i < maxNumber; i++) {
  mutlipleThree = i / 3
  mutlipleFive = i / 5
  if(Number.isInteger(mutlipleThree) || Number.isInteger(mutlipleFive)) {
    sum += i;
    console.log(sum)
  }
}