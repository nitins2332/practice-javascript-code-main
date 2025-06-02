const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
let accountCity = "Jaipur"

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountEmail, accountPassword, accountCity, accountId])

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])