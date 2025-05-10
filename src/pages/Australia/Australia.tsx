import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Australia.css"; // Import the separate CSS file
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';

function Australia() {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

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
      <title>Study in Australia | GEA</title>
      <meta
        name="description"
        content="Explore world-class education, vibrant cities, and career opportunities in Australia. GEA provides expert support for university applications, visas, and scholarships."
      />
    </Helmet>
    <Container fluid className="p-0">
      {/* Header Section */}
      <div className="header-aus">
        <div className="hero-content-aus">
          <h1 className="hero-title-aus">Study in Australia</h1>
          <div className="hero-subtitle-aus">
            World-class education, vibrant cities, and unforgettable experiences await you.
          </div>
          <a href="#aus-apply" className="hero-cta-aus">Start Your Application</a>
        </div>
      </div>

      {/* Section: Study in Australia */}
      <Container fluid className="content-section">
        <Row>
          <Col>
            <h2 className="section-title  ">Study in Australia:</h2>
            <p className="section-text">
              Australia is the most attractive economy and destination for
              study. Australia is the least populated country with an abundance
              of opportunities for a career. Australia hosts multiple people who
              belong to different ethnicities, races, and religions.
            </p>
            <p className="section-text">
              International students offer a variety of courses even short
              courses for more enrollment and fulfill its shortage of human
              resources. Australia is a land of natural sceneries and a modern
              lifestyle. International students gain an unforgettable memory to
              live and experience in different cultures. Australia ranks high in
              terms of education quality and low crime rates.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section: Reason to Choose Australia */}
      <Container fluid className="content-section">
        <Row>
          <Col lg={8}>
            <h3 className="section-title  ">Reason to choose Australia:</h3>
            <p className="section-text">
              Australia is a highly attractive and appealing destination for
              international students due to the inexpensive fee structure in
              colleges and universities. Australia has the world's ranked
              universities and colleges. Institutions in Australia mostly prefer
              practical work in all fields which generates excellent graduates.
            </p>
            <p className="section-text">
              Australian universities are equipped with state-of-the-art
              instruments in the laboratories and free access to libraries for
              students. The check and balance on the education system is key to
              the quality of education and the Australian government issues a
              quality code for institutions after full verification.
            </p>
            <p className="section-text">
              Australia allows international students to obtain a work visa up
              to 2 years after completing their Bachelor's, Master's, and Ph.D.
              successfully. Australia also offers part-time work up to 20 hours
              a week anywhere according to the feasibility of the students and
              full-time work up to 40 hours a week on vacations.
            </p>
          </Col>
          <Col lg={4} className="text-center">
            <Image
              ref={el => (imgRefs.current[0] = el)}
              src="/public/assets/images/Aus-bg/sydneyOperahouse.webp" // Replace with your image URL
              alt="Sydney Opera House"
              fluid
              rounded
              className="section-image"
            />
          </Col>
        </Row>
      </Container>

      {/* Section: Facilities */}
      <Container fluid className="content-section">
        <Row>
          <Col>
            <h3 className="section-title  ">Facilities:</h3>
            <p className="section-text">
              Australian universities provide special privileges to the students
              in the shape of students' cards. This is turned to be a students'
              discount card. Wherever students go, shops, buses, and subways
              always purchase discounted items and travel cheaply.
            </p>
            <p className="section-text">
              The public transport system is efficient and highly affordable for
              students in Australia. Subways and buses are common and link to
              every corner of the main destinations. International students
              easily get jobs after landing in Australia.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section: Application Procedure */}
      <Container fluid className="content-section" id="aus-apply">
        <Row>
          <Col>
            <h3 className="section-title  ">Application Procedure:</h3>
            <p className="section-text">
              There are mostly two intakes in Australian universities and
              colleges. Intakes vary from university to university as February
              and July are the 2 intakes in few universities, January and
              September are the 2 intakes. For international students, six to
              seven months are required to process the application.
            </p>
            <p className="section-text">
              English proficiency test is required for admission, IELTS test
              with 6 bands is required for undergraduates and 6.5/7 is required
              for graduate programs. If you want to study for a 3-month course
              in Australia a visitor student visa is issued.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Australia;
