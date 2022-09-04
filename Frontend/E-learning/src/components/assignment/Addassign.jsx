import React from "react";
import Form from 'react-bootstrap/Form'
import { MDBFile } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
const baseUrl='http://127.0.0.1:8000/assignment';

function Upload_assignment(props) {
const [cats,setCats]=useState([]);
const [data,setData]=useState({
  grades:"",
  upload_assign:"",
  assignment_video:"",
})

useEffect(()=>{
  try{
    axios.get(baseUrl+'/assignments/')
    .then((res)=>{
      setCats(res.data);
      console.log(res.data)
      });
    }catch(error){
      console.log(error);
    }
  },[]);

  
function handle(e){
    const newdata={...data}
    newdata[e.target.name]= e.target.value
    setData(newdata)
    console.log("hello ",newdata);
}

// to add assignment 
function submit(e){
  console.log("done");
  console.log(e.target.upload_assign.files[0]);
  e.preventDefault();
  axios.post("http://127.0.0.1:8000/assignment/assignmentm/",{
    grades:data.grades,
    upload_assign: e.target.upload_assign.files[0],
    assignment_student:props.user.id,
    // assignment_student:data.assignment_student,
    assignment_video:'1',
  },{headers:{
    'content-type':'multipart/form-data',
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': `token ${props.user.token}`,
  }})
  .then(res=>{console.log("iam her",res.data);
    return alert('Your assignment has been CREATED successfully')})
}
 
console.log(cats)
  return (
    <div>
      <h1>upload your assignment</h1><br />
      <Form onSubmit={submit}>
      <Form.Control type="text" placeholder="grades" name="grades" onChange={(e)=>handle(e)} /><br />
      <MDBFile id='customFile' name="upload_assign" onChange={(e)=>handle(e)}/><br />
      <br />
      <input type="submit" />
      </Form>
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(Upload_assignment);