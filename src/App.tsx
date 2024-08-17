import Nav from "./components/Nav";
import "./App.css";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
function App() {
  // const [count, setCount] = useState(0);
  const services1 = [
    {
      mainStyles: { background: "#B40C31", color: "#fff" },
      title: "SI-UK University Application Services",
      images: [
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-1.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-2.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-3.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/service-img-3-5.png",
          alt: "image",
          link: "#",
        },
      ],
      description: (
        <p className="text-center text-white-color">
          Our specialist UK university application services can help you receive
          an offer. Receive free application advice with the{" "}
          <strong>
            <a href="/pakistan/services/free-services/">Free Service</a>
          </strong>
          , guarantee an offer with the{" "}
          <strong>
            <a href="/pakistan/services/premium-service/">Premium Service</a>
          </strong>
          , or use one of our tailored services for{" "}
          <strong>
            <a href="/pakistan/services/oxbridge/">Oxbridge</a>
          </strong>
          ,{" "}
          <strong>
            <a href="/pakistan/services/medicine/">Medicine</a>
          </strong>{" "}
          and{" "}
          <strong>
            <a href="/pakistan/services/art-design/">Art</a>
          </strong>
          .
        </p>
      ),
    },
    {
      mainStyles: {},
      btnColor: "#B40C31",
      title: "Popular UK University Courses",
      images: [
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-1.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-2.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-3.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-4.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/pop-img-3-2-5.png",
          alt: "image",
          link: "#",
        },
      ],
      description: (
        <p className="text-center text-black-color">
          Learn more about the most{" "}
          <strong>
            <a href="/pakistan/popular-courses/">popular courses</a>
          </strong>{" "}
          to study in the UK with our in-depth subject guide, <br /> then{" "}
          <strong>
            <a href="/pakistan/course-search/">
              search our database of over 80,000 courses at UK universities
            </a>
          </strong>{" "}
          and find your dream programme.
        </p>
      ),
    },
    {
      mainStyles: { background: "#B40C31", color: "#fff" },
      title: "UK Institution Profiles",
      images: [
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-4-1.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-5-2-1.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-4-3.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-4-3.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/uni-img-4-5.png",
          alt: "image",
          link: "#",
        },
      ],
      description: (
        <p className="text-center  ">
          Learn more about courses, rankings, scholarships and accommodation at
          UK{" "}
          <strong>
            <a href="/pakistan/profiles/university/">universities</a>
          </strong>
          ,{" "}
          <strong>
            <a href="/pakistan/uk-study-info/top-uk-business-schools/">
              business schools
            </a>
          </strong>
          ,{" "}
          <strong>
            <a href="/pakistan/profiles/college/">colleges</a>
          </strong>{" "}
          and{" "}
          <strong>
            <a
              href="http://www.si-english.com/?utm_source=studyin-uk.com&amp;utm_medium=top_page&amp;utm_campaign=siuk"
              target="_blank"
            >
              language schools
            </a>
          </strong>{" "}
          across the UK and Ireland. Our{" "}
          <strong>
            <a href="/pakistan/uk-study-info/">
              complete guide to UK education
            </a>
          </strong>{" "}
          will help you decide on where to study.
        </p>
      ),
    },
    {
      title: "Study Options",
      btnColor: "#B40C31",
      images: [
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-4-1-1.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-1-2.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-1-3.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-1-4.png",
          alt: "image",
          link: "#",
        },
        {
          src: "https://siuk-europe.s3.eu-west-2.amazonaws.com/assets/images/study-img-3-3-5.png",
          alt: "image",
          link: "#",
        },
      ],
      description: (
        <p className="text-center text-black-color ">
          Learn more about courses, rankings, scholarships and accommodation at
          UK{" "}
          <strong>
            <a href="/pakistan/profiles/university/">universities</a>
          </strong>
          ,{" "}
          <strong>
            <a href="/pakistan/uk-study-info/top-uk-business-schools/">
              business schools
            </a>
          </strong>
          ,{" "}
          <strong>
            <a href="/pakistan/profiles/college/">colleges</a>
          </strong>{" "}
          and{" "}
          <strong>
            <a
              href="http://www.si-english.com/?utm_source=studyin-uk.com&amp;utm_medium=top_page&amp;utm_campaign=siuk"
              target="_blank"
            >
              language schools
            </a>
          </strong>{" "}
          across the UK and Ireland. Our{" "}
          <strong>
            <a href="/pakistan/uk-study-info/">
              complete guide to UK education
            </a>
          </strong>{" "}
          will help you decide on where to study.
        </p>
      ),
    },
  ];

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
