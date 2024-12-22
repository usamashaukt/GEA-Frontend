// import React from "react";
import "./Section2.css";
// import secTwo from "../assets/images/sec2/dmp-a1-UWL-1-feb-2024.webp";

const Section2 = () => {
  return (
    <div>
      <div className="global-imgs">
        <div className="container-fluid mb-4 mx-auto ">
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img"
                    height={"198"}
                    src="/assets/images/studentpics/student1.webp"
                    alt=""
                  />
                  <h5 className="card-title">Undergraduate</h5>
                  <p className="card-text">
                    Explore basic undergraduate programs and courses.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img"
                    height={"198"}
                    src="/assets/images/studentpics/student2.webp"
                    alt=""
                  />

                  <h5 className="card-title">PostGraduate</h5>
                  <p className="card-text">
                    Dive deeper with advanced specializations.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img"
                    height={"198"}
                    src="/assets/images/studentpics/student3.jpg"
                    alt=""
                  />

                  <h5 className="card-title">MRes</h5>
                  <p className="card-text">
                    Engage in research and innovation at the highest level.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img"
                    height={"198"}
                    src="/assets/images/studentpics/student3.jpg"
                    alt=""
                  />

                  <h5 className="card-title">PhDs</h5>
                  <p className="card-text">
                    Engage in research and innovation at the highest level.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
