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