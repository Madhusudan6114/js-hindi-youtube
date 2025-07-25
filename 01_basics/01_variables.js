const accountId=145555
let accountEmail="madhusudan@google.com"
var accountPassword="12345678"
accountCity="Bhopal"
let accountState

 /*
 prefer not to use var because issue in block scope and functional scope

 */

accountEmail="abc@gmail.com"
accountPassword="11111"
accountCity="Nanded"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
