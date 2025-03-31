// array
const myArr = [0, 1, 2, 3, 4, 5] // it stores collection of data item under a single variable name
// In javascript array is resizeable and contain mix of data type

console.log(myArr[0])

// Another way to declare an array
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2])

// Array Methods 

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9) // adds 9 in the front of the array
// console.log(myArr)
// myArr.shift()// shifts the array left side delets the element in the front
// console.log(myArr)
// console.log(myArr.includes(6))
// console.log(myArr.indexOf(5))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof(newArr)) //string

// slice , splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)// [1,2]
console.log("B ", myArr)// [0,1,2,3,4,5]

const myn2 = myArr.splice(1,3)
console.log( myn2)// [1,2,3]
console.log("C ", myArr) //[0,4,5]

// So splice manipulates the orignal array and slice doesnt manipulates the orignal array 
