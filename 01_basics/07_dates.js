//Dates
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// in js months start from 0(jan) 1(feb)
// console.log(myCreatedDate.toLocaleString())

 let myCreatedDate = new Date("2023-01-14") //in this format month starts from 1 only
// console.log(myCreatedDate.toLocaleString())

// TIMESTAMPS
// In pols when we have to find who have given the fastest answer then we use timestamp

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) // returns time in millisec
console.log(Math.floor(Date.now()/1000))// gives time in second

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())// returns month
console.log(newDate.getDay()) // retruns day

//using toLocaleString we can customize the format
newDate.toLocaleString('default',{
    weekday: "long",
})