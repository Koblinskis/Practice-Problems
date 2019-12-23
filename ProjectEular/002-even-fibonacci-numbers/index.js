let y = 0
let z = 1
let x = 1
console.log(y)
console.log(z)
console.log(x)
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