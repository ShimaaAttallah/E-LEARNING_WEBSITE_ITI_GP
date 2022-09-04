import React from "react";
import "../css/MyServices.css";

const MyServices = () => {
  return (
    <section>
      <div className="container mt-4" id="service">
        <div className="row cards">
          <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <i className="fa-solid fa-chalkboard-user mb-3 icons"></i>
                <h5 className="card-title">Learn Anything</h5>
                <p className="card-text text-muted">
                  Explore any interest or trending topic, take prerequisites,
                  and advance your skills.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <i className="fa-solid fa-arrows-spin mb-3 icons"></i>
                <h5 className="card-title">Flexible Learning</h5>
                <p className="card-text text-muted">
                  Learn at your own pace, move between multiple courses, or
                  switch to a different course.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body ">
                <i className="fa-solid fa-graduation-cap mb-3 icons"></i>
                <h5 className="card-title">Blended Learning Solutions</h5>
                <p className="card-text text-muted">
                  We blend both delivery models, instructional-led training and
                  eLearning module to create a cohesive learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
