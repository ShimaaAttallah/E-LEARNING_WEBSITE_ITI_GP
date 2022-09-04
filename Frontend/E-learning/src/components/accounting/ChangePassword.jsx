import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/ResetCode.css";

export default function ChangePassword() {
  const [confirmpass, confirmpasswordSet] = useState({
    check: false,
    meseage: "",
  });
  const [error, errorSet] = useState("");
  const [loading, loadingSet] = useState(false);
  //   const [success, sucessSet] = useState(false);
  useEffect(() => {
    console.log("reset init");
  }, []);
  
  function toggle(e) {
    var password = document.getElementsByName("password");
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  function confirmtoggle() {
    var password = document.getElementsByName("confirmpassword");
    // console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  function newtoggle() {
    var password = document.getElementsByName("Newpassword");
    // console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  let navigate = useNavigate();
  const LoginFormHandler = (event) => {
    event.preventDefault();
    loadingSet(false);
    var { password, Newpassword, confirmpassword } = event.target;
    let token = localStorage.getItem("token");
    if (Newpassword.value != confirmpassword.value) {
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
        .put(
          "https://ammaryasser.pythonanywhere.com/accounts/changepassword/",
          {
            old_password: password.value,
            new_password: Newpassword.value,
          },
          { headers: { Authorization: `token ${token}` } }
        )
        .then((response) => {
          console.log(response);
          loadingSet(false);
          navigate(`/login`);
        })
        .catch((error) => {
          console.log(error.response.data);
          errorSet(error.response.data);
          loadingSet(false);
        });
    }
  };
  return (
    <div className="p-5 full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center">
      <div className="col-sm-8 col-md-6 col-lg-4 p-3 px-auto">
        <Form className="Auth-form" onSubmit={LoginFormHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-primary">Change Password</h3>
          <Form.Group className="mb-3">
            <Form.Label>old Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <Form.Group className="my-3">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={toggle}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>new Password</Form.Label>
            <Form.Control
              type="password"
              name="Newpassword"
              placeholder="new Password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
              required
            />
            <Form.Group className="my-3">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={newtoggle}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>confirm Password</Form.Label>
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
            <Form.Group className="my-3">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={confirmtoggle}
              />
            </Form.Group>
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
