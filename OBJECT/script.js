var person={
    name:"Raj",
    age:20, 
    isMarried:true,
    address:{
        street:'vivekanand nagar',
        flatNO:638
    }
};
console.log(person);
let person2 = new Object();
person2.name = "Bob";
person2.age = 25;
person2.isMarried = false;
person2.address = {}
person2.address.street = "Gandhi Nagar";
person2.address.flatNO = 101;
console.log(person2);