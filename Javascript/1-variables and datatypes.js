

//Permitive Data Type

var int=4;
var string="Anique";
var boolean=true;
 console.log(int);


 // Non-Permitive Data Type 



 var object={
    int:4,
    string:"Anique",
 };
 console.log(object);



 var array=[3,true,"Anique"];
 console.log(array);

 // set store unique values  

 var set=new Set([1,1,2,2,4,6]);
 console.log(set);

 // In modern javascript we use contant and let funtion not variable
 // we donot change the value in constant and we must intialize the value of constant

 const name="Anique";
 console.log(name);


 // in variable datatype  local variable access the globle variable and change the value 

 var numb=13;
 {
   var numb=16;
   numb=8;
 }
 console.log(numb);


  // in let datatype local variable  donot access the globle variable and  doesnot change the value 

  
 let num=10;
 {
   let  num=19;
   num=14;
 }
 console.log(num);