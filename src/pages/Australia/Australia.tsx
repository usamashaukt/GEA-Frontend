import { Container, Row, Col } from "react-bootstrap";
import "./Australia.css";
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faPassport, faMedkit, faGlobe, faAward } from '@fortawesome/free-solid-svg-icons';

function Australia() {
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
        <title>Study in Australia | HU</title>
        <meta
          name="description"
          content="Explore world-class education, vibrant cities, and career opportunities in Australia. HU provides expert support for university applications, visas, and scholarships."
        />
      </Helmet>
      
      {/* Header Section */}
      <div className="header-aus">
        <img
          src="/assets/images/Aus-bg/aus.webp"
          alt="Australia background"
          className="header-aus-img"
        />
        <div className="hero-content-aus">
          <h1 className="hero-title-aus">Study in Australia</h1>
          <div className="hero-subtitle-aus">
            World-class education, vibrant cities, and unforgettable experiences await you.
          </div>
          <a href="#aus-apply" className="hero-cta-aus">Start Your Application</a>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container my-5">
        <Row className="mb-5">
          <Col lg={6}>
            <div className="content-image">
              <img 
                src="/assets/images/Aus-bg/sydney-opera-house.webp" 
                alt="Australia Education" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h2>Why Study in Australia?</h2>
            <p>
              Australia is home to some of the world's most prestigious universities, offering world-class education and research opportunities. The country's multicultural environment provides an enriching experience for international students.
            </p>
            <p>
              With its high quality of life, excellent healthcare system, and strong economy, Australia offers not just education but a pathway to permanent residency and career opportunities in various fields.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6}>
            <h2>Application Process</h2>
            <p>
              Australian universities typically have two main intakes: February/March and July/August. Applications are usually made directly to universities or through education agents. Most universities require English proficiency tests like IELTS or TOEFL.
            </p>
            <p>
              The application process involves submitting academic transcripts, English test scores, personal statements, and sometimes portfolios for creative courses. Early application is recommended as places fill quickly.
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
            <h2>Student Life in Australia</h2>
            <p>
              Australia offers a vibrant student life with numerous opportunities for personal and professional growth. From beautiful beaches and outdoor activities to world-class cultural events and festivals.
            </p>
            <p>
              International students can work up to 40 hours per fortnight during studies and unlimited hours during holidays, providing valuable work experience and helping with living costs.
            </p>
          </Col>
        </Row>
      </div>

      {/* Documents Section */}
      <div className="container-fluid documents-section">
        <div className="container">
          <h1 className="title">Required Documents for Australia Study Visa</h1>
          <div className="content">
            {[
              {
                title: "Educational Documentation",
                text: "Academic transcripts, certificates, and diplomas from previous studies. Include English translations if documents are not in English."
              },
              {
                title: "English Proficiency Proof",
                text: "Valid IELTS, TOEFL, PTE, or Cambridge English test scores. Requirements vary by institution and course level."
              },
              {
                title: "Financial Documentation",
                text: "Evidence of sufficient funds to cover tuition fees, living expenses, and travel costs. Bank statements, scholarship letters, or sponsor documents."
              },
              {
                title: "Passport and Photos",
                text: "Valid passport with at least 6 months validity, along with recent passport-sized photographs meeting Australian visa requirements."
              },
              {
                title: "Confirmation of Enrollment (CoE)",
                text: "Official confirmation from your chosen Australian institution confirming your enrollment in a registered course."
              },
              {
                title: "Health Insurance (OSHC)",
                text: "Overseas Student Health Cover is mandatory for all international students studying in Australia."
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

export default Australia;
