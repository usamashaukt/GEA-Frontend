import "./Section1.css";

type Props = {};

const Section1 = (props: Props) => {
  return (
    <div>
      <div className="container welcome-sec mx-auto mt-3">
        <div className="row">
          <div className="col-lg-12 text-center margin-20">
            <h1 className="welcome-line text-dark ">Unlock Your Future!</h1>{" "}
            <p>
              Global Education Adviser is a team of international education
              advisers based in the United Kingdom. We are honoured to represent
              the world’s best universities to our students with our trained
              advisers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
