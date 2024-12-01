import "./Section1.css";

type Props = {};

const Section1 = (props: Props) => {
  return (
    <div>
      <div className="container welcome-sec mx-auto mt-3">
        <div className="row">
          <div className="col-lg-12 text-center margin-20">
            <h1 className="welcome-line text-dark ">
              GEA will help you apply to any UK university - 100% FREE
            </h1>{" "}
            <p className="pager  ">
              We are a trusted UK university partner, specialising in
              <strong> Undergraduate</strong>, <strong> Postgraduate</strong>,
              <strong> Oxbridge</strong>, <strong> Medicine</strong> and{" "}
              <strong> PhD</strong>
              <strong>applications </strong> . Arrange your{" "}
              <strong> free consultation</strong> with our British Council
              trained consultants today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
