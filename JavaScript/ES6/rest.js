//rest parameters
// const sum=(num1, num2)=>{
//     console.log("Sum of numbers=",(num1+num2));
// }
const sum=(num1=0,num2=0,...numbers)=>{
    let s=0;
    if(numbers.length>0){
        s=numbers.reduce((a,b)=>a+b);
    }
    console.log("Sum of numbers=",(num1+num2+s));
}
sum(12,34);
sum(12,34,45,67); 
sum();
