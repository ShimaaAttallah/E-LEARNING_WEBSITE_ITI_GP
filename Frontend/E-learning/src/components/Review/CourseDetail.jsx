import { useParams } from "react-router-dom";
import "../css/CourseDetail.css";
import Card from "react-bootstrap/Card";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate, NavLink } from "react-router-dom";
import { connect } from "react-redux";
function CourseDetail(props) {
  // console.log(props.user.token)

  let [course, setCourse] = useState([]);
  let { course_id } = useParams();
  // console.log(typeof(course_id));
  const navigate = useNavigate();
  // review----rating-----description
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  function getCourseData(props) {
    axios.get(`https://ammaryasser.pythonanywhere.com/course/rest/generics/${course_id}`)
      .then((response) => {
        setCourse(response.data);
        console.log("yarab:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getCourseData();
    try {
      axios
        .get(
          `https://ammaryasser.pythonanywhere.com/api/review/index/course/${course_id}`
        )
        .then((res) => {
          setReviews(res.data);
          // console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  // ----------------------to add review----------------------
  // const addReviewHandler = async (e) => {
  //     e.preventDefault()
  //     let review = {
  //         course: Number(course_id),
  //         rate: rating,
  //         description: description,
  //         user: Number(props.user.id)
  //     }
  //     await axios.post('http://127.0.0.1:8000/api/review/index/', review)
  //     navigate.push('index/')
  // }

  function rate(el) {
    let x = [];
    for (let i = 0; i < el; i++) {
      x.push(<i className="fa-solid fa-star reviewrate"></i>);
    }
    return x;
  }
console.log("hello props",props.user)
  return (
    <>
      {/* <div id='detait-c' className="d-flex">
    <div>
    <Card>
        <Card.Img src={course.course_image} alt={course.course_name} height="700"/>
        <Card.ImgOverlay>
            <Card.Text className="">Course Title: {course.course_name}</Card.Text>
            <Card.Text>Course Description: {course.course_description}</Card.Text>
        </Card.ImgOverlay>
        </Card>
    </div>
    <div>
        <Card>
        <Card.Img src={course.course_image} alt={course.course_name} height="700"/>
        <Card.ImgOverlay>
            <Card.Text className="course mt-5 w-bold">Course Title: {course.course_name}</Card.Text>
            <Card.Text>Course Description: {course.course_description}</Card.Text>
        </Card.ImgOverlay>
        </Card>
    </div>
    </div> */}
      <div className="container-fluid ">
        <div className="row d-flex detail">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <h2>Course Name </h2>
            <h3 className="mb-3 text-muted">{course.course_name}</h3>
            <h2>Course Description  </h2>
            <p className="descrip text-muted">{course.course_description}</p>
            {/* <p className="fw-bold">Course Instructor: <a href="#">{course.course_Instructor}</a></p>
                <p className="fw-bold">Rating: {course.course_rate}</p> */}
                {/* <h2 >Course Cotegory: </h2>
                <p className='descrip text-muted'>{course.course_category.cat_name}</p> */}
            </div>
            <div className='col-lg-6 col-sm-12 col-md-12'>
                <img variant="top" src={course.course_image} alt={course.course_name} height="330" width="400"/>
            </div> 

        </div>
      </div>
      {/* <div className="card mt-3 mx-4">
            <Card >
            <Card.Header>PlayList</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item >Video1 <button className='btn btn-sm btn-secondary float-end'>Play</button></ListGroup.Item>
                <ListGroup.Item >Video2 <button className='btn btn-sm btn-secondary float-end'>Play</button></ListGroup.Item>
                <ListGroup.Item >Video3 <button className='btn btn-sm btn-secondary float-end'>Play</button></ListGroup.Item>
            </ListGroup>
            </Card>
        </div> */}
      <div className="container mt-5">
        <div className="row d-flex R-review">
          {/* ------how to show review in course details------ */}
          <h2>
            <span>Course Reviews</span>
          </h2>
          <div className="scroll">
            {reviews.length > 0 ? (
              reviews.map((review) => {
                return (
                  <p className="fw-bold" key={review.id}>
                    Rating: {rate(review.rate)} <br />
                    Description: {review.description}
                  </p>
                );
              })
            ) : (
              <p className="text-danger"> No reviews for this Course. </p>
            )}
          </div>
        </div>
        <div id="Add-R">
        {props.user.token?<div>
          <h2 className="text-center mt-5">Add Review</h2>
          <NavLink to={`/addreview/${course.id}`} className="btn btn-primary">
            Add Review
          </NavLink></div>:<div></div>}
          {/* -------form to add review------ */}
          {/* <div id="review">
                    <div class="container">
                        <div class="review-box">
                            <div class="left"></div>
                            <div class="right">
                                <h2>Add Review</h2>
                                <Form onSubmit={addReviewHandler}>
                                    <Form.Group className="mb-3" controlId="rating">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control class="field" value={rating} onChange={(e) => setRating(e.target.value)} type="number"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control class="field" placeholder="Enter Review Description" value={description} onChange={(e) => setDescription(e.target.value)} as="textarea"/>
                                    </Form.Group>
                                    <Button class="btn" type="submit">Add Review</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
      </div>
    </>
  );
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(CourseDetail);
