import { Row, Col } from "react-bootstrap";
import "./Usa.css";
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';

function Usa() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <title>Study in the USA | HU</title>
        <meta
          name="description"
          content="Achieve your academic goals in the USA with HU. Get guidance on US universities, application processes, student visas, and scholarships for international students."
        />
      </Helmet>
      
      {/* Header Section */}
      <div className="header-usa">
        <img
          src="/assets/images/usa/USA.png"
          alt="USA background"
          className="header-usa-img"
        />
        <div className="hero-content-usa">
          <h1 className="hero-title-usa">Study in USA</h1>
          <div className="hero-subtitle-usa">
            World-class education, innovation, and global opportunities await you.
          </div>
          <a href="#usa-apply" className="hero-cta-usa">Start Your Application</a>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container my-5">
        <Row className="mb-5">
          <Col lg={6}>
            <div className="content-image">
              <img 
                src="/assets/images/usa/USA.png" 
                alt="USA Education" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h2>Why Study in the USA?</h2>
            <p>
              The USA is a top destination for international students, offering unparalleled opportunities for personal, academic, and professional growth. The country is home to top-ranked universities and institutions that offer cutting-edge curricula and diverse programs across various disciplines.
            </p>
            <p>
              US institutions prioritize hands-on learning, research, and innovation, encouraging students to think critically and creatively. The American education system provides flexibility in choosing majors, minors, and electives, allowing students to explore multiple fields of interest.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6}>
            <h2>Application Process</h2>
            <p>
              US universities typically have multiple intake periods throughout the year. Applications are usually made directly to universities or through the Common Application system. Most universities require standardized tests like SAT, ACT, GRE, or GMAT depending on the program level.
            </p>
            <p>
              The application process involves submitting academic transcripts, test scores, personal statements, recommendation letters, and sometimes portfolios for creative courses. Early application is recommended as competition is intense.
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
            <h2>Student Life in the USA</h2>
            <p>
              The USA fosters a multicultural atmosphere, enabling students to connect with peers from different backgrounds and broaden their global perspectives. Students have access to groundbreaking research facilities, advanced technology, and collaborative projects with global leaders.
            </p>
            <p>
              US universities focus on career readiness, offering internship programs, career counseling, and strong industry connections to help students excel professionally. International students can work on-campus and may be eligible for Optional Practical Training (OPT) after graduation.
            </p>
          </Col>
        </Row>
      </div>

      {/* Documents Section */}
      <div className="container-fluid documents-section">
        <div className="container">
          <h1 className="title">Required Documents for USA Study Visa</h1>
          <div className="content">
            {[
              {
                title: "Educational Documentation",
                text: "Academic transcripts, certificates, and diplomas from previous studies. Include English translations if documents are not in English."
              },
              {
                title: "Standardized Test Scores",
                text: "SAT, ACT, GRE, GMAT, or other required test scores depending on your program level and university requirements."
              },
              {
                title: "English Proficiency Proof",
                text: "Valid TOEFL, IELTS, or other English proficiency test scores. Requirements vary by institution and program level."
              },
              {
                title: "Financial Documentation",
                text: "Evidence of sufficient funds to cover tuition fees, living expenses, and other costs. Bank statements, scholarship letters, or sponsor documents."
              },
              {
                title: "Form I-20",
                text: "Certificate of Eligibility for Nonimmigrant Student Status issued by your chosen US institution after acceptance."
              },
              {
                title: "Passport and Photos",
                text: "Valid passport with at least 6 months validity, along with recent passport-sized photographs meeting US visa requirements."
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
}

export default Usa;
