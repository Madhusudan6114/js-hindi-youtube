const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.map((num)=>num+10)

console.log(newNums)//maps also return values;
// //[
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

//if scope is opened you need to write return in scope

// //const newNums=myNum.map((num)=>{
//     return nums+10})


//chaining two to three methods directly using

//const newNums=myNums
//              .map((num)=>num*10)
//              .map((num)=>num+1)
//              .filter((num)=>num>=40)  

