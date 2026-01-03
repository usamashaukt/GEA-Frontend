import Banner from "../../components/Banner";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Destination from "../../components/Destination";
import MapSection from "../../components/MapSection";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import LazyVisible from "../../components/LazyVisible";

const Testimonial = lazy(() => import("../../components/Testimonial"));
const CarouselSlider = lazy(() => import("../../components/CarouselSlider"));

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
      <LazyVisible fallback={<div style={{ minHeight: 400 }} />}>
        <Suspense fallback={<div style={{ textAlign: "center", marginTop: "2rem" }}>Loading carousel…</div>}>
      <CarouselSlider />
        </Suspense>
      </LazyVisible>
      <Destination />
      <Section1 />
      <Section2 />
      <LazyVisible fallback={<div style={{ minHeight: 280 }} />}> 
        <Suspense fallback={<div style={{ textAlign: "center", marginTop: "2rem" }}>Loading testimonials…</div>}>
          <Testimonial />
        </Suspense>
      </LazyVisible>
      <LazyVisible fallback={<div style={{ minHeight: 450 }} />}>
      <MapSection />
      </LazyVisible>
      <LazyVisible fallback={<div style={{ minHeight: 120 }} />}> 
        <Suspense fallback={<div style={{ textAlign: "center", marginTop: "2rem" }}>Loading logos…</div>}>
          
        </Suspense>
      </LazyVisible>
    </>
  );
};

export default Home;
