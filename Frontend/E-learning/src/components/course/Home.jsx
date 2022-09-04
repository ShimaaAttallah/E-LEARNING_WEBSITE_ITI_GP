import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import MySlider from "./MySlider";
import React, { Fragment, useEffect } from "react";
import MyTopic from './../Review/MyTopic';
import { connect } from "react-redux";

function Home(props) {
  useEffect(() => {
    document.title = `Home`;
  });
  return (
    <>
      <MySlider/>
      <MyTopic/>
      <div className='container mt-4'>
        {/* <h1 className='pb-1 mb-4 ms-0'>All Courses</h1> */}
        <div className='row'>
          <div className='col-md-4'>
          </div>

      </div>
      {props.user.is_staff == "true"?
        <NavLink to="/mycourses"><Button variant="primary p-3 fw-bold fs-5">My Courses</Button></NavLink>
        :
        <NavLink to="/allcourses"><Button variant="primary p-3 fw-bold fs-5">See All Courses</Button></NavLink>
        
      }
      </div>
    </> 
  )
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(Home);