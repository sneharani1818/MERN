const sum=(num1, num2, num3)=>
{
    console.log("Sum=",(num1+num2+num3));
}
let value=[20,30,40];
sum(...value);
value=[10,20,30,40,50];
sum(...value);