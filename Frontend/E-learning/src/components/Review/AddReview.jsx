import { useParams } from 'react-router-dom'
import '../css/AddReview.css'
import {Button, Form} from 'react-bootstrap'
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";

function AddReview(props) {
    // console.log(props.user.token)
    let [course,setCourse] = useState([]);
    let {course_id} = useParams();
    // console.log(typeof(course_id));
    const navigate = useNavigate();
    // review----rating-----description
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')


    // ----------------------to add review----------------------
    const addReviewHandler = async (e) => {
        e.preventDefault()
        let review = {
            course: Number(course_id),
            rate: rating,
            description: description,
            user: Number(props.user.id)
        }
        
        await axios.post('https://ammaryasser.pythonanywhere.com/api/review/index/', review)
        navigate(-1);
    }
    return (
    <>
        <div id="review">
                    <div className="container">
                        <div className="review-box">
                            <div className="left"></div>
                            <div className="right">
                                <h2>Add Review</h2>
                                <Form onSubmit={addReviewHandler}>
                                    <Form.Group className="mb-3" controlId="rating">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control className="field" value={rating} onChange={(e) => setRating(e.target.value)} type="number"/>
                                        <p className='text-warning'>Rating Value must be 1:5</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control className="field" placeholder="Enter Review Description" value={description} onChange={(e) => setDescription(e.target.value)} as="textarea"/>
                                    </Form.Group>
                                    <Button className="btn" type="submit">Add Review</Button>
                                    {/* <button onClick={() => navigate(-1)}>Go back 1 Page</button> */}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
    </>
)
}
const mapStateToprops = (state) => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToprops)(AddReview);

