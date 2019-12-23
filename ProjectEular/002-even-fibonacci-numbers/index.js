let y = 0
let z = 1
let x = 1
console.log(y)
console.log(z)
console.log(x)

/**
 * This function takes the varables and adds them so it always adds the previous sum to the current sum
 */
const fibonacci = () => {
  for(let i = 0; i < 4000000; i = z) {
    y = x + z
    z = z + y
    x = y
    console.log(y)
    console.log(z)
  }
}
fibonacci()