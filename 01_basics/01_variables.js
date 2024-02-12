const accountId = 14452
let accountEmail = "dhruvmehta1311@gmail.com"
var accountPassword = "12345"
accountCIty = "Jaipur"

// accountId = 2 -> It's a const so it's not allowd to change it's value

accountEmail = "flashxx001@gmail.com"
accountPassword = "32343322"
accountCity = "Pune"

console.log(accountId);


/*
Prefer not to use Var.
Because of issue in Block Scope and Functional Scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])