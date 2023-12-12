let obj = {name: 'abc', city:' pune'}
let pro =  {age:45, qual: 'ME'}
let pro1 = {hobby :'xyz'}

Object.setPrototypeOf(obj,pro)
Object.setPrototypeOf(pro,pro1)

//console.log(obj.city, obj.age, obj.hobby )

console.log(Object.getPrototypeOf(obj))
// Object.getPrototypeOf(pro),
// Object.getPrototypeOf(pro1))
console.log(obj)