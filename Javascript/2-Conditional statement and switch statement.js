let age = prompt("Please enter your age:");

if(age>85){
    console.log("you are not younger")
}
else if(age<40){
    console.log("you are  younger")
}
else
console.log("You are teenager");

const num=35;
switch(true){
    case num%5 && num%15:
        console.log("number is devisible by 5 and 15");
        break;
        default:
            console.log("number is not devisible by 5 and 15");
            break;
}