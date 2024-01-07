function sayhi(choice,greeting){
    function Indian(name){
        console.log(greeting)
        console.log("namaste",name)
    }
    function Japanese(name){
        console.log("konnichiwa",name)
    }

    switch(choice){
        case 1: return Indian;break;
        case 2: return Japanese;break;
    }
}

let rv=sayhi(2,"Good Morning")
rv("Dhruv")
console.log(rv); // Good Morning Namaste!</s>