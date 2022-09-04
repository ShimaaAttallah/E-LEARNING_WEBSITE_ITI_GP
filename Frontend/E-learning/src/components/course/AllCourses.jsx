import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/CardImage.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDocumentTitle } from "./setDocumentTitle";
import { connect } from "react-redux";
import {  useNavigate } from "react-router-dom";

//new from ammar
// import _ from "lodash";


function AllCourses(props) {
  const [document_title, setDoucmentTitle] = useDocumentTitle("All Courses");
  let [courses, setCourses] = useState([]);
  let navigate = useNavigate();
  //new from ammar
  // const pageSize =8;
  // const[pagenatedPosts,setpagenatedPosts] = useState();
  // const[currentPage,setcurrentPage] = useState(1);
  

  function getAllCourses() {
    axios
      .get(`https://ammaryasser.pythonanywhere.com/course/rest/generics/`)
      .then((response) => {
        setCourses(response.data);
        console.log("yaraaaaaaab tshta8al:", response.data);
        // new from ammar
        // setpagenatedPosts(_(response.data).slice(0).take(pageSize).value());
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllCourses();
  }, []);

  function enroll(e) {
    console.log(props.user.token);
    if(!props.user.token){
      navigate(`/login`);
    }
    axios
      .get(
        `https://ammaryasser.pythonanywhere.com/course/enroll/${e.target.value}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${props.user.token}`,
          },
        }
      )
      .then((res) => {
        alert(res.data.message);
        navigate(`/mycourses`);
      });
  }
  // new from ammar 
  // const pageCount = courses? Math.ceil(courses.length/pageSize) :0;
  // if(pageCount === 1) return null;
  // const pages = _.range(1, pageCount + 1);

  // const pagination=(pageNo)=>{
  //   setcurrentPage(pageNo);
  //   const startIndex=(pageNo - 1) * pageSize;
  //   const paginatedPost = _(courses).slice(startIndex).take(pageSize).value();
  //   setpagenatedPosts(paginatedPost) 
  // };

  return (
    <div className="alert alert-light p-5 ">
      <h1 className="text-center text-light bg-dark">All Courses </h1>
      <div className="container ">
        <div className="row g-3 mx-auto">
        {/* pagenatedPosts */}
          {courses.map((course, idx) => {
            return (
              <>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center pt-2 ">
                  <Card style={{ width: "17.4rem" }} className="me-3 mt-3">
                    <Card.Img 
                      variant="top"
                      src={course.course_image}
                      className="rounded course_image"
                      alt={course.course_name}
                    />
                    <Card.Body>
                      <Card.Title>{course.course_name}</Card.Title>
                      <NavLink
                        to={`/detail/${course.id}`}
                        className=" btn btn-info me-2 "
                      >
                        {" "}
                        Show Reviews
                      </NavLink> 
                      <button
                        className=" btn btn-primary ms-2"
                        name="enroll"
                        value={course.id}
                        onClick={enroll}
                      >
                        {" "}
                        Enroll
                      </button>
                    </Card.Body>
                  </Card>
                </div>
                
              </>
            );
          })}
          
          {/* add pagination new from ammar  */}
          {/* <nav className="d-flex justify-content-center">
            <ul className="pagination">
              {
              pages.map((page)=>(
                  <li className={
                    page === currentPage? "page-item active" : "page-item"
                  }
                  >
                    <p className="page-link"
                    onClick={()=>pagination(page)}
                    >{page}</p>
                  </li>
                ))}
            </ul>
          </nav> */}
          
        </div>
      </div>
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(AllCourses);
