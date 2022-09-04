import React, { useState, useEffect } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import {  useNavigate } from "react-router-dom";
import {useDocumentTitle} from "./setDocumentTitle"
import shadows from '@mui/material/styles/shadows';

function AddCourse(props){
    const [document_title, setDoucmentTitle] = useDocumentTitle("Add New Course");
    let navigate = useNavigate();  
    const [cats,setCats]=useState([]);
    const [data,setData]=useState({
      course_name:"",
      course_description:"",
      course_image:"",
      course_category:"",
     
    })
    



    function submit(e){
      console.log("done");
      console.log(e.target.course_image.files[0]);
      e.preventDefault();
      axios.post("https://ammaryasser.pythonanywhere.com/course/upload_course/",{
        course_name:data.course_name,
        course_description:data.course_description,
        course_image: e.target.course_image.files[0],
        course_category:data.course_category,
        course_instructor:props.user.id,
      },{headers:{
        'content-type':'multipart/form-data',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `token ${props.user.token}`,
      }})
      .then(res=>{console.log(res.data);
       navigate(`/mycourses`);
        return alert('Your course has been CREATED successfully')})
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.name]= e.target.value
        setData(newdata)
        console.log(newdata);
    }
    
    useEffect(()=>{
        try{
          axios.get("https://ammaryasser.pythonanywhere.com/category/generics/category/")
          .then((res)=>{
            setCats(res.data)
            console.log("yaraaaaaaaaaaaab:",res.data);
          });
        }catch(error){
          console.log(error);
        }
      },[]);

return(
 <> 
   <div className='mt-3 col-sm-10 col-md-8 col-lg-6 mx-auto'> <h1>Add New Course</h1></div>
  <div className='container mt-4 w-75 rounded col-sm-10 col-md-8 col-lg-6 bg-light pt-3' style={{maxWidth: "700px", boxShadow: '1px 2px 9px #163E6B',}}>
     
      <Form onSubmit={(e)=>submit(e)}>
        <Form.Group className="  my-3 " >
          <Form.Label className='float-start'><h5>Course Title:</h5></Form.Label>
          <Form.Control  type="text" required   name="course_name"value={data.course_name} onChange={(e)=>handle(e)}/>
        
        </Form.Group>

        <Form.Group className="mb-3 " >
          <Form.Label className='float-start'><h5>Course Description:</h5></Form.Label>
          <Form.Control  type="textarea"  required value={data.course_description} name="course_description" onChange={(e)=>handle(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label className='float-start' name="cat_name"><h5>Course Category:</h5></Form.Label>
          <Form.Select aria-label="Default select example" value={data.course_category} required name="course_category" id="category" onChange={(e)=>handle(e)}>
            {cats.map((category,index)=>{return <option key={index} value={category.pk}>{category.cat_name}</option>})}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 ms-0" >
          <Form.Label className='float-start'><h5>Course Image:</h5></Form.Label>
          <Form.Control  type="file" required accept="image/*" name="course_image" className='mb-2' />
         
        </Form.Group> 

        <br />
        <input type="submit" className='btn btn-primary p-2 mb-5 px-4' />
       
      </Form>
    </div>
    </>
    
);
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(AddCourse);
