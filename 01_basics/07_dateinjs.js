let myDate=new Date()
console.log(myDate)//2025-09-16T20:07:49.999Z
console.log(myDate.toString())//Tue Sep 16 2025 20:07:49 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
//  2025-09-16T20:15:41.219Z
// Tue Sep 16 2025 20:15:41 GMT+0000 (Coordinated Universal Time)
// Tue Sep 16 2025
// 2025-09-16T20:15:41.219Z
// 2025-09-16T20:15:41.219Z
// 9/16/2025
// 8:15:41 PM

let myCreatedDate=new Date(2023,0,47)//Thu Feb 16 2023
console.log(myCreatedDate.toDateString())

let mynewDate=new Date(1,2,2025)
console.log(mynewDate.toLocaleString())//9/15/1906, 12:00:00 AM

let myTimeStamp=Date.now()
console.log(myTimeStamp)
//we will get values which we can use to compare time in ms from 1 jan 1970
console.log(mynewDate.getTime())
// 1758054881328
// -1997481600000

//if you want to convert in seconds
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

 

