const sumButton=document.getElementById("sum");
// const olddata=document.getElementById("result").innerHTML;
sumButton.addEventListener("click",()=>{
    let num1=prompt("Enter number 1",0);
    let num2=prompt("Enter number 2",0);
    let result=`Sum of ${num1}, ${num2} =${parseInt(num1)+parseInt(num2)}`;
    confirm("confirm");
    document.getElementById("result").innerHTML=result;
});
// sumButton.addEventListener("click",()=>{
//     document.getElementById("result").innerHTML=olddata+(2+2);
// });