
// this is function
function area(height,width){
    let a=height*width;
    //console.log(a);
    return a;
}

let h=30,w=20;
let answer=area(h,w);
console.log(answer);

// Anynomous Function

const login=function(username){
console.log(username)
}

login("Anique");

// call the function 

function name(username,callby){
console.log(username);
callby();
}
function goodbye(){
console.log("Hii");
}

name("Ali",goodbye)

// this is anonymous function call

name("Asad",function(){
    console.log("Where ar you from");
})

// Arrow function 

const calculatearea=(height,width) =>  height*width;

const ans=calculatearea(10,5);

console.log(ans);

// how to create a constructor
// the first letter of constructor is always capital

function Friend(bestfriend,justfriend){

    this.best=bestfriend;
    this.friend=justfriend;

    this.getfunction=function(){
        return this.best+" "+this.friend;
    };
   

}

const cntrt=new Friend("Irfan","Asad");
console.log(cntrt);
console.log(cntrt.getfunction());

