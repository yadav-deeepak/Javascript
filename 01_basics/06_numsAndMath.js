const score = 400

const balance = new Number(100) // another way to store number
// console.log(balance)

// console.log(balance.toString()) //Converts the number into string
// console.log(balance.toFixed(2)) //100.00 precision value fixed ho jaayega

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // 23.9  3 places tkk precision value dega

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000 returns values with commas in US format
// For commas according to indian standards use 'en-IN'
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

// MAX_VALUE AND MIN_VALUE will tell the maximum and minimum value of the number

// ++++++++++++++++++ Maths +++++++++++++++++++++++
// console.log(Math) // returns an object Math
// console.log(Math.abs(-4)) // converts number into positive
// console.log(Math.round(4.6)) // round off the value
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.2)) //4
// console.log(Math.min(2,4,5,6))// returns the minimum value

console.log(Math.floor(Math.random()*10) + 1)// generates random value between 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min ))