import React, { useEffect, useState } from 'react'

const mapStudents=(students)=>{
    console.log(students.Student)
    return students.Student.map((student)=>{
        return<div key={student.id}>
            <h2>Student {student.ID}</h2>
            <p>{student.LastName}</p>
            <p>{student.FirstName}</p>
            <p>{student.Gender}</p>
        </div>
    })
}

const StudentsList = () => {

    const [students,setStudents]=useState([]);

    useEffect(()=>{
      const fetchData=async()=>{
        const res= await fetch('https://hamzakhan2121.github.io/jsonapi/student.json');
        const data=await res.json()
        setStudents(data);
      }

      fetchData()
    },[])

    let content;

    if(students.length===0)
     content=<p >Loading...</p>

     else if(students){
        content=mapStudents(students)
     }

    return (
        <>
            {content}
        </>
    )
}

export default StudentsList