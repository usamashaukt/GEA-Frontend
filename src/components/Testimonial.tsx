import React from "react";

import "./Testimonial.css";
import CarouselSlider from "./CarouselSlider";
interface Props {}

const testimonial = (props: Props) => {
  return (
    <div>
      <div className="testimonial-wrapper pt-5">
        <section
          id="testimonial"
          className="adaptive-background container"
          data-background-position="right bottom"
          data-background-xs="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/Pakistan.gif"
          data-background-sm="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/Pakistan.gif"
          data-background-md="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/Pakistan.gif"
          data-background-lg="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/Pakistan.gif"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/Pakistan.gif)",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-sm-12 col-xs-12">
                <div className="testimonial-new">
                  <blockquote>
                    <div className="row">
                      <div className="col-xs-8 col-sm-8 col-lg-9">
                        {/* <div className="pull-left margin-20">
                          <img
                            src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/upward-comma.png"
                            className="img-responsive"
                          />
                        </div> */}
                        {/* <div className="clearfix"></div> */}
                        <p>
                          <img
                            src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/breckett-front.png"
                            alt="Breckett Front"
                          />{" "}
                          &nbsp;I believe my success is due to the great support
                          provided by SI-UK. I was advised the right IELTS
                          courses to attend and they also helped with my visa
                          application. I really want to share with you my
                          positive experience and I would definitely recommend
                          SI-UK to my friends. &nbsp;
                          <img
                            src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/breckett-back.png"
                            alt="breckett-back"
                          />
                        </p>
                        {/* <div className="pull-right">
                          <img
                            src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/downward-comma.png"
                            className="img-responsive"
                          />
                        </div> */}
                        {/* <div className="clearfix"></div> */}
                        <h4 className="margin-20 mt-5">
                          Fatima Parveen{" "}
                          <span>Psychology at University of Nottingham</span>
                        </h4>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="my-4 leading-unis mx-auto container-fluid" style={{paddingLeft:"40px",paddingRight:"40px"}}>
        <h2 className="mb-4">Leading Universities and GEA Partners</h2>
        <CarouselSlider />
      </div>
    </div>
  );
};

export default testimonial;
