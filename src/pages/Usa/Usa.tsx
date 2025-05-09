import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Usa.css"; // Import the separate CSS file
import { Helmet } from 'react-helmet-async';

function Usa() {
  return (
    <>
      <Helmet>
        <title>Study in the USA | GEA</title>
        <meta
          name="description"
          content="Achieve your academic goals in the USA with GEA. Get guidance on US universities, application processes, student visas, and scholarships for international students."
        />
      </Helmet>
      <Container fluid className="p-0">
        {/* Header Section */}
        <div className="header-usa">
          <div className="hero-content-usa">
            <h1 className="hero-title-usa">Study in USA</h1>
            <div className="hero-subtitle-usa">
              World-class education, innovation, and global opportunities await you.
            </div>
            <a href="#usa-apply" className="hero-cta-usa">Start Your Application</a>
          </div>
        </div>

        {/* Section: Why Choose to Study in USA */}
        <Container fluid className="content-section">
          <Row>
            <Col>
              <h2 className="section-title">Why Study in the USA?</h2>
              <p className="section-text">
                The USA is a top destination for international students, offering
                unparalleled opportunities for personal, academic, and
                professional growth. Here are key reasons why studying in the USA
                is a life-changing choice:
              </p>
              <ul className="section-text">
                <li>
                  <strong>World-Class Education System:</strong> The USA is home
                  to top-ranked universities and institutions that offer
                  cutting-edge curricula and diverse programs across various
                  disciplines.
                </li>
                <li>
                  <strong>Innovative Learning Methods:</strong> US institutions
                  prioritize hands-on learning, research, and innovation,
                  encouraging students to think critically and creatively.
                </li>
                <li>
                  <strong>Diverse and Inclusive Environment:</strong> The USA
                  fosters a multicultural atmosphere, enabling students to connect
                  with peers from different backgrounds and broaden their global
                  perspectives.
                </li>
                <li>
                  <strong>Advanced Research Opportunities:</strong> Students in
                  the USA have access to groundbreaking research facilities,
                  advanced technology, and collaborative projects with global
                  leaders.
                </li>
                <li>
                  <strong>Global Networking and Career Development:</strong> US
                  universities focus on career readiness, offering internship
                  programs, career counseling, and strong industry connections to
                  help students excel professionally.
                </li>
                <li>
                  <strong>Flexibility in Academic Programs:</strong> The American
                  education system provides flexibility in choosing majors,
                  minors, and electives, allowing students to explore multiple
                  fields of interest.
                </li>
              </ul>
              <p className="section-text">
                Studying in the USA not only provides academic excellence but also
                enhances personal development, preparing students for success in
                an increasingly interconnected world.
              </p>
            </Col>
          </Row>
        </Container>

        {/* Section: Visa Requirements */}
        <Container fluid className="content-section">
          <Row>
            <Col>
              <h3 className="section-title">
                Understanding Study Visa Requirements for USA:
              </h3>
              <p className="section-text">
                If you're considering applying for a student visa, it's essential
                to familiarize yourself with the study visa prerequisites to
                ensure a smooth application process.
              </p>
              <ul className="section-text">
                <li>
                  Receive acceptance from a recognized educational institution in
                  the USA.
                </li>
                <li>
                  Complete the DS-160 form, a vital part of the visa application
                  process.
                </li>
                <li>
                  Schedule a visa interview at the nearest USA embassy or
                  consulate.
                </li>
                <li>
                  Pay the SEVIS fee, a mandatory requirement for all international
                  students.
                </li>
                <li>
                  Gather necessary documents, including your passport, Form I-20,
                  and proof of financial support.
                </li>
                <li>
                  Demonstrate ties to your home country, highlighting intent to
                  return after your studies.
                </li>
                <li>
                  Show proficiency in the English language through standardized
                  tests like TOEFL or IELTS.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        {/* Section: Value of PhD and Master's Degrees */}
        <Container fluid className="content-section">
          <Row>
            <Col>
              <h3 className="section-title">
                Value of PhD and Master's Degrees in USA:
              </h3>
              <p className="section-text">
                Research funding is frequently allocated to universities and
                research laboratories in the USA to attract talented individuals.
                Pursuing a PhD or Master's degree in the USA offers numerous
                benefits for personal, social, and career growth. Graduates often
                transition into roles as assistant professors, research
                assistants, or educators.
              </p>
              <p className="section-text">
                Overall, the USA provides an enriching educational experience with
                ample opportunities for career advancement.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Usa;
