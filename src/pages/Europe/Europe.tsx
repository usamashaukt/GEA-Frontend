// import React from "react";
import "./Europe.css";
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';

import { Container, Row, Col } from "react-bootstrap";

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
    window.scrollTo(0, 0);
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
      {/* <div className="search-banner" style={{minHeight:"500px"}} ></div> */}
      <div className="header-eu">
        <div className="hero-content-eu">
          <h1 className="hero-title-eu">Study in Europe</h1>
          <div className="hero-subtitle-eu">
            World-class education, diverse cultures, and endless opportunities await you.
          </div>
          <a href="#eu-apply" className="hero-cta-eu">Start Your Application</a>
        </div>
      </div>
      <Container fluid className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1 className="mb-3">Europe</h1>
            <p>
              Europe has become one of the most sought-after destinations for
              international students. With a diverse range of countries,
              world-renowned institutions, and innovative academic programs,
              Europe offers a unique and enriching educational experience.
            </p>
            <p>
              The European education system is known for its strong focus on
              research, cultural diversity, and practical learning. Each country
              in Europe brings its distinct academic strengths, providing
              students with versatile opportunities that few other regions can
              match. In the last decade, Europe has welcomed millions of
              international students across its universities and colleges.
            </p>
            <p>
              This is possible due to Europe's inclusive approach towards global
              education, offering more than 1,000 universities and a wide
              variety of courses tailored to suit students' interests and career
              goals. Students can choose from thousands of programs, ranging
              from undergraduate and postgraduate degrees to specialized short
              courses, ensuring flexibility and quality in their academic
              pursuits.
            </p>
          </Col>
        </Row>

        {/* Section 2: Application Information */}
        <Row className="mb-4">
          <Col>
            <h1 className="mb-3">
              Apply to International University in Europe
            </h1>
            <p>
              Europe offers countless opportunities for international students
              to apply to top-ranked universities and institutions. With its
              world-class education system, diverse cultural experiences, and
              innovative teaching methods, Europe has become a prominent
              destination for higher studies.
            </p>
            <p>
              The application process for European universities is
              straightforward and accessible. Students can choose from a variety
              of undergraduate, postgraduate, and professional programs offered
              across different European countries. Each university has its own
              set of requirements and application timelines, making it important
              to conduct thorough research before applying.
            </p>
            <p>
              Most European universities require students to provide academic
              credentials, proof of language proficiency (such as IELTS, TOEFL,
              or equivalent), and a statement of purpose (SOP) outlining their
              academic and career goals. Students can also explore scholarship
              programs and financial aid options, which are widely available to
              support international education.
            </p>
            <p>
              Upon acceptance, students gain access to high-quality education,
              modern facilities, and the opportunity to build a global network,
              setting a strong foundation for personal and professional growth.
            </p>
          </Col>
        </Row>

        {/* Section 3: Why Study Abroad */}
        <Row className="mb-4">
          <Col>
            <h1 className="mb-3">Why Study Abroad in Europe?</h1>
            <p>
              Europe has become one of the most sought-after destinations for
              international students, offering a unique blend of academic
              excellence, cultural diversity, and life-changing experiences.
              With its prestigious universities, innovative teaching methods,
              and vibrant student communities, Europe provides an exceptional
              environment for higher education.
            </p>
            <p>
              <strong>High-Quality Education:</strong> Europe is home to some of
              the world's top-ranked universities that are globally recognized
              for their quality education, cutting-edge research, and modern
              facilities. Students benefit from diverse study programs tailored
              to meet global industry demands.
            </p>
            <p>
              <strong>Affordable Tuition Fees and Scholarships:</strong>{" "}
              Compared to other study destinations, many European countries
              offer affordable tuition fees. Additionally, students can explore
              a wide range of scholarships, grants, and financial aid to support
              their academic journey.
            </p>
            <p>
              <strong>Cultural Diversity and Global Exposure:</strong> Europe
              boasts a rich cultural heritage, enabling students to experience
              diverse traditions, languages, and lifestyles. Living and studying
              in Europe exposes students to a multicultural environment, helping
              them develop cross-cultural skills and expand their global
              perspectives.
            </p>
            <p>
              <strong>Post-Study Work Opportunities:</strong> Many European
              countries provide post-study work permits, allowing graduates to
              gain valuable professional experience and enhance their career
              prospects after completing their studies.
            </p>
            <p>
              <strong>Travel Opportunities:</strong> Europe's interconnected
              transportation system makes it easy for students to travel and
              explore different countries, iconic cities, and historical
              landmarks while pursuing their education.
            </p>
            <p>
              Choosing to study abroad in Europe equips students with not only a
              degree but also invaluable experiences, global networks, and
              skills that shape a successful future. It's an opportunity to gain
              a world-class education while embracing new cultures and
              opportunities.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="container-fluid">
        <h1 className="title text-center">
          Required Documents for Europe Study Visa Application
        </h1>
        <div className="content">
          {/* card-eu 1 */}
          <div className="card-eu" ref={el => cardRefs.current[0] = el}>
            <h2>Choose Course and University</h2>
            <p>
              Start by selecting the course and university in the UK that aligns
              with your career goals. Conduct thorough research to understand
              entry requirements, available scholarships, and program duration.
            </p>
          </div>

          {/* card-eu 2 */}
          <div className="card-eu" ref={el => cardRefs.current[1] = el}>
            <h2>English Language Proficiency</h2>
            <p>
              Demonstrate proficiency in English by providing valid scores from
              standardized tests like
              <strong> IELTS</strong> or <strong>TOEFL</strong>. Each university
              and program may have specific requirements for scores.
            </p>
          </div>

          {/* card-eu 3 */}
          <div className="card-eu" ref={el => cardRefs.current[2] = el}>
            <h2>Educational Documentation</h2>
            <p>
              Submit diplomas, transcripts, and other academic records from
              previous studies (high school, bachelor's degree, etc.). Ensure
              all documents are attested and updated.
            </p>
          </div>

          {/* card-eu 4 */}
          <div className="card-eu" ref={el => cardRefs.current[3] = el}>
            <h2>Visa Application Process</h2>
            <p>
              Complete the online visa application, providing your{" "}
              <strong>passport</strong>,
              <strong> proof of financial capability</strong>, and a valid{" "}
              <strong>Certificate of Acceptance of Study (CAS)</strong>.
              Additional requirements may include reference letters or evidence
              of work experience.
            </p>
          </div>

          {/* card-eu 5 */}
          <div className="card-eu" ref={el => cardRefs.current[4] = el}>
            <h2>Initial Deposit</h2>
            <p>
              Many UK universities require an initial deposit to secure your
              place in the program. This deposit typically includes the first
              installment of tuition fees.
            </p>
          </div>

          {/* card-eu 6 */}
          <div className="card-eu" ref={el => cardRefs.current[5] = el}>
            <h2>Attend Interview and Orientation</h2>
            <p>
              Attend the <strong>credibility interview</strong> as part of the
              visa process to confirm your genuine intentions. Once approved,
              participate in orientation programs to familiarize yourself with
              the campus, local culture, and academic expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Europe;
