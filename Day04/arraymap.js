let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);

value.map(item=>console.log(`value X 10 =${item*10}`));

let sumValue=value.reduce((a,b)=>a+b);
console.log(`Sum of Array = ${sumValue}`);

let evenNum=value.filter(item=>item%2===0);
console.log("even number =",evenNum);