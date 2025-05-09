import "./VisaApplication.css"; 
// import BannerImg from "../../components/BannerImg";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';

const VisaApplication = () => {
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
    <>
      <Helmet>
        <title>Study in the United Kingdom | GEA</title>
        <meta name="description" content="Discover top universities, courses, and student life in the UK. GEA guides you through UK university applications, visa requirements, and scholarships for international students." />
      </Helmet>
      {/* <div className="search-banner" style={{minHeight:"500px"}} ></div> */}
      <div className="header-uk">
        <div className="hero-content-uk">
          <h1 className="hero-title-uk">Study in the United Kingdom</h1>
          <div className="hero-subtitle-uk">
            World-class education, vibrant culture, and a gateway to your future.
          </div>
          <a href="#uk-apply" className="hero-cta-uk">Start Your Application</a>
        </div>
      </div>
      <Container fluid className="mt-5 uk-cont">
       
        <Row className="mb-4">
          <Col>
            <h1 className="mb-3">United Kingdom (UK)</h1>
            <p>
              The UK has become a highly desired destination to study among
              international students. With world-class institutions, exceptional
              professional proficiency, and exemplary faculty members, England
              retains its reputation as a reliable state in terms of delivering
              academic excellence.
            </p>
            <p>
              For decades, Great Britain has had a proven track record of
              success, and it offers much greater versatility to international
              students than many other countries around the world can't. The UK
              degree illuminates the road to prosperity in a manner that other
              English-Speaking countries impotent to. Last year, 436,585
              international students have recruited to UK universities.
            </p>
            <p>
              It was only conceivable because England has a history of dating
              overseas students from all over the world with the broad
              opportunities provided by the UK educational system. Students may
              choose an appropriate course centered on their preferences from
              150,000 courses proposed by various universities in the UK that
              deliver undergraduate and postgraduate degree programs.
            </p>
          </Col>
        </Row>

        {/* Section 2: Application Information */}
        <Row className="mb-4">
          <Col>
            <h2 className="mb-3">
              Apply to International University in the UK
            </h2>
            <p>
              The UK universities offer two intakes, the first intake is in
              January or February and the second intake is in September or
              October. If a student goes for a bachelor's degree in UK, then the
              student must apply to UCAS (Universities and Colleges Admissions
              Service).
            </p>
            <p>
              However, if a student opts for admission in creative arts like
              drama, film, or music, then the application will be submitted to
              CUKAS (Conservatories UK Admissions Service). The application
              process for a postgraduate degree program is a bit direct, the
              candidate may apply directly to the chosen university. If the
              student's native language isn't English, the basic requirement is
              IELTS, but some universities do not need such a test and rely on
              the university's proficiency tests.
            </p>
          </Col>
        </Row>

        {/* Section 3: Why Study Abroad */}
        <Row>
          <Col>
            <h2 className="mb-3">Why study abroad in UK?</h2>
            <p>
              The United Kingdom is a multi-cultural country with the prospect
              of being the world's second best-known destination for overseas
              students. People from different origins live in England. This
              results in a brew of diverse cultures, commodities, ethnicities,
              and ambitions. That's why, opportunities to entertain yourself
              besides your studies.
            </p>
            <p>
              Britain universities never compromise on quality. They focus on
              the objective of managing the standard of multiple degree programs
              themselves, with the aid of impartial audits conducted at regular
              intervals from the QAA (Quality Assurance Agency for Higher
              Education) platforms. In addition, students are also eligible to
              permit free medical treatment by NHS (National Health Service).
            </p>
          </Col>
        </Row>
      </Container>
      <div className="container-fluid" id="uk-apply">
        <h1 className="title text-center">
          Required Documents for UK Study Visa Application
        </h1>
        <div className="content">
          {[
            {
              title: "Educational Documentation:",
              text: `Students typically need to submit comprehensive educational records to demonstrate their academic background and eligibility for the intended course of study. Additionally, an updated curriculum vitae and a recommendation letter from your educational institution may be required.`
            },
            {
              title: "Online Application:",
              text: `Complete an online application, providing personal information and evidence of your identity and academic history. Required documents may include:`,
              list: [
                "Passport",
                "Reference letters",
                "Evidence of English proficiency",
                "Any relevant work experience"
              ]
            },
            {
              title: "Interview Attendance:",
              text: `The credibility interview is a crucial part of the visa application process. Prepare thoroughly and approach the interview with seriousness to demonstrate your genuine intentions as a student.`
            },
            {
              title: "Await Results:",
              text: `After fulfilling all requirements, await the outcome of your visa application interview. Ensure you apply well in advance of your intended travel date, considering varying processing times.`
            },
            {
              title: "Initial Deposit:",
              text: `UK universities often require international students to pay an initial deposit as part of the admissions process. This deposit typically covers first-year tuition fees and confirms the student's commitment to enrollment.`
            },
            {
              title: "Confirmation of Acceptance for Study (CAS):",
              text: `Upon receiving an unconditional offer from the university and accepting it, you will be issued a Confirmation of Acceptance of Study (CAS). This document confirms your acceptance into the program and is essential for your visa application process.`
            }
          ].map((card, idx) => (
            <div
              key={card.title}
              ref={el => (cardRefs.current[idx] = el)}
              className="card card-london"
            >
              <h2>{card.title}</h2>
              <p>
                {card.text}
                {card.list && (
                  <ul>
                    {card.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisaApplication;
