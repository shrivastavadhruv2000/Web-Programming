//let regex=/abc/
//let s="pqrabc"

//let regex=/abc/i
//let s="pqrabc"

//let regex=/[A-Z]/
//let s="pqRAbc"

//let regex=/[a-sA-Z]/
//let s="xyzAbc"

//let regex=/^[A-Z][a-z]+/
//let s="Dhruv"

//let regex=/^[A-Z][a-z]*/
//let s="dhruv123"

//let regex=/[A-Za-z]+[0-9]{3}/
//let s="Pqrabc123"

//let regex=/[A-za-z] +[0-9]{3}$/
//let s="Pqrabc123"

//let regex=/[a-z]{2,3}.com/
//let s="pqr.com"

//let regex=/[a-z]{2,3}\.com/
//let s="pqr.com"

//let regex=/[-_#@]/
//let s="dhr_uv"


console.log(typeof(regex))
let rv=s.match(regex)
console.log(rv)