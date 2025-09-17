const marvel heroes=["thor","Ironman","spiderman"]
const dc_heoroes=["superman","flash","batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[3][1])//not good syntax

const allheroes=marvel_heroes.concat(dc_heroes)//concat add array and return s new array

console.log(marvel_heroes)

const allnewheroes=[....marvelheroes,.....dc_heroes]

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=anotherarray.flat(Infinity)
console.log(real_another_array)//[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Madhusudan"))//False
//convert to array
console.log(Array.from("Madhusudan"))

console.log(Array.from({name:"hitesh"}))//interesting
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))//[100,200,300]



