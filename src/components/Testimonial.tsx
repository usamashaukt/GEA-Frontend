import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Natalia",
    course: "BSc (Honours) Architecture | Italy",
    message:
      "Super helpful! Always got back to me ASAP with any questions and extra tips to help me in my application process.",
    image:
      "https://www.studyadvisers.com/wp-content/uploads/2018/09/review_Italy-300x300.jpg", // Replace with actual image path
  },
  {
    name: "Ehsan",
    course: "Language Course | Pakistan",
    message:
      "Excellent and knowledgeable service. Would highly recommend. Gave me consistent advice from my foundation until my bachelor's application.",
    image:
      "https://www.studyadvisers.com/wp-content/uploads/2018/09/review_Pakistan-300x300.jpg",
  },
  {
    name: "Alice Johnson",
    course: "PhD | Nigeria",
    message:
      "Helped me find, the university best matched for my personal needs and criteria. Their expertise in handling application procedures, visa procedures is outstanding.",
    image:
      "https://www.studyadvisers.com/wp-content/uploads/2018/09/review_ksa-300x300.jpg",
  },
];

const Testimonial = () => {
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
    <div className="slider-container-fluid mt-5">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={600}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div ref={el => (cardRefs.current[index] = el)} className="testimonial-card">
              <span className="testimonial-quote">“</span>
              <p className="testimonial-message">"{testimonial.message}"</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-course">{testimonial.course}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
