function Person(n,c)
{
    this.name = n
    this.city =c
    this.show = function()
    {
        console.log(this.name)
    }
}

let p = new Person("Dhruv","Indore")
p.show()