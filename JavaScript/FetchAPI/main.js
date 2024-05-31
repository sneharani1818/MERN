const tableID=document.getElementById("table");
const fetchData=async ()=>{
    const dataJSON=await fetch("https://api.github.com/users");
    const data=await dataJSON.json();
    let displayInfo="<table border='1'>";
    displayInfo+="<tr>";
    displayInfo+="<td>ID</td><td>Name</td><td>Image</td>";
    displayInfo+="</tr>";
    for (person of data){
        displayInfo+="<tr>";
        displayInfo+=`<td>${person.id}</td><td>${person.login}</td><td><img src=${person.avatar_url} width=${100} height=${100}></td>`;
        
        displayInfo+="</tr>";
    }
    displayInfo+="</table>";
    tableID.innerHTML=displayInfo;
}
fetchData();


//using promise
// fetch("https://api.github.com/users")
// .then(dataJSON=>dataJSON.json())
// .then(data=>{
//         displayInfo="<table border='1'>";
//         displayInfo+="<tr>";
//         displayInfo+="<td>ID</td><td>Name</td><td>Image</td>";
//         displayInfo+="</tr>";
//         for (person of data){
//             displayInfo+="<tr>";
//             displayInfo+=`<td>${person.id}</td><td>${person.login}</td><td><img src=${person.avatar_url} width=${100} height=${100}></td>`;
            
//             displayInfo+="</tr>";
//         }
//         displayInfo+="</table>";
//     tableID.innerHTML=displayInfo;
//     })
//     .catch(error=>{
//         console.log("Error occured-",error);
//     })
