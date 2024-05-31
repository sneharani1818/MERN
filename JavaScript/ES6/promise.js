//replcement of callback, async and await
//won't terminate abnormally
//two functions as parameters- resolve and reject
//class in JSS since capital letter of Promise

let age=10;
const info=new Promise((resolve, reject)=>{
    if(age>=18){
        resolve("You can vote");
    }else{
        reject("You cannot vote");
    }
})
info.then(result=>console.log(result))
    .catch(error=>console.log(error));


//async and await
//async fn will not hold screen/browser
//async-await don't know reject---drawback then we have to use try catch to resolve the exception
const resultInfo=async ()=>{
    try{
    let result=await info;
    console.log(result);
    }catch(error){
        console.log(error);
    }
}
resultInfo();