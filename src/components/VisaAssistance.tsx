import "bootstrap/dist/css/bootstrap.min.css";
import "./VisaAssistance.css";
const VisaAssistance = () => {
  return (
    <div className="container-fluid mb-4 mx-auto text-center">
      <div className="row justify-content-center">
        {/* University Selection Assistance */}
        <div className="col-lg-3 mb-4">
          <div className="card border-primary">
            <div className="card-body">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title">University Selection Assistance</h5>
              </div>
              <img
                className="card-img card-img-assistance"
                height={"198"}
                src="/assets/images/studentpics/student3.jpg"
                alt=""
              />
              <p className="card-text mt-3">
                Navigating through the vast array of universities worldwide can
                be overwhelming. Our consultants provide expert guidance to help
                you choose a university that aligns with your academic goals,
                preferences, and budget.
              </p>
            </div>
          </div>
        </div>

        {/* Application Support */}
        <div className="col-lg-3 mb-4">
          <div className="card border-success">
            <div className="card-body">
              <div className="card-header bg-success text-white">
                <h5 className="card-title">Application Support</h5>
              </div>
              <img
                className="card-img card-img-assistance"
                height={"198"}
                src="/assets/images/studentpics/student3.jpg"
                alt=""
              />
              <p className="card-text mt-3">
                Crafting a compelling application is crucial for securing
                admission to your desired university. We offer meticulous
                assistance throughout the application process, ensuring your
                application stands out and maximizes your chances of acceptance.
              </p>
            </div>
          </div>
        </div>

        {/* Visa & Immigration Guidance */}
        <div className="col-lg-3 mb-4">
          <div className="card border-warning">
            <div className="card-body">
              <div className="card-header bg-warning text-dark">
                <h5 className="card-title">Visa & Immigration Guidance</h5>
              </div>
              <img
                className="card-img card-img-assistance"
                height={"198"}
                src="/assets/images/studentpics/student3.jpg"
                alt=""
              />
              <p className="card-text mt-3">
                Understanding visa requirements and navigating immigration
                procedures can be daunting. Our experienced team provides
                comprehensive support and guidance to streamline the visa
                application process, ensuring compliance with all regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Scholarship & Financial Aid */}
        <div className="col-lg-3 mb-4">
          <div className="card border-danger">
            <div className="card-body">
              <div className="card-header bg-danger text-white">
                <h5 className="card-title">Scholarship & Financial Aid</h5>
              </div>
              <img
                className="card-img card-img-assistance"
                height={"198"}
                src="/assets/images/studentpics/student3.jpg"
                alt=""
              />
              <p className="card-text mt-3">
                Financing your international education can be challenging, but
                it shouldn't be a barrier to your dreams. We assist students in
                exploring scholarship opportunities, financial aid options, and
                other funding sources to make their education affordable.
              </p>
            </div>
          </div>
        </div>

        {/* Test Preparation Support */}
        <div className="col-lg-3 mb-4">
          <div className="card border-info">
            <div className="card-body">
              <div className="card-header bg-info text-white">
                <h5 className="card-title">Test Preparation Support</h5>
              </div>
              <img
                className="card-img card-img-assistance"
                height={"198"}
                src="/assets/images/studentpics/student3.jpg"
                alt=""
              />
              <p className="card-text mt-3">
                Achieving the required scores in standardized tests is essential
                for admission to many universities. Our test preparation
                services equip students with the skills and strategies needed to
                excel in exams such as the TOEFL, IELTS, SAT, GRE, and GMAT.
              </p>
            </div>
          </div>
        </div>

        {/* Pre-Departure Guidance */}
        <div className="col-lg-3 mb-4">
          <div className="card border-secondary">
            <div className="card-body">
              <div className="card-header bg-secondary text-white">
                <h5 className="card-title">Pre-Departure Guidance</h5>
              </div>
              <img
                className="card-img card-img-assistance"
                height={"198"}
                src="/assets/images/studentpics/student3.jpg"
                alt=""
              />
              <p className="card-text mt-3">
                Preparing for life in a new country involves various logistical
                and cultural aspects. We offer pre-departure orientation
                sessions to provide students with essential information, tips,
                and resources for a smooth transition to their host country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaAssistance;
