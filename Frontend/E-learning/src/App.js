import logo from "./logo.svg";
import "./App.css";
import Login from "./components/accounting/Login";
import Registeration from "./components/accounting/Registeration";
import ChangePassword from "./components/accounting/ChangePassword";
import ResetPassword from "./components/accounting/ResetPassword";
import ResetCode from "./components/accounting/ResetCode";
import { Routes, Route, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import React from "react";
import { getUserFromStorage } from "./redex/actions/getUser";
import { connect } from "react-redux";
import Video from "./components/video/Video";
//-------------------shimaaa---------------------
import CourseDetail from "./components/Review/CourseDetail";
import AddReview from './components/Review/AddReview';
import ContactUS from './components/Review/M_ContactUs';
import AboutUS from './components/Review/M_AboutUs';
// import MyHome from './components/Review/MyHome';
import MyFooter from './components/Review/MyFooter';
import Footer from "./components/Review/Footer/Footer";
import MyServices from "./components/Review/MyServices";
import ScrollArrow from "./components/Review/ScrollArrow"
// import MyTopic from "./components/Review/MyTopic";
// import Search from "./components/Review/Search";
//-------------------alaaa-------------------------
import MyNavbar from './components/course/MyNavbar';
import Home from './components/course/Home';
import AddCourse from './components/course/AddCourse';
import AddCategory from './components/course/AddCategory';
import AllCourses from './components/course/AllCourses';
import MyCourses from './components/course/MyCourses';
import DeleteCourse from './components/course/DeleteCourse';
import UpdateCourse from './components/course/UpdateCourse';
// -------------------------------------------------
// import Upload_assignment from "./components/assignment/Addassign";
import AllAssignment from "./components/assignment/AllAssignments";
import UploadVideo from "./components/video/UploadVideo";
import Error from './components/course/Error';




function App(props) {
  let { user } = props;
  useEffect(() => {
    if (!props.user.loaded) {
      props.getUserFromStorage();
      console.log(props.user);
    }
  }, [user]);
  return (
    <div className="App">
      <MyNavbar /> 
      {/* <Video />
      <UploadVideo /> */}
      <ScrollArrow />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regesteration" element={<Registeration />}></Route>
        <Route path="/changePassword" element={<ChangePassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/resetcode" element={<ResetCode />}></Route>
        {/* --------------Review Shimaaa-------------- */}
        <Route path="/detail/:course_id" element={<CourseDetail />}/>
        <Route path="/addreview/:course_id" element={<AddReview />}/>
        <Route path="/contactus" element={<ContactUS />}/>
        <Route path="/aboutus" element={<AboutUS />}/>
        {/* <Route path="/searchcourse/:string" element={<Search/>} /> */}
        {/* --------------alaa-------------- */}
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/addcourse" element={<AddCourse />}/>
        <Route path="/addcategory" element={<AddCategory />}/>
        <Route path="/allcourses" element={<AllCourses />}/>
        <Route path="/mycourses" element={<MyCourses />}/>
        <Route path="/delete/:course_id" element={<DeleteCourse />}/>
        <Route path="/update/:course_id" element={<UpdateCourse />}/>
        {/* -------------------- ammar ----------------------------- */}
        {/* <Route path="/uploads" element={<Upload_assignment />}></Route> */}
        <Route path="/video/:course_id" element={<Video />}></Route>
        <Route path="/allassignment/:course_id" element={<AllAssignment />}/>
        <Route path="/uploadvideo/:course_id" element={<UploadVideo />}/>

        <Route path="*" element={<Error />}/>
      </Routes>
      {/* <MyTopic/> */}
      <MyServices/>
      <MyFooter/>
      <Footer />
    </div>
  );
}
const mapdispatchtoprops = (dispatch) => {
  return {
    getUserFromStorage: () => dispatch(getUserFromStorage()),
  };
};
const mapstatetoprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapstatetoprops, mapdispatchtoprops)(App);



// search , coursapi , desigen, 