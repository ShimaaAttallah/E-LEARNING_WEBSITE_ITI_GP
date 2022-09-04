import React from "react";
import "../css/M_AboutUs.css";
import { NavLink } from "react-router-dom";

// npm i @emailjs/browser

const AboutUS = () => {
  return (
    <div>
      {/* SERvice section */}
      <div id="about-us">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <img
                src="https://myelearningworld.com/wp-content/uploads/2022/04/my-elearning-world-welcome-5.jpg"
                className="img-fluid"
                alt="E-Learning Services"
                height=""
                width=""
              />
              {/* <img src={require("../img/elearning1.jpg")} class="img-fluid" alt="E-Learning Services" height="" width=""/> */}
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">
              <h1 className="text-lg-start">E-Learning Services</h1>
              <p className="text-lg-start">
                Providing the right eLearning solution to your learners can make
                the big difference. New approaches and tools allow you reach
                your learners where and when required. The times of plain and
                poorly design eLearning courses are long over.
              </p>
              <p className="text-lg-start">
                Today’s learners expect responsive eLearning courses with
                animations, videos, games, simulations and custom designed
                illustrations, accessible anywhere and at any time. They demand
                learning solutions that transform passive learning consumption
                into active learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section id="cards">
        <div className="container py-2 mt-5">
          <div className="row pb-4">
            <div className="col-12 text-center">
              <div className="display-3">Our Creative Team</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h3 className="ext-uppercase team mt-2">
                    E-learing Creative Team
                  </h3>
                  <p className="small text-muted mb-0 mt-4">
                    We are the e-learning team. We provide ICT services to the
                    public and private sectors across the Middle East. ammar and
                    shimaa,ayman,alaa, baraa is the founder and owner of the
                    e-learning team.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="picture mb-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/75980929?s=400&u=deb61e8eb5fab9eb0be87223d413be2c4dab5983&v=4"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                      alt="img"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">
                      Shimaa Attallah
                    </h5>
                    <p className=" text-capitalize text-muted small user-name">
                      Full Stack Web developer
                    </p>

                    <p className="small text-muted mb-0 mt-4">
                      I'm a Backend Developer with experience in Optimizing
                      applications for maximum speed and scalability,
                      Co-operating with other front-end developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="picture mb-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/77470923?v=4"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                      alt="img"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Alaa Abouzied</h5>
                    <p className=" text-capitalize text-muted small user-name">
                      Full Stack Web developer
                    </p>
                    <p className="small text-muted mb-0 mt-4">
                      I'm a Backend Developer with experience in Optimizing
                      applications for maximum speed and scalability,
                      Co-operating with other front-end developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="picture mb-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/51214702?v=4"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                      alt="img"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Ammar Werdani</h5>
                    <p className=" text-capitalize text-muted small user-name">
                      Full Stack Web developer
                    </p>

                    <p className="small text-muted mb-0 mt-4">
                      I'm a Backend Developer with experience in Optimizing
                      applications for maximum speed and scalability,
                      Co-operating with other front-end developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="picture mb-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/45498918?v=4"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                      alt="img"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Ayman Tarek</h5>
                    <p className=" text-capitalize text-muted small user-name">
                      Full Stack Web developer
                    </p>

                    <p className="small text-muted mb-0 mt-4">
                      I'm a Backend Developer with experience in Optimizing
                      applications for maximum speed and scalability,
                      Co-operating with other front-end developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 pt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="picture mb-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/107256567?v=4"
                      className="shadow-sm rounded-circle"
                      height="130"
                      width="130"
                      alt="img"
                    />
                  </div>
                  <div className="user-content">
                    <h5 className="text-capitalize user-name">Baraa Fayezz</h5>
                    <p className=" text-capitalize text-muted small user-name">
                      Full Stack Web developer
                    </p>
                    <p className="small text-muted mb-0 mt-4">
                      I'm a Backend Developer with experience in Optimizing
                      applications for maximum speed and scalability,
                      Co-operating with other front-end developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="conut">
        <h2 className="mt-5 ">
          Let’s talk about your<br></br>
          E-Learning needs
        </h2>
        <NavLink
          to={`/contactus`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <p className=" btn btn-primary">Contact Us</p>
        </NavLink>
      </div>
    </div>
  );
};

export default AboutUS;
