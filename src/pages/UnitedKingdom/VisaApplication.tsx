import "./VisaApplication.css"; 
// import BannerImg from "../../components/BannerImg";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaUniversity, FaAward, FaGlobe } from 'react-icons/fa';

const VisaApplication = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <Helmet>
        <title>Study in the United Kingdom | HU</title>
        <meta name="description" content="Discover top universities, courses, and student life in the UK. HU guides you through UK university applications, visa requirements, and scholarships for international students." />
      </Helmet>
      {/* <div className="search-banner" style={{minHeight:"500px"}} ></div> */}
      <header className="header-uk">
        <div className="hero-content-uk">
          <h1 className="hero-title-uk">Study in the United Kingdom</h1>
          <div className="hero-subtitle-uk">
            World-class education, vibrant culture, and a gateway to your future.
          </div>
          <a href="#uk-apply" className="hero-cta-uk">Start Your Journey</a>
        </div>
      </header>
      <div className="container-fluid uk-cont">
        <Row className="mb-5">
          <Col lg={8}>
            <h1>United Kingdom (UK)</h1>
            <p>
              The UK has become a highly desired destination for international students, offering world-class institutions, exceptional professional development, and exemplary faculty members. With its proven track record of academic excellence, the UK continues to attract ambitious students from around the globe.
            </p>
            <p>
              Last year, over 436,585 international students chose UK universities for their education. This success stems from the UK's comprehensive educational system, offering more than 150,000 courses across various universities for both undergraduate and postgraduate programs.
            </p>
          </Col>
          <Col lg={4}>
            <div className="stats-container">
              <div className="stat-item">
                <FaGraduationCap className="stat-icon" />
                <div className="stat-number">436,585+</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <FaUniversity className="stat-icon" />
                <div className="stat-number">150,000+</div>
                <div className="stat-label">Available Courses</div>
              </div>
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <div className="stat-number">Top 10</div>
                <div className="stat-label">Global Education Ranking</div>
              </div>
              <div className="stat-item">
                <FaGlobe className="stat-icon" />
                <div className="stat-number">200+</div>
                <div className="stat-label">Countries Represented</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5" id="uk-apply">
          <Col>
            <h2>Application Process</h2>
            <p>
              UK universities offer two main intake periods: January/February and September/October. For undergraduate programs, applications are processed through UCAS (Universities and Colleges Admissions Service). Creative arts programs may require application through CUKAS (Conservatories UK Admissions Service).
            </p>
            <p>
              Postgraduate applications are typically made directly to the chosen university. While English proficiency tests like IELTS are commonly required, some universities may accept their own proficiency assessments.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2>Why Study in the UK?</h2>
            <p>
              The United Kingdom stands as a multicultural hub and the world's second most popular destination for international students. This diversity creates an enriching environment where different cultures, ideas, and perspectives converge, offering opportunities beyond academic learning.
            </p>
            <p>
              UK universities maintain high academic standards through regular audits by the QAA (Quality Assurance Agency for Higher Education). Additionally, international students benefit from access to free medical treatment through the NHS (National Health Service).
            </p>
          </Col>
        </Row>
      </div>
      <div className="container-fluid">
        <h1 className="title">Required Documents for UK Study Visa</h1>
        <div className="content">
          {[
            {
              title: "Educational Documentation",
              text: "Comprehensive academic records demonstrating your educational background and eligibility for your chosen course. Include an updated CV and recommendation letters from your educational institution."
            },
            {
              title: "Proof of English Proficiency",
              text: "Valid scores from recognized English language tests (IELTS/TOEFL). The required scores vary by institution and program level."
            },
            {
              title: "Financial Documentation",
              text: "Evidence of sufficient funds to cover tuition fees and living expenses. This may include bank statements, scholarship letters, or sponsor documents."
            },
            {
              title: "Passport and Photos",
              text: "A valid passport with at least 6 months validity beyond your intended stay, along with recent passport-sized photographs meeting UK visa requirements."
            },
            {
              title: "Confirmation of Acceptance for Studies (CAS)",
              text: "A unique reference number issued by your chosen university after accepting their offer. This is crucial for your visa application."
            },
            {
              title: "Healthcare Surcharge Payment",
              text: "Receipt of payment for the Immigration Health Surcharge, giving you access to the UK's National Health Service during your stay."
            }
          ].map((card, idx) => (
            <div
              key={card.title}
              ref={el => (cardRefs.current[idx] = el)}
              className="card-london"
            >
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisaApplication;
