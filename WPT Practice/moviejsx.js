let movie = {
    name:"ABCD",
    Director:"XYZ",
    cast:{
        heroien:"Alia",
        hero:"Ranveer",
        vilan:"Ritesh",
    },
    release:"12-12-23",
    budger:10000000,
    kids:true

}

// console.log(movie.name);
// console.log(movie.cast);
// console.log(sizeof(movie.cast))
let count
for(var prop in movie) {
    if(movie.hasOwnProperty(prop))
        ++count;
}
console.log(count)
