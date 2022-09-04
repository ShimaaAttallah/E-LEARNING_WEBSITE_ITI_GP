import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import {useDocumentTitle} from "./setDocumentTitle"

 function AddCategory(props) {
    const [document_title, setDoucmentTitle] = useDocumentTitle("Add New Category");
    let navigate = useNavigate(); 
    const [list,setList]=useState([]);
    const [cats,setCats]=useState([]);
    const [data,setData]=useState({
      cat_name:"",
    })
    var flag = true;
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
    
    
    function handle(e){
      const newdata={...data}
      newdata[e.target.name]= e.target.value
      setData(newdata)
      console.log(newdata);
      
  }
   
    function submit(e){
        e.preventDefault();
      
          
          cats.some((category,index)=>{
            
            if(category.cat_name === data.cat_name){
              flag=false
              console.log("flag: ",flag);
              return alert(`${data.cat_name} is already taken,please select new name`) 
            }
          })
          
          console.log("flag: ",flag);

          if(flag){
            axios.post("https://ammaryasser.pythonanywhere.com/category/generics/allcategory",{
              cat_name:data.cat_name,
            },{headers:{
              'content-type':'multipart/form-data',
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
              'Authorization': `token ${props.user.token}`,
            }})
            .then(res=>{console.log(res.data);
              navigate(`/mycourses`);
              return alert(`${data.cat_name} has been added successfully`)
            })
          }
         
     
     }
     

return(
 
  <div className='container mt-4 w-75'>
      <div className='bg-light'> <h1>Add New Category</h1></div>
      <Form onSubmit={(e)=>submit(e)}>
        <Form.Group className="  my-3 " >
          <Form.Label className='float-start'><h5>Category Name:</h5></Form.Label>
          <Form.Control  type="text" name="cat_name" required value={data.cat_name} onChange={(e)=>handle(e)}/>
        </Form.Group>
        <button className='btn btn-primary p-2 ' style={{maxWidth: "110px",minWidth: "110px"}}>Add</button>
      </Form>
      <br />
      <div className="mx-auto"  style={{maxWidth: "700px", boxShadow: '1px 2px 9px #163E6B',}}>
          <h3> Already Created</h3>
          <ul>
          
              {cats.map((category, index) => {
                return (
                  <option key={index} value={category.id}>
                    {category.cat_name}
                  </option>
                );
              })}
          
          </ul>
      </div>
    </div>
  );
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(AddCategory);
