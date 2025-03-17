const accountId = 144553
let accountEmail = "deepakyadav@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow" 
let accountState ;

// accountId = 2  // not allowed 

accountEmail = "he@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
-> If we declare the variable in js and leave it uninitialized 
then its value will be undefined 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
