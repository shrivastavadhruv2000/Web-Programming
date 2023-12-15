let fnregex=/^[A-Z][a-z]+/
let fname="Dhruv"
let fnm=fname.match(fnregex)
console.log(fnm)


let lnregex=/^[A-Z][a-z]+/
let lname="Shrivastava"
let lnm=lname.match(lnregex)
console.log(lnm)


let pregex=/[-_#@]/
let pass="yweuy_jhgwe"
let pm=pass.match(pregex)
console.log(pm)

let eregex=/[a-z0-9][@]\.com/
let email="ashghg8@.com"
let em=email.match(eregex)
console.log(em)

let dregex=/(0[1-9]|[12][0-9]|3[01])-([1-12])-[2000-2023]/
let dob="05-11-2022"
let dm=dob.match(dregex)
console.log(dm)
