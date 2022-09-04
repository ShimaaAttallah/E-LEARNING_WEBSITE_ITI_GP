import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {Button, Form} from 'react-bootstrap'
import { Route, useNavigate } from "react-router-dom";

function UploadVideo(props) {
  const [loading, loadingSet] = useState(false);
  let { course_id } = useParams();
  let navigate = useNavigate();


  function uploadvideosubmit(event) {
    event.preventDefault();
    console.log(event.target.url.files[0]);
    loadingSet(true);
    axios
      .post(
        "https://ammaryasser.pythonanywhere.com/video/upload",
        {
          course: parseInt(course_id),
          title: event.target.title.value,
          url: event.target.url.files[0],
        },
        {
          headers: {
            Authorization: `token ${props.user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        navigate(`/mycourses`);
        loadingSet(false);
        console.log(response);
      })
      .catch((error) => {
        loadingSet(false);
        console.log(error);
        // errorSet(error.response.data[Object.keys(error.response.data)[0]]);
        // loadingSet(false);
      });
  }
  return (
    <div>
      <form onSubmit={uploadvideosubmit} enctype="multipart/form-data">
        <div className="p-5 full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center">
          <div className="col-sm-8 col-md-6 col-lg-6 bg-white p-3">
            <div className="">
              {/* new from ammar  */}
              <div><h1>Add Video</h1></div>
              <br />
              <Form.Group className="  my-3 " >
                <Form.Label className='float-start'><h5>Video Title</h5></Form.Label>
                <Form.Control  type="text"  id="title"  name="title" required />
              
              </Form.Group>
              <br />
              <Form.Group className="mb-3 ms-0" >
                <Form.Label className='float-start'><h5>Choose Video</h5></Form.Label>
                <Form.Control  type="file"  name="url" className='mb-2'  required />
              </Form.Group>
              <br /> 
              
              {/* <label htmlFor="title" className="d-inline mx-5 my-2">
                video title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="my-2"
                required
              /> */}
              {/* <input
                type="file"
                id="video"
                name="url"
                className="mx-5 my-2"
                required
              />
              <br /> */}
              
              {loading ? (
            <div className="spinner-border text-info" role="status"></div>
            ) : (<input type="submit" className="mx-5  my-2 btn btn-success" />)}

          
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(UploadVideo);