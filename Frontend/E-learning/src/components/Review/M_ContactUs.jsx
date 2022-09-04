import React, { useRef } from "react";
import {Button, Form} from 'react-bootstrap'
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {  useNavigate } from "react-router-dom";
import '../css/M_ContactUs.css'

// npm i @emailjs/browser

const ContactUS = () => {
  let navigate = useNavigate();  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_83cqh48",
        "template_sk7u93s",
        form.current,
        "FZ3bgPW3xvc8XyuRY"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate(`/home`);
          console.log("shimaa sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
};

return (
  <div id="conactus">
                    <div className="container">
                        <div className="conactus-box">
                            <div className="left"></div>
                            <div className="right">
                                <h2>Contact Us</h2>
                                {/* <StyledContactForm> */}
                                  <Form className="mb-3" ref={form} onSubmit={sendEmail}>
                                      <Form.Label>Name</Form.Label>
                                      <Form.Control className="field" type="text" name="user_name" />
                                      <Form.Label>Email</Form.Label>
                                      <Form.Control className="field" type="email" name="user_email" />
                                      <Form.Label>Message</Form.Label>
                                      <Form.Control type="textarea" className="field" name="message" />
                                      <input className="btn" type="submit" value="Send" />
                                  </Form>
                              {/* </StyledContactForm> */}
                            </div>
                        </div>
                    </div>
                </div>
    
);
};

export default ContactUS;
// npm install styled-components
// Styles
// const StyledContactForm = styled.div`
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//         width: 100%;
//         height: 35px;
//         padding: 7px;
//         outline: none;
//         border-radius: 5px;
//         border: 1px solid rgb(220, 220, 220);
//         &:focus {
//             border: 2px solid rgba(0, 206, 158, 1);
//         }
//     }
//     textarea {
//         max-width: 100%;
//         min-width: 100%;
//         width: 100%;
//         max-height: 100px;
//         min-height: 100px;
//         padding: 7px;
//         outline: none;
//         border-radius: 5px;
//         border: 1px solid rgb(220, 220, 220);
//         &:focus {
//             border: 2px solid rgba(0, 206, 158, 1);
//         }
//     }
//     label {
//         margin-top: 1rem;
//     }
//     input[type="submit"] {
//         margin-top: 2rem;
//         cursor: pointer;
//         background: #08335e;
//         color: white;
//         border: none;
//     }
// }`;
