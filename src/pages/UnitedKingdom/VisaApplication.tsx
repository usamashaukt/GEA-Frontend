import "./VisaApplication.css";
import { Row, Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaUniversity, FaAward, FaGlobe } from 'react-icons/fa';
import { useCountUp } from '../../components/hooks/useCountUp';

const VisaApplication = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current) {
              setStatsVisible(true);
            } else {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Add these hooks for each statistic
  const studentCount = useCountUp(statsVisible ? 400 : 0, 4000);
  const courseCount = useCountUp(statsVisible ? 1500 : 0, 4000);
  const countryCount = useCountUp(statsVisible ? 100 : 0, 4000);

  return (
    <>
      <Helmet>
        <title>Study in the United Kingdom | HU</title>
        <meta name="description" content="Discover top universities, courses, and student life in the UK. HU guides you through UK university applications, visa requirements, and scholarships for international students." />
      </Helmet>
      
      {/* Header Section */}
      <header className="header-uk">
        <div className="hero-content-uk">
          <h1 className="hero-title-uk">Study in the United Kingdom</h1>
          <div className="hero-subtitle-uk">
            World-class education, vibrant culture, and a gateway to your future.
          </div>
          <a href="#uk-apply" className="hero-cta-uk">Start Your Journey</a>
        </div>
      </header>

      {/* Statistics Section */}
      <div className="container my-5">
        <div className="stats-container" ref={statsRef}>
          <div className="stat-item">
            <FaGraduationCap className="stat-icon" />
            <div className="stat-number">{studentCount.toLocaleString()}+</div>
            <div className="stat-label">International Students</div>
          </div>
          <div className="stat-item">
            <FaUniversity className="stat-icon" />
            <div className="stat-number">{courseCount.toLocaleString()}+</div>
            <div className="stat-label">Available Courses</div>
          </div>
          <div className="stat-item">
            <FaAward className="stat-icon" />
            <div className="stat-number">Top 10</div>
            <div className="stat-label">Global Education Ranking</div>
          </div>
          <div className="stat-item">
            <FaGlobe className="stat-icon" />
            <div className="stat-number">{countryCount}+</div>
            <div className="stat-label">Countries Represented</div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container my-5">
        <Row className="mb-5">
          <Col lg={6}>
            <div className="content-image">
              <img 
                src="/assets/images/big-ben/big-Ben-London.webp" 
                alt="UK Education" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h2>Why Study in the UK?</h2>
            <p>
              The United Kingdom stands as a multicultural hub and the world's second most popular destination for international students. This diversity creates an enriching environment where different cultures, ideas, and perspectives converge, offering opportunities beyond academic learning.
            </p>
            <p>
              UK universities maintain high academic standards through regular audits by the QAA (Quality Assurance Agency for Higher Education). Additionally, international students benefit from access to free medical treatment through the NHS (National Health Service).
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6}>
            <h2>Application Process</h2>
            <p>
              UK universities offer two main intake periods: January/February and September/October. For undergraduate programs, applications are processed through UCAS (Universities and Colleges Admissions Service). Creative arts programs may require application through CUKAS (Conservatories UK Admissions Service).
            </p>
            <p>
              Postgraduate applications are typically made directly to the chosen university. While English proficiency tests like IELTS are commonly required, some universities may accept their own proficiency assessments.
            </p>
          </Col>
          <Col lg={6}>
            <div className="content-image">
              <img 
                src="/assets/images/studentpics/student1.webp" 
                alt="Application Process" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6}>
            <div className="content-image">
              <img 
                src="/assets/images/studentpics/student2.webp" 
                alt="Student Life" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h2>Student Life in the UK</h2>
            <p>
              The UK offers a vibrant student life with numerous opportunities for personal and professional growth. From world-class libraries and research facilities to diverse cultural events and student societies, there's something for everyone.
            </p>
            <p>
              International students can work part-time during their studies and full-time during holidays, providing valuable work experience and helping to offset living costs.
            </p>
          </Col>
        </Row>
      </div>

      {/* Documents Section */}
      <div className="container-fluid documents-section">
        <div className="container">
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
      </div>
    </>
  );
};

export default VisaApplication;
