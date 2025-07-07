import Banner from "../../components/Banner";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Testimonial from "../../components/Testimonial";
import Destination from "../../components/Destination";
import CarouselSlider from "../../components/CarouselSlider";
import { Helmet } from "react-helmet-async";

const Home = () => {
 
  return (
    <>
      <Helmet>
        <title>HU Consultants | Study Abroad Experts</title>
        <meta
          name="description"
          content="HU Consultants helps students achieve their dreams of studying abroad in the UK, USA, Australia, and Europe. Get expert guidance on university applications, visas, scholarships, and more."
        />
      </Helmet>
      <Banner />
      <Destination />
      <Section1 />
      <Section2 />
    

      <Testimonial />
      <CarouselSlider />
    </>
  );
};

export default Home;
