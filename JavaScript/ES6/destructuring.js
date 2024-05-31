const data=[10,20,30,40];
// let x=data[0];
let [x,y,z,w]=data;
console.log(x,y,z,w);
const studentInfo={
    name:"Sneha",
    course:"MCA",
    rollno:1
}
let {name:sname, course:mycourse, rollno:rnumber}=studentInfo;
console.log(sname, mycourse, rnumber);
let {course}=studentInfo;
console.log(course);