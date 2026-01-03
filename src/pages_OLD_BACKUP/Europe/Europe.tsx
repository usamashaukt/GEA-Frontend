// import React from "react";
import "./Europe.css";
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { Row, Col } from "react-bootstrap";

const Europe = () => {
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
        <title>Study in Europe | HU</title>
        <meta
          name="description"
          content="Experience diverse cultures and top-ranked universities in Europe. HU helps you with European university applications, visa processes, and scholarship opportunities."
        />
      </Helmet>
      
      {/* Header Section */}
      <div className="header-eu">
        <img
          src="/assets/images/Eu-bg/eu.jpg"
          alt="Europe background"
          className="header-eu-img"
        />
        <div className="hero-content-eu">
          <h1 className="hero-title-eu">Study in Europe</h1>
          <div className="hero-subtitle-eu">
            World-class education, diverse cultures, and endless opportunities await you.
          </div>
          <a href="#eu-apply" className="hero-cta-eu">Start Your Application</a>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container my-5">
        <Row className="mb-5">
          <Col lg={6}>
            <div className="content-image">
              <img 
                src="/assets/images/Eu-bg/eu.jpg" 
                alt="Europe Education" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h2>Why Study in Europe?</h2>
            <p>
              Europe has become one of the most sought-after destinations for international students, offering a unique blend of academic excellence, cultural diversity, and life-changing experiences. With its prestigious universities, innovative teaching methods, and vibrant student communities, Europe provides an exceptional environment for higher education.
            </p>
            <p>
              Europe is home to some of the world's top-ranked universities that are globally recognized for their quality education, cutting-edge research, and modern facilities. Students benefit from diverse study programs tailored to meet global industry demands.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6}>
            <h2>Application Process</h2>
            <p>
              The application process for European universities is straightforward and accessible. Students can choose from a variety of undergraduate, postgraduate, and professional programs offered across different European countries. Each university has its own set of requirements and application timelines.
            </p>
            <p>
              Most European universities require students to provide academic credentials, proof of language proficiency (such as IELTS, TOEFL, or equivalent), and a statement of purpose (SOP) outlining their academic and career goals. Students can also explore scholarship programs and financial aid options.
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
            <h2>Student Life in Europe</h2>
            <p>
              Europe boasts a rich cultural heritage, enabling students to experience diverse traditions, languages, and lifestyles. Living and studying in Europe exposes students to a multicultural environment, helping them develop cross-cultural skills and expand their global perspectives.
            </p>
            <p>
              Europe's interconnected transportation system makes it easy for students to travel and explore different countries, iconic cities, and historical landmarks while pursuing their education. Many European countries provide post-study work permits, allowing graduates to gain valuable professional experience.
            </p>
          </Col>
        </Row>
      </div>

      {/* Documents Section */}
      <div className="container-fluid documents-section">
        <div className="container">
          <h1 className="title">Required Documents for Europe Study Visa</h1>
          <div className="content">
            {[
              {
                title: "Educational Documentation",
                text: "Submit diplomas, transcripts, and other academic records from previous studies (high school, bachelor's degree, etc.). Ensure all documents are attested and updated."
              },
              {
                title: "Language Proficiency Proof",
                text: "Demonstrate proficiency in the required language by providing valid scores from standardized tests like IELTS, TOEFL, or equivalent. Each university and program may have specific requirements."
              },
              {
                title: "Financial Documentation",
                text: "Provide evidence of sufficient funds to cover tuition fees, living expenses, and other costs. This may include bank statements, scholarship letters, or sponsor documents."
              },
              {
                title: "Passport and Photos",
                text: "Valid passport with at least 6 months validity, along with recent passport-sized photographs meeting European visa requirements."
              },
              {
                title: "Statement of Purpose",
                text: "A well-written statement of purpose (SOP) outlining your academic and career goals, reasons for choosing the specific program and university, and future plans."
              },
              {
                title: "Health Insurance",
                text: "Proof of comprehensive health insurance coverage that meets the requirements of the European country where you plan to study."
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

export default Europe;
