const score=400

// we can explicitily define that i want only Number datatype

const balance=new Number(100)
console.log(balance)//[Number:100]

console.log(balance.toString().length)//3
console.log(balance.toFixed(2))//use when building ecommerce app//100.00

const othernumber=23.8966
console.log(othernumber.toPrecision(3))//23.9
//123.8966=>124
//1123.8966=>1.12e+3

const  hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//////////////////////////////////////////////////////////////////////
//Maths

//maths library comed default in javascript very powerful library

console.log(Math)
console.log(Math.abs(-4))//=>4
console.log(Math.round(4.3))//=>4
console.log(Math.ceil(4.2))  //=>5
console.log(Math.min(4,3,6,8))//=>3
console.log(Math.max(4,3,6,8))//=>8
// we will use this math library most math .random
console.log(Math.random())//==>0.52794661653314423//gives value in between 0-1 random values
console.log(Math.floor(Math.random()*10)+1)

const min=10;
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
