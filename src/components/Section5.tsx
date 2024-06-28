import "./Section5.css";
import ContactBtn from "./ContactBtn";

type Props = {};

const Section5 = (props: Props) => {
  return (
    <div className="sec5-wrapper">
      <div className="introduction">
        <div className="container">
          <div className="row">
            <h2 className="welcome-line text-center mt-4">
              UK Institution Profiles{" "}
            </h2>
            <p className="text-center">
              Learn more about courses, rankings, scholarships and accommodation
              at UK{" "}
              <strong>
                <a href="/pakistan/profiles/university/">universities</a>
              </strong>
              ,{" "}
              <strong>
                <a href="/pakistan/uk-study-info/top-uk-business-schools/">
                  business schools
                </a>
              </strong>
              ,{" "}
              <strong>
                <a href="/pakistan/profiles/college/">colleges</a>
              </strong>{" "}
              and{" "}
              <strong>
                <a
                  href="http://www.si-english.com/?utm_source=studyin-uk.com&amp;utm_medium=top_page&amp;utm_campaign=siuk"
                  target="_blank"
                >
                  language schools
                </a>
              </strong>{" "}
              across the UK and Ireland. Our{" "}
              <strong>
                <a href="/pakistan/uk-study-info/">
                  complete guide to UK education
                </a>
              </strong>{" "}
              will help you decide on where to study.
            </p>
            <div className="inner-img d-flex flex-wrap justify-content-center home-img-wrapper clearfix">
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="http://www.si-english.com/" target="_blank">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-4-1.png"
                    alt="Si-English"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/study-options/a-level/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-5-2-1.png"
                    alt="A-Level"
                    className="img-fluid"
                    useMap="#A-Level"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/profiles/pathway/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-4-3.png"
                    alt="Pathway"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0 hidden-xs">
                <a href="/pakistan/profiles/college/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-5-4-1.png"
                    alt="College"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0">
                <a href="/pakistan/profiles/university/">
                  <img
                    src="https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-4-5.png"
                    alt="Universities"
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

export default Section5;
