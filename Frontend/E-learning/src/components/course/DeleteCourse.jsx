import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/FileUploadStyle.css'
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom'
import {  useNavigate } from "react-router-dom";
function DeleteCourse(props) {
    let {course_id} = useParams();
    const [result,settotalResult]=useState(0);
    const [data,setData]=useState([]);
    let navigate = useNavigate();
      useEffect(()=>{
        try{
           axios.get(`https://ammaryasser.pythonanywhere.com/course/rest/generics/${course_id}`,
           {headers:{
            'content-type':'multipart/form-data',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `token ${props.user.token}`,
          }})
         .then((res)=>{
                 settotalResult(res.data.length);
                 setData(res.data)
                 
  
            })
        
        }catch(error){
             console.log(error);
        }
        Swal.fire({
            title:'confirm',
            text:'Are you sure u want to delete this course?!',
            icon: 'info',
            confirmButtonText:'Delete',
            showCancelButton: true
        }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(`https://ammaryasser.pythonanywhere.com/course/rest/generics/${course_id}`,
                    {headers:{
                      'content-type':'multipart/form-data',
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json',
                      'Authorization': `token ${props.user.token}`,
                    }})
                    .then((res) => {
                        navigate(`/mycourses`);
                        Swal.fire("course has been deleted successfully")
                        // settotalResult(res.data.length);
                        // setData(res.data);
                        // window.location.reload();
                        try{
                            axios.get(`https://ammaryasser.pythonanywhere.com/course/rest/generics/${course_id}`)
                          .then((res)=>{
                                  settotalResult(res.data.length);
                                  setData(res.data)
                   
                             })
                         
                         }catch(error){
                              console.log(error);
                         }
            });
        
        }catch(error){
            navigate(`/mycourses`);
            Swal.fire("error,course can't been deleted")
        }
     }else{
        navigate(`/mycourses`);
        Swal.fire("Error,course can't been deleted")
     }
    });

     },[]);

//      
        

  return (
    <div>
    </div>
  )
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(DeleteCourse);
