// Primitive
/*
-> 7 types : string, number, boolean, null, undefined, symbol, bigint
*/

const score = 100
const isLoggedIn = false 
const outSideTemp = null
let userEmail;

//symbol 
const id = Symbol('123')
const anotherI = Symbol('123')

console.log(id === anotherI)

// Reference  (non primitive)
/*
-> Array , Object, Function
-> The data type of non primitive will show object 
Eg: typeOf array //obj 
*/

const heros = ["shaktimaan","krish"]
let obj ={
    name: 'hitesh',
    age: 32,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof obj)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory is of two types 
// Stack(Primitive) , Heap(Non Primitive)
// Stack 
let myYoutubeName = "DeepakCodes"
let anotherName = myYoutubeName
anotherName ="ChaiAurCode"

console.log(myYoutubeName)
console.log(anotherName)
// anotherName will get the copy of the myYoutubeName so when 
// we change its value the orignal value will not change

// Heap 
let userOne = {
    email:  "useR@gmail.com",
    upi: "abs@payu"
}
let userTwo = userOne

// userTwo will get the reference of the same userOne value
userTwo.email = "abcd@gmail.com" //this will change the value of email of the original value

console.log(userOne)
console.log(userTwo)
