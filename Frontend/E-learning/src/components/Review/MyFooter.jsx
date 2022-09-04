import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBRipple,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted mt-5"
      style={{ backgroundColor: "#eee", textDecoration: "none" }}
    >
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}
      <section className="py-2">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* -------------------logo------------------ */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <img
                src={require("../img/loggo.png")}
                className="logo"
                alt=""
                height=""
                width=""
              />
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon fas icon="chalkboard-teacher" className="me-3 " />E -
                Learning
              </h6>
              <p>
                E-learning refers to the use of electronic media and information
                and communication technologies (ICT) in education. E-Learning is
                the use of technology to enable people to learn anytime and
                anywhere.
              </p>
            </MDBCol>
            {/* -------------------link------------------ */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <NavLink to={`/allcourses`} style={{ textDecoration: "none" }}>
                <p className="text-reset">Courses</p>
              </NavLink>
              <NavLink to={`/aboutus`} style={{ textDecoration: "none" }}>
                <p className="text-reset">About Us</p>
              </NavLink>
              <NavLink to={`/contactus`} style={{ textDecoration: "none" }}>
                <p className="text-reset">Contact Us</p>
              </NavLink>
            </MDBCol>
            {/* -------------------Contact------------------ */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <a
                style={{ textDecoration: "none" }}
                href="https://maps.app.goo.gl/CJLq1WZBpC3bxjYv8"
              >
                {" "}
                <p>
                  <MDBIcon
                    icon="home"
                    className="me-2"
                    href="https://maps.app.goo.gl/CJLq1WZBpC3bxjYv8"
                  />
                  Egypt,ITI Menofia-Branch
                </p>
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://mail.google.com/"
              >
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  ITIinfo@iti.gov.eg
                </p>
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="tel:+2 0109 072 0800w123"
              >
                {" "}
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +2 0109 072 0800
                </p>
              </a>
            </MDBCol>
          </MDBRow>
          {/* ----------------------image------------------------ */}
          {/* <div>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded mb-3'
              >
                <img src='https://media.istockphoto.com/photos/businessman-showing-success-formula-picture-id513487020?k=20&m=513487020&s=612x612&w=0&h=0xECyQr8Td7q4_mS_f-NiNpPiMqHbp3KMB9h1kDQA9s=' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
          </div> */}
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
