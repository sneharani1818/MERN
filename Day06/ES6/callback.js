const sum=(num1, num2,print)=>{
    let s=num1+num2;
    // print("Sum="+s);
    print(s);
}
const print=(msg)=>{
    console.log(msg);
}
//sum is higher order funder- a function that call another function as parameter
//and call back function is print function/anonymous function
sum(10,20,(sum)=>{
    if(sum>20){
        console.log("greater than 20");
    }else{
        console.log("Less than 20");
    }
});

// sum(20,30,print);
// print(msg);
// sum(20,30,(msg)=>{
//     console.log(msg);
// });

// First class function- which can be used as Parameter, variable or can be passed, higher order fn, call back fn
//one function act as higher order or call back as well

//pure function-doesn not even modify variables

