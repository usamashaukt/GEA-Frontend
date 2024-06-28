import ContactBtn from "./ContactBtn";
import "./Section3.css";
type Props = {};

const Section3 = (props: Props) => {
  return (
    <>
      <div className="introduction">
        <div className="container">
          <div className="row">
            <h2 className="welcome-line text-center mt-4">
              GEA University Application Services
            </h2>
            <p className="text-center">
              Our specialist UK university application services can help you
              receive an offer. Receive free application advice with the{" "}
              <strong>
                <a href="#">Free Service</a>
              </strong>
              , guarantee an offer with the{" "}
              <strong>
                <a href="#">Premium Service</a>
              </strong>
              , or use one of our tailored services for{" "}
              <strong>
                <a href="#">Oxbridge</a>
              </strong>
              ,{" "}
              <strong>
                <a href="#">Medicine</a>
              </strong>{" "}
              and{" "}
              <strong>
                <a href="#">Art</a>
              </strong>
              .
            </p>
            <div className="inner-img d-flex flex-wrap justify-content-center home-img-wrapper clearfix">
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/services/free-services/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-1.png"
                    alt="SI-UK Services"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/services/premium-service/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-2.png"
                    alt="SI-UK Services"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0 ">
                <a href="/pakistan/services/oxbridge/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-3.png"
                    alt="SI-UK Services"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0 hidden-xs">
                <a href="/pakistan/ielts/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-4.png"
                    alt="SI-UK IELTS"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0 ">
                <a href="/pakistan/services/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-5.png"
                    alt="SI-UK Services"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactBtn />
    </>
  );
};

export default Section3;
