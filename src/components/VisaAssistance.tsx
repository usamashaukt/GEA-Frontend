import { useEffect, useRef } from "react";
import "./VisaAssistance.css";
const VisaAssistance = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="visa-assistance-section">
      <div className="container mx-auto text-center">
        <div className="row justify-content-center">
        {/* University Selection Assistance */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div ref={el => (cardRefs.current[0] = el)} className="card border-primary h-100">
            <div className="card-header bg-primary text-white" style={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <h5 className="card-title mb-0">University Selection Assistance</h5>
            </div>
            <div className="card-body d-flex flex-column">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/studentpics/student3-400.webp 400w,
                          /assets/images/studentpics/student3-800.webp 800w"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <img
                  className="card-img card-img-assistance mb-3"
                  width={300}
                  height={198}
                  src="/assets/images/studentpics/student3.jpg"
                  alt="Student counselling support"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <p className="card-text mt-2">
                Navigating through the vast array of universities worldwide can
                be overwhelming. Our consultants provide expert guidance to help
                you choose a university that aligns with your academic goals,
                preferences, and budget.
              </p>
            </div>
          </div>
        </div>

        {/* Application Support */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div ref={el => (cardRefs.current[1] = el)} className="card border-success h-100">
            <div className="card-header bg-success text-white" style={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <h5 className="card-title mb-0">Application Support</h5>
            </div>
            <div className="card-body d-flex flex-column">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/studentpics/student3-400.webp 400w,
                          /assets/images/studentpics/student3-800.webp 800w"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <img
                  className="card-img card-img-assistance mb-3"
                  height={198}
                  src="/assets/images/studentpics/student3.jpg"
                  alt="Application support"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <p className="card-text mt-2">
                Crafting a compelling application is crucial for securing
                admission to your desired university. We offer meticulous
                assistance throughout the application process, ensuring your
                application stands out and maximizes your chances of acceptance.
              </p>
            </div>
          </div>
        </div>

        {/* Visa & Immigration Guidance */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div ref={el => (cardRefs.current[2] = el)} className="card border-warning h-100">
            <div className="card-header bg-warning text-dark" style={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <h5 className="card-title mb-0">Visa & Immigration Guidance</h5>
            </div>
            <div className="card-body d-flex flex-column">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/studentpics/student3-400.webp 400w,
                          /assets/images/studentpics/student3-800.webp 800w"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <img
                  className="card-img card-img-assistance mb-3"
                  height={198}
                  src="/assets/images/studentpics/student3.jpg"
                  alt="Visa and immigration guidance"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <p className="card-text mt-2">
                Understanding visa requirements and navigating immigration
                procedures can be daunting. Our experienced team provides
                comprehensive support and guidance to streamline the visa
                application process, ensuring compliance with all regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Scholarship & Financial Aid */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div ref={el => (cardRefs.current[3] = el)} className="card border-danger h-100">
            <div className="card-header bg-danger text-white" style={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <h5 className="card-title mb-0">Scholarship & Financial Aid</h5>
            </div>
            <div className="card-body d-flex flex-column">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/studentpics/student3-400.webp 400w,
                          /assets/images/studentpics/student3-800.webp 800w"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <img
                  className="card-img card-img-assistance mb-3"
                  height={198}
                  src="/assets/images/studentpics/student3.jpg"
                  alt="Scholarship and financial aid support"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <p className="card-text mt-2">
                Financing your international education can be challenging, but
                it shouldn't be a barrier to your dreams. We assist students in
                exploring scholarship opportunities, financial aid options, and
                other funding sources to make their education affordable.
              </p>
            </div>
          </div>
        </div>

        {/* Test Preparation Support */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div ref={el => (cardRefs.current[4] = el)} className="card border-info h-100">
            <div className="card-header bg-info text-white" style={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <h5 className="card-title mb-0">Test Preparation Support</h5>
            </div>
            <div className="card-body d-flex flex-column">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/studentpics/student3-400.webp 400w,
                          /assets/images/studentpics/student3-800.webp 800w"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <img
                  className="card-img card-img-assistance mb-3"
                  height={198}
                  src="/assets/images/studentpics/student3.jpg"
                  alt="Test preparation support"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <p className="card-text mt-2">
                Achieving the required scores in standardized tests is essential
                for admission to many universities. Our test preparation
                services equip students with the skills and strategies needed to
                excel in exams such as the TOEFL, IELTS, SAT, GRE, and GMAT.
              </p>
            </div>
          </div>
        </div>

        {/* Pre-Departure Guidance */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div ref={el => (cardRefs.current[5] = el)} className="card border-secondary h-100">
            <div className="card-header bg-secondary text-white" style={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <h5 className="card-title mb-0">Pre-Departure Guidance</h5>
            </div>
            <div className="card-body d-flex flex-column">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/images/studentpics/student3-400.webp 400w,
                          /assets/images/studentpics/student3-800.webp 800w"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <img
                  className="card-img card-img-assistance mb-3"
                  height={198}
                  src="/assets/images/studentpics/student3.jpg"
                  alt="Pre-departure guidance"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <p className="card-text mt-2">
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
    </div>
  );
};

export default VisaAssistance;
