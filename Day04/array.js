const msg=()=>console.log("Arrow function");
let data=[10,20,50,60.56, 70.2 ,"kiet",msg];
console.log(data);
data[6]();

// for(let i=0;i<data.length;i++){
//     console.log(`Value of ${i} is ${data[i]}`);
// }

// for(let index in data){
//     console.log(`Value of ${index} is ${data[index]}`);
// 

// for(let value of data){
//     console.log(`Value of Array=${value}`);
// }

data.forEach(value=>console.log(`Value is ${value}`));