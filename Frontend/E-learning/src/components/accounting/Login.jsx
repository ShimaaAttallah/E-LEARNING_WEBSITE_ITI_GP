import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { setUserLocaally } from "../../redex/actions/getUser";
import "./css/Login.css";
// asd #Asddsa5#
function Login(props) {
  const { setUserlocal } = props;
  const [loading, loadingSet] = useState(false);
  const [error, errorSet] = useState("");
  function toggle() {
    var password = document.getElementsByName("password");
    // console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  let navigate = useNavigate();
  const LoginFormHandler = (event) => {
    event.preventDefault();
    loadingSet(true);
    let { username, password } = event.target;
    axios
      .post("https://ammaryasser.pythonanywhere.com/accounts/signin/", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        console.log(response);
        loadingSet(false);
        // localStorage.setItem("token", response.data["token"]);
        // localStorage.setItem("username", response.data["username"]);
        console.log(response.data["is_staff"]);
        setUserlocal(
          response.data["username"],
          response.data["token"],
          response.data["is_staff"],
          response.data["id"]
        );
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
        errorSet(error.response.data[Object.keys(error.response.data)[0]]);
        loadingSet(false);
      });
  };
  return (
    <div className="p-5 full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center">
      <div className="col-sm-8 col-md-6 col-lg-4 p-3 px-auto">
        <Form className="Auth-form" onSubmit={LoginFormHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-primary">Sign In</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
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
          {error.length > 0 && (
            <div className="alert alert-danger">{error}</div>
          )}
          
          {loading ? (
            <div className="spinner-border text-info" role="status"></div>
          ) : (
            <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
          )}
          <p className="forgot-password text-right mt-2">Forgot <a href="/resetpassword">reset password</a>
</p>
        </div>
        </Form>
      </div>
    </div>
  );
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
const mapdispatchToprops = (dispatch) => { 
  return {
    setUserlocal: (username, password, is_staff, id) =>
      dispatch(setUserLocaally(username, password, is_staff, id)),
  };
};
export default connect(mapStateToprops, mapdispatchToprops)(Login);
