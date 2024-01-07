function AddMaker(x){
    return function(y){
        return(x + y);
    }
}

const add5=AddMaker(5);
console.log(add5(6));

const add10=AddMaker(10)
console.log(add10(10),add10(20))