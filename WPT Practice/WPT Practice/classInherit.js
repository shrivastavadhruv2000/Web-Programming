
class Car{
  static type="sedan"
  constructor(brand){
    this.carname=brand;
  }
  present(){
    return "I have a" + this.carname
  }
}

class Model extends Car{
  constructor(brand,model){
    super(brand);
    this.modelname = model;
  }
  show(){
    return super.present()+ " it is a "+this.modelname;
  }
}

let myCar = new Model("Ford","Mustang")
console.log(myCar.show()) // I have a Ford Mustang
let carbrand= new Car("Ford","Mustang")
console.log(carbrand.present())//I have a Ford Mustang</s>
















// class Car {
//     static type="sedan"
//    // carname="maruti"
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang")
//   console.log(myCar.show())
//   console.log(Car.type , Car.carname, myCar.carname)
  



//   //document.getElementById("demo").innerHTML = myCar.show();



  