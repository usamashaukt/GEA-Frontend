import "./Section1.css";
import VisaAssistance from "./VisaAssistance";

const Section1 = () => {
  return (
    <div>
      <div className="container-fluid welcome-sec mx-auto mt-3">
        <div className="row">
          <div className="col-lg-12 text-center margin-20">
            <h1 className="welcome-line text-dark ">Unlock Your Future!</h1>{" "}
            <p>
              HU Consultants is a team of international education advisers based
              in the Haripur. We are honoured to represent the world’s best
              universities to our students with our trained advisers.
            </p>
          </div>
        </div>
      </div>
      <VisaAssistance />
    </div>
  );
};

export default Section1;
