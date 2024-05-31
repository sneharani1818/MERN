import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Student = () => {
    const param=useParams();
    const [studentInfo, setStudentInfo]=useState([
        {sid:"1",sname:"student1", marks:"90%"},
        {sid:"2",sname:"student2", marks:"80%"},
        {sid:"3",sname:"student3", marks:"70%"},
        {sid:"4",sname:"student4", marks:"85%"},
    ]);
  return (
    <div>
        {param.name
        ?JSON.stringify(
            studentInfo.find((student)=>student.sname===param.name))
        :JSON.stringify(studentInfo)}
    </div>
  )
}

export default Student