function msg(){
    console.log("Welcome to JS normal Function");
}
msg();
function sum(num1, num2){
    let sum=num1+num2;
    console.log("Sum="+sum);
}
sum(10,20);
function mul(num1, num2){
    return num1*num2;
}
console.log("Multiply=",mul(23,4));
let m=mul(23,4);
console.log("m=",m);