//reduce method
const nums=[1,2,3]

const total= nums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`)
    return acc+currval;
},0)

console.log(total)//6

// //acc:0 and currval:1
// acc:1 and currval:2
// acc:3 and currval:3
// 6

const mytotal=nums.reduce((acc,currval)=>acc+currval,0)

const shoppingcart=[
    {
    itemName:"js course",
    price:999
},
    {
    itemName:" python",
    price:999
},
    {
    itemName:" cpp",
    price:999
}
]

const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(pricetopay)//2997
