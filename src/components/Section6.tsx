import "./Section6.css";
import ContactBtn from "./ContactBtn";

type Props = {};

const Section6 = (props: Props) => {
  return (
    <div>
      <div className="sec6-wrapper">
        <div className="introduction">
          <div className="container">
            <div className="row">
              <h2 className="welcome-line text-center mt-4">Study Options </h2>
              <p className="text-center">
                SI-UK is a trusted university UK university partner, and our
                international education consultants will ensure you find a place
                on the right UK course. SI-UK can assist with your application
                for{" "}
                <strong>
                  <a href="/pakistan/study-options/foundation/">foundation</a>
                </strong>
                ,{" "}
                <strong>
                  <a href="/pakistan/study-options/undergraduate/">
                    undergraduate
                  </a>
                </strong>{" "}
                or{" "}
                <strong>
                  <a href="/pakistan/study-options/postgraduate-and-masters-degree/">
                    Postgraduate
                  </a>
                </strong>
                .
              </p>
              <div className="inner-img d-flex flex-wrap justify-content-center home-img-wrapper clearfix">
                <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-4-1-1.png"
                    alt="Foundation"
                    className="img-fluid"
                    useMap="#foundation"
                  />
                </div>
                <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                  <a href="/pakistan/study-options/undergraduate/">
                    <img
                      src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-1-2.png"
                      alt="Undergraduate"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                  <a href="/pakistan/study-options/postgraduate-and-masters-degree/">
                    <img
                      src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-1-3.png"
                      alt="Postgraduate and Masters Degree"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0 hidden-xs">
                  <a href="/pakistan/services/phd/">
                    <img
                      src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-1-4.png"
                      alt="PhD Application Service"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                  <a href="/pakistan/study-options/">
                    <img
                      src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-3-5.png"
                      alt="Study Options"
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
    </div>
  );
};

export default Section6;
