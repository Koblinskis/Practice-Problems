const palinArr = []

/**
 * cycles through multipling three-digit number and stores all the palindrome number in an array
 */
const palindromeNumber = () => {
  for(let i = 999; i > 100; i--) {
    for(let j = 999; j > 100; j--) {
      const num = j*i;
      if(num.toString() === num.toString().split('').reverse().join('')) {
        palinArr.push(num)
      }
    }
  }
}
palindromeNumber()

/**
 * looks through an array and finds the largest number
 */
const palinLargestNum = (arr) => {
  console.log(Math.max(...arr))
}
palinLargestNum(palinArr)