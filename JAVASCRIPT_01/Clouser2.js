function counterFactory(seed){
    let count=seed
    function incrementor(){
        return count++
    }

     return incrementor;

}

let incr=counterFactory(1000)
console.log(incr(),incr(),incr())