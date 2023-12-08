console.log("Abhi IS raj's Husband")

// let x=5;
// console.log(x)
// console.log(20)
// console.log("Hello",50)

console.log(add(3))
function add(n){
    if(n>0){
        return n+add(n-1)
    }
    return 0
}

function sum(x,y)
{
    console.log(x+y)
}

sum("abhi","rohit")

var n=5
function fact(n){
    if(n>0){
        return n*fact(n-1)
    }
    return 1
}

console.log(fact(n))




