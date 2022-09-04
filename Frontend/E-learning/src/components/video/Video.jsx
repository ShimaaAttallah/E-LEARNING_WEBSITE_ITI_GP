import axios from "axios";
import Form from 'react-bootstrap/Form';
import { MDBFile } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function Video(props) {
  const [video, videoSet] = useState({});
  const [videolist, videolistSet] = useState([]);
  const [video_id, video_idtSet] = useState(1);
  let { course_id } = useParams();
  const [loading, loadingSet] = useState(false);

  //new
  const [cats,setCats]=useState([]);
  const [data,setData]=useState({
  grades:"",
  upload_assign:"",
  assignment_video:"",
})
  function change(event) {
  videoSet(videolist[event.target.value]);
  video_idtSet(video.id);
}
// new 
function handle(e){
    const newdata={...data}
    newdata[e.target.name]= e.target.value
    setData(newdata)
    console.log("hello ",newdata);
}

function submit(e){
    console.log("done");
    console.log(e.target.upload_assign.files[0]);
    e.preventDefault();
    console.log('ddddddd',video_id)
    loadingSet(true);
    axios.post("https://ammaryasser.pythonanywhere.com/assignment/assignmentm/",{
      upload_assign: e.target.upload_assign.files[0],
      assignment_student:props.user.id,
      // assignment_student:data.assignment_student,
      assignment_video:video_id,
    },{headers:{
      'content-type':'multipart/form-data',
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `token ${props.user.token}`,
    }})
    .then(res=>{console.log("iam her",res.data);
      loadingSet(false);
      return alert('Your assignment has been submited successfully')})
      .catch((error) => {
        loadingSet(false);
        console.log(error);
      });
  }
  useEffect(() => {
    axios
      .get(`https://ammaryasser.pythonanywhere.com/video/list/${course_id}`, {
        headers: {
          Authorization: `token ${props.user.token}`,
        },
      })
      .then((response) => {
          videolistSet(response.data);
          videoSet(response.data[0]);
          video_idtSet(response.data[0].id);
          console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.user.token]);
  console.log(video_id);
  return (
    !video?<div className="alert alert-warning m-5">the playlist is empty</div>:<div>
    {props.user.is_staff == "true"?
    <div className="container mx-auto">
      <div className="w-100 ">
        <div className="m-5">
          <div className="text-secondary" style={{borderRadius:20}}><h1>{"Video Name : " + video.title}</h1></div> 
        
       {video.url?<ReactPlayer url={video.url} controls style={{ margin: "auto" }} />:<div className="alert alert-denger"> sorry there is no video in the playlist</div>}
          <div className="container mt-5">
            <div className="row">
              <div className="col-6">
                <div className="card">
                {videolist.map((item, index) => (
                    <div className="container card p-1 mb-2">
                      <div className="row d-flex justify-content-between p-1">
                        <div className="card col-6 bg-light m-2">
                          {item.title}
                        </div>
                        <button
                          type="button"
                          className="btn  btn-info col-4 m-2"
                          value={index}
                          onClick={change}
                        >
                          watch
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-6">
                <Form onSubmit={submit}>
                      <br />
                      <div className="d-flex">
                          
                            <div className="mx-3">
                              <NavLink to={`/allassignment/${course_id}`} style={{ textDecoration: 'none', color: 'white' }}><p className=' btn btn-primary'>
                                view assignment
                              </p></NavLink>  
                            </div>
                      </div>
                </Form>    
              </div>      
            </div>
            <br />     
          </div>
        </div>
      </div>
    </div>
    :
    <div className="container mx-auto">
    <div className="w-100 ">
      <div className="m-5">
      <div className="text-secondary" style={{borderRadius:20}}><h1>{"Video Name : " + video.title}</h1></div> 
      {video.url?<ReactPlayer url={video.url} controls style={{ margin: "auto" }} />:<div className="alert alert-denger"> sorry there is no video in the playlist</div>}
        <div className="container mt-5">
          <div className="row">
          <div className="col-6">
                <div className="card">
                {videolist.map((item, index) => (
                    <div className="container card p-1 mb-2">
                      <div className="row d-flex justify-content-between p-1">
                        <div className="card col-6 bg-light m-2">
                          {item.title}
                        </div>
                        <button
                          type="button"
                          className="btn  btn-info col-4 m-2"
                          value={index}
                          onClick={change}
                        >
                          watch
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            <div className="col-6">
                  <Form onSubmit={submit}>
                        <MDBFile className="w-50" id='customFile' name="upload_assign" onChange={(e)=>handle(e)} required/><br />
                        <div className="d-flex">
                            {loading ? (
                            <div className="spinner-border text-info "  role="status">
                            </div>
                            ) : (<Button className="btn"  type="submit">submit</Button>)}
                        </div> 
                  </Form> 
              </div>         
          </div>    
        </div>
      </div>
    </div>
  </div>
}</div>
   
  );
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(Video);