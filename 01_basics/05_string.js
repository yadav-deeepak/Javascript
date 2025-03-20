/*
-> strings are denoted with single quotes or double quotes 
eg: const name = "hitesh"
const repoCount = 45

console.log(name + repoCount)
-> Back ticks are use to use the value of  variable in the strings
eg: console.log(`Hello my name is ${name}`) // to inject variable inside the string we use this method
-> This is called as string interpolation and it is the better method

*/
const name = "hitesh"
const repoCount = 45

const gameName = new String('hi-tech-com') // another way to declare the string
// we can access various prototype functions if we declare in this way
console.log(name + repoCount)
console.log(gameName) // string object ke andar hitech hoga with key value pair
console.log(gameName[0]) // 'h'

//Prototype Functions
console.log(gameName.length) // returns the length of the string
console.log(gameName.toUpperCase()) // converts string into uppercase but it doesn't change the original value 
console.log(gameName.toLowerCase()) // converts string into lowercase
console.log(gameName.charAt(2)) // returns the character present at position
console.log(gameName.indexOf('t')) // returns the index of the character

const newString = gameName.substring(0,4) // 0 to n-1 string will be stored in the new string
console.log(newString) // in substring we can't give the negative value 

const anotherString = gameName.slice(-8,4) // in slice we can give negative value
console.log(anotherString)

const newStringOne = "     hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim()) // trims the extra spaces present in the string

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) // this will first search for %20 and then replace it with '-'

console.log(url.includes('hitesh')) //returns true if keyword is present in the string else return false
console.log(gameName.split('-'));

