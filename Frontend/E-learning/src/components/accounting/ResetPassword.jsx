import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/ResetCode.css";

export default function ResetPassword() {
  const [error, errorSet] = useState("");
  const [loading, loadingSet] = useState(false);
  let navigate = useNavigate();
  function LoginFormHandler(event) {
    event.preventDefault();
    var { username } = event.target;
    loadingSet(true);
    axios
      .post("https://ammaryasser.pythonanywhere.com/accounts/resetpassword/", {
        username: username.value,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("username", username.value);
        loadingSet(false);
        navigate(`/resetcode`);
      })
      .catch((error) => {
        errorSet(error.response.data[Object.keys(error.response.data)[0]]);
        loadingSet(false);
      });
  }
  return (
    <div className="p-5 full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center">
      <div className="col-sm-8 col-md-6 col-lg-4 p-3 px-auto">
        <Form className="Auth-form" onSubmit={LoginFormHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-primary">Reset Password</h3>
          <Form.Group className="mb-3" controlId="formBasicusername">
            <Form.Label>user name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              name="username"
              pattern="^[a-zA-Z].{2,20}"
              title="user name must start with character and contain at least 3 words"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {error.length > 0 && (
            <div className="alert alert-danger">{error}</div>
          )}
          {loading ? (
            <div className="spinner-border text-info" role="status"></div>
          ) : (
            <div className="d-grid gap-2 mt-3 mb-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
          )}
        </div>
        </Form>
      </div>
    </div>
  );
}
