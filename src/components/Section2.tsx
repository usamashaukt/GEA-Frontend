import React from "react";
import "./Section2.css";
import secTwo from "../assets/images/sec2/dmp-a1-UWL-1-feb-2024.webp";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <div>
      <div className="global-imgs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-12 text-center p-3 pb-0">
                  <a href="#" target="">
                    <img
                      src="../../public/assets/images/sec2/services-dec.jpg"
                      className="img-fluid"
                      alt="services-dec"
                    />
                  </a>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 text-center p-3 pb-0">
                  <a href="#" target="_blank">
                    <img
                      src="../../public/assets/images/sec2/dmp-a1-unite-student-global-may-2024.webp"
                      className="img-fluid"
                      alt="dmp-a1-unite-student-global-may-2024"
                    />
                  </a>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 text-center p-3 ">
                  <a href="#" target="_blank">
                    <img
                      src="../../public/assets/images/sec2/dmp-a1-UWL-1-feb-2024.webp"
                      className="img-fluid"
                      alt="dmp-a1-UWL-1-feb-2024"
                    />
                  </a>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 text-center p-3 ">
                  <a href="#" target="_blank">
                    <img
                      src="../../public/assets/images/sec2/top_10_campus_470x160_1-northumbria-multiple-june-2024.webp
                      "
                      className="img-fluid"
                      alt="top_10_campus_470x160_1-northumbria-multiple-june-2024"
                    />
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
