const msg=()=>{
    console.log("Welcome to Arrow function");
}
msg();

const sum=(num1,num2)=>console.log("Sum=",(num1+num2));
sum(23,56);

const mul=(num1,num2)=>num1*num2;
console.log(mul(23,56));

const sub=(num1,num2)=>{return (num1-num2)};
console.log(sub(23,56));

// to return multiple lines in react
// const msg1=()=>(
//     console.log("Welcome to Arrow function");
//     console.log("Welcome to Arrow function again");
// );