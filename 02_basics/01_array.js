//array

const myarr=[0,1,2,3,4,5,true]
const myHeroes=["shaktimaan","naagraj"]
const myarr2=new Array(1,2,3,4)

//Array Methods

myarr.push(6)//add element in array

myarr.unshift(9)//add 9 in t he satrt of array by shifting other elemnts to right
myarr.shift()//removes element from first of the array
//some questions are asked which gives answer in true or false
console.log(myarr.includes(9))
console.log(indexOf(9))=>-1;
console.log(indexOf(3))=>3;

const newarray=myarr.join() 

console.log(myarr)
console.log(newarr)//all values changes to string

//slice or splice

console.log("A",myarr);

const myn1=myarr.slice(1,3)//3 is not included

console.log(myn1)
console.log("B",myarr)

const myn2=myarr.splice(1,3)
console.log(myn2)//splice manipulates the original array cuts the ranges from the original array



