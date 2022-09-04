import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/Registeration.css";

export default function Registeration() {
  const [error, errorSet] = useState("");
  const [loading, loadingSet] = useState(false);
  const [confirmpass, confirmpasswordSet] = useState({
    check: false,
    meseage: "",
  });
  function toggle() {
    var password = document.getElementsByName("password");
    console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  function confirmtoggle() {
    var password = document.getElementsByName("confirmpassword");
    // console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  let navigate = useNavigate();

  const RegisterFormHandler = (event) => {
    event.preventDefault();
    loadingSet(true);
    var { username, email, password, confirmpassword, is_staff } = event.target;
    if (password.value != confirmpassword.value) {
      confirmpasswordSet({
        check: true,
        meseage: "not the same with password",
      });
    } else {
      confirmpasswordSet({
        check: false,
        meseage: "",
      });
      axios
        .post("https://ammaryasser.pythonanywhere.com/accounts/signup/", {
          username: username.value,
          password: password.value,
          email: email.value,
          is_staff: is_staff.checked,
        })
        .then((response) => {
          console.log(response);
          loadingSet(false);
          navigate("/login");
        })
        .catch((error) => {
          errorSet(error.response.data[Object.keys(error.response.data)[0]]);
          loadingSet(false);
        });
    }
  };
  return (
    <div className="p-5 full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center">
      <div className="col-sm-8 col-md-6 col-lg-4 pb-5 p-3 px-auto">
        <br />
        <Form className="Auth-form" onSubmit={RegisterFormHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-primary">Sign Up</h3>
          <Form.Group className="mb-3" controlId="formBasicusername">
            <Form.Label>User Name</Form.Label>
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <Form.Group className="my-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={toggle}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmpassword"
              placeholder="confirm Password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
              required
            />
            {confirmpass.check && (
              <div className="alert alert-danger">{confirmpass.meseage}</div>
            )}
            <Form.Group className="my-3" controlId="formConfirmBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={confirmtoggle}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="my-3" controlId="formstaffCheckbox">
            <Form.Check
              type="checkbox"
              label="Is instractor?"
              name="is_staff"
            />
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
