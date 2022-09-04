// import { useParams } from 'react-router-dom'
// import './css/CourseDetail.css'
// import Card from 'react-bootstrap/Card';
// import axios from "axios";
// import React, { useState, useEffect } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// export default function CourseDetail() {
//     let [course,setCourse] = useState([]);
//     let {course_id} = useParams();
//     function getCourseData(){
//         axios.get(`https://ammaryasser.pythonanywhere.com/course/rest/generics/${course_id}`)
//         .then((response)=>{
//             setCourse(response.data);
//             console.log("yarab:",response.data);
//         })
//         .catch((error)=>{
//           console.log(error);
//         })
//       }
//       useEffect(()=>{
//         getCourseData(); 
//       },[]);
      
//   return (
    
//     <>
//         <div className='container mt-3 d-flex'>
//             <div className='row d-flex'>
//                 <img className='course_image' variant="top" src={course.course_image} alt={course.course_name}/>
//             </div>    
//             <div className="col-8 mt-4">
//                 <h2>Course Title: {course.course_name}</h2>
//                 <p>Course Description: {course.course_description}</p>
//                 <p className="fw-bold">Course Instructor: <a href="#">{course.course_Instructor}</a></p>
//                 <p className="fw-bold">Rating: {course.course_rate}</p>
                
//             </div>
//         </div>
//         <div className="card mt-3 mx-4">
//             <Card >
//             <Card.Header>PlayList</Card.Header>
//             <ListGroup variant="flush">
//                 <ListGroup.Item >Video1 <button className='btn btn-sm btn-secondary float-end'>Play</button></ListGroup.Item>
//                 <ListGroup.Item >Video2 <button className='btn btn-sm btn-secondary float-end'>Play</button></ListGroup.Item>
//                 <ListGroup.Item >Video3 <button className='btn btn-sm btn-secondary float-end'>Play</button></ListGroup.Item>
//             </ListGroup>
//             </Card>
//         </div>
//     </>
//  )
// }
