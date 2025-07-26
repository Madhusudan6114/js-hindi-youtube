// primitive

// 7 types :string,number,Bo0lean,null,undefined,Symbol,BigInt 

//Reference type (non primitive)
//array,Objects,functions;

// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id===anotherid)
//output will false

const bigNumber=123456789n //=>bigInt


////////////////////////////////////////////////////////////////////////////////////////////

//Memory
//2 // 2 types
//stack(primitive),Heap(Non primitive)

let myyoutubename="madhusudan.com"
anothername=myyoutubename

anothername="mdm"
// console.log(myyoutubename)
// console.log(anothername)

let userOne={
    email:"user@google.com",
    upi:"abc@ybl"
}

let usertwo=userOne
usertwo.email="madhusudan.com"

console.log(userOne.email)
console.log(usertwo.email)



