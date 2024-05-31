let studentInfo={
    rollno:1,
    name:"Sneha",
    course:"MCA",
    college:"KIET",
    marks:[98,78,77],
    music: ()=>console.log("Play music"),
    play: function playfun(){console.log("Play Badminton")},
}
console.log(studentInfo.marks.forEach(m=>console.log(`Mark=${m}`)));

let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));