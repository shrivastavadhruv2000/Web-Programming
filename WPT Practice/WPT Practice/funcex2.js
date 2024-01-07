function dojob(f10){
    for(let i=0;i<5;i++){
        f10();
    }
}

dojob(function(){
    console.log("我是函数表达式");
})

function test(){
    console.log("test");
}

dojob(test)

dojob(()=>{console.log("heys")})