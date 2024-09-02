 /*
    There are various ways to create a variable in javascript :-
    let 
    const 
    var 
 */
const accountId=1234
let accountEmail= "ritesh@gmail.com"
var accountPass='12'
accountCity= "Jaipur"
let accountState;

// accountId=10;  reason:-  this is assigned as a const variable so we cannot change it
console.log(accountId); // to print the value 

accountEmail= "xyz@google.com"
accountPass = "567"
accountCity ="mumbai"
//we can change all this variables 

console.table([accountId,accountEmail,accountPass,accountState,accountCity]);
// get an output as a table with its index and value 
/*
Prefer not to use var because in block and function scope 

*/