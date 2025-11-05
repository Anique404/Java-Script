// create objects

const firstname="name";
const student={
    name:"Anique",
    lastname:"Azhar",
    rollno:42,
    //how to create object in object
    address:{
        city:"sadiq Abad",
        District:"Rahim Yarkhan",
    },

    // this store all variable in object
    // Arrow function do not control this 
    // only simple functio use this

    getfunction:function(){
        return this.address;
    },

};

console.log(student);

//how to access objects

const roll=student.rollno;
console.log(roll);


const Name=student[firstname];
console.log(Name);

//how to create and update value in objects

student.weight="50kg";
student.rollno=20;
console.log(student);

const Address=student.address.city;
console.log(Address);


console.log(student.getfunction());



