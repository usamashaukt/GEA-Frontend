import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Australia.css"; // Import the separate CSS file
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faPassport, faMedkit, faGlobe, faAward } from '@fortawesome/free-solid-svg-icons';

function Australia() {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

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
    imgRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (<>
    <Helmet>
      <title>Study in Australia | HU</title>
      <meta
        name="description"
        content="Explore world-class education, vibrant cities, and career opportunities in Australia. HU provides expert support for university applications, visas, and scholarships."
      />
    </Helmet>
    <Container fluid className="p-0">
      {/* Header Section */}
      <div className="header-aus">
        <img
          src="/assets/images/Aus-bg/aus.webp"
          alt="Australia background"
          className="header-aus-img"
          fetchPriority="high"
        />
        <div className="hero-content-aus">
          <h1 className="hero-title-aus">Study in Australia</h1>
          <div className="hero-subtitle-aus">
            World-class education, vibrant cities, and unforgettable experiences await you.
          </div>
          <a href="#aus-apply" className="hero-cta-aus">Start Your Application</a>
        </div>
      </div>

      {/* Section: Prospects of Studying in Australia */}
      <Container fluid className="content-section">
        <Row>
          <Col md={6}>
            <h2 className="section-title">Ensuring the Prospects of Studying in Australia</h2>
            <p className="section-text">
              Embarking on a journey to study in Australia unveils a plethora of renowned universities boasting diverse
              programs tailored to cater to various interests and career aspirations. Australia's educational system is globally
              recognized for its innovative approach to learning and research.
            </p>
          </Col>
          <Col md={6}>
            {/* <Image
              ref={el => (imgRefs.current[0] = el)}
              src="/assets/images/Aus-bg/sydney-opera-house.webp"
              alt="Sydney Opera House"
              fluid
              className="section-image"
            /> */}
          </Col>
        </Row>
      </Container>

      {/* Section: Key Features of Studying in Australia */}
      <Container fluid className="content-section">
        <Row>
          <Col xs={12}>
            <h2 className="section-title text-center">Key Features of Studying in Australia</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <div className="feature-card">
              <FontAwesomeIcon icon={faUniversity} className="feature-icon" />
              <h3>World-Class Universities</h3>
              <p>Access to top-ranked institutions with state-of-the-art facilities and research opportunities.</p>
              {/* <Image
                ref={el => (imgRefs.current[1] = el)}
                src="/assets/images/Aus-bg/aus.jpg"
                alt="Australian University"
                fluid
                className="section-image mt-3"
              /> */}
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card">
              <FontAwesomeIcon icon={faGlobe} className="feature-icon" />
              <h3>Global Recognition</h3>
              <p>Degrees that are internationally recognized and valued by employers worldwide.</p>
              {/* <Image
                ref={el => (imgRefs.current[2] = el)}
                src="/assets/images/Aus-bg/sydney-opera-house.webp"
                alt="Sydney Landmark"
                fluid
                className="section-image mt-3"
              /> */}
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card">
              <FontAwesomeIcon icon={faAward} className="feature-icon" />
              <h3>Quality Education</h3>
              <p>High standards of teaching with focus on practical and industry-relevant skills.</p>
              {/* <Image
                ref={el => (imgRefs.current[3] = el)}
                src="/assets/images/Aus-bg/aus.jpg"
                alt="Australian Education"
                fluid
                className="section-image mt-3"
              /> */}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section: Eligibility Criteria */}
      <Container fluid className="content-section">
        <Row>
          <Col md={6} className="order-md-2">
            <h2 className="section-title">Eligibility Criteria for Pakistani Students</h2>
            <p className="section-text">
              Securing a study visa for Australia is a crucial step for any international student, including those hailing from Pakistan.
              The process involves meticulous planning and thorough documentation to ensure a successful application.
            </p>
            <div className="feature-card">
              <FontAwesomeIcon icon={faPassport} className="feature-icon" />
              <h3>Visa Requirements</h3>
              <ul>
                <li>Valid passport</li>
                <li>Confirmation of Enrollment</li>
                <li>English proficiency proof</li>
                <li>Financial requirements</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="order-md-1">
            <Image
              ref={el => (imgRefs.current[4] = el)}
              src="/assets/images/Aus-bg/sydney-opera-house.webp"
              alt="Student Visa Process"
              fluid
              className="section-image"
            />
          </Col>
        </Row>
      </Container>

      {/* Section: Medical Education in Australia */}
      <Container fluid className="content-section">
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h2 className="section-title">Medical Education in Australia</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <div className="feature-card">
              <FontAwesomeIcon icon={faMedkit} className="feature-icon" />
              <h3>MBBS Programs</h3>
              <p className="section-text">
                MBBS programs in Australia enjoy global acclaim for their high standards and training methods. Australian universities offer two basic types of MBBS programs:
                graduate medical programs and undergraduate medical programs, providing diverse study opportunities for Pakistani students pursuing a career in medicine.
              </p>
              <Image
                ref={el => (imgRefs.current[5] = el)}
                src="/assets/images/Aus-bg/aus.jpg"
                alt="Medical Education"
                fluid
                className="section-image mt-3"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="feature-card">
              <FontAwesomeIcon icon={faGraduationCap} className="feature-icon" />
              <h3>Career Prospects</h3>
              <p className="section-text">
                Upon approval, students can proceed to arrange their journey to Australia and commence their studies upon receiving the grant notification.
                Pakistani students seeking knowledge and learning opportunities to bolster their career prospects can greatly benefit from studying in Australia.
              </p>
              <Image
                ref={el => (imgRefs.current[6] = el)}
                src="/assets/images/Aus-bg/sydney-opera-house.webp"
                alt="Graduation"
                fluid
                className="section-image mt-3"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Australia;
