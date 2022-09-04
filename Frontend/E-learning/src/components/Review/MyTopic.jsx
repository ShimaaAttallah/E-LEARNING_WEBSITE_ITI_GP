import React from "react";
import "../css/MyTopic.css";

const MyTopic = () => {
  return (
    <section>
      <div className="container mt-4" id="topic">
        <div className="row cards">
          <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                {/* <i className="fa-solid fa-chalkboard-user mb-3 icons"></i> */}
                <img
                src={require("../img/topic1.png")}
                className=""
                alt=""
                height="150"
                width="150"
                />
                <h5 className="card-title">Account Setup</h5>
                <p className="card-text text-muted">
                How to log in and change settings
                </p>
            </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                {/* <i className="fa-solid fa-arrows-spin mb-3 icons"></i> */}
                <img
                src={require("../img/topic2.png")}
                className=""
                alt=""
                height="150"
                width="150"
                />
                <h5 className="card-title">Payments</h5>
                <p className="card-text text-muted">
                Start learning today for free
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body ">
                {/* <i className="fa-solid fa-graduation-cap mb-3 icons"></i> */}
                <img
                src={require("../img/topic3.png")}
                className=""
                alt=""
                height="150"
                width="150"
                />
                <h5 className="card-title">Enrollment</h5>
                <p className="card-text text-muted">
                Start learning today
                </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTopic;