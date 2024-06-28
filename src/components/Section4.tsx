import "./Section4.css";
import ContactBtn from "./ContactBtn";
interface Props {}

const Section4 = (props: Props) => {
  return (
    <div className="sec4-wrapper">
      <div className="introduction">
        <div className="container">
          <div className="row">
            <h2 className="welcome-line text-center mt-4">
              Popular UK University Courses
            </h2>
            <p className="text-center">
              Learn more about the most{" "}
              <strong>
                <a href="/pakistan/popular-courses/">popular courses</a>
              </strong>{" "}
              to study in the UK with our in-depth subject guide, <br /> then{" "}
              <strong>
                <a href="/pakistan/course-search/">
                  search our database of over 80,000 courses at UK universities
                </a>
              </strong>{" "}
              and find your dream programme.
            </p>
            <div className="inner-img d-flex flex-wrap justify-content-center home-img-wrapper clearfix">
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/popular-courses/llm-master-of-laws/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-1.png"
                    alt="LLM Master of Laws"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/popular-courses/business-and-management/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-2.png"
                    alt="Business and Management"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/popular-courses/engineering/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-3.png"
                    alt="Engineering"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0 hidden-xs">
                <a href="/pakistan/popular-courses/mba/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-4.png"
                    alt="MBA"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/popular-courses/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-2-5.png"
                    alt="Studyuk"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactBtn />
    </div>
  );
};

export default Section4;
