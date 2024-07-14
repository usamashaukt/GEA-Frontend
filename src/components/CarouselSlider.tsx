
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlider.css";

const NextArrow = (props: { className: any; style: any; onClick: any }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 1,
        transform: "translate(20px, -130%)",
        right: "0",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xml:space="preserve"
        width="25"
        height="25"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 298 511.93"
      >
        <path
          fill-rule="nonzero"
          d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: { className: any; style: any; onClick: any }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 1,
        left: "0",
        transform: "translate(-45px, -130%)",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xml:space="preserve"
        width="25"
        height="25"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 298 511.93"
      >
        <path
          fill-rule="nonzero"
          d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"
        />
      </svg>
    </div>
  );
};

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        {" "}
        <img
          src="../../public/assets/images/sec2/dmp-a1-unite-student-global-may-2024.webp"
          className="img-fluid"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="../../public/assets/images/sec2/dmp-a1-unite-student-global-may-2024.webp"
          className="img-fluid"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="../../public/assets/images/sec2/dmp-a1-unite-student-global-may-2024.webp"
          className="img-fluid"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="../../public/assets/images/sec2/dmp-a1-unite-student-global-may-2024.webp"
          className="img-fluid"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="../../public/assets/images/sec2/dmp-a1-unite-student-global-may-2024.webp"
          className="img-fluid"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="../../public/assets/images/sec2/dmp-a1-unite-student-global-may-2024.webp"
          className="img-fluid"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
    </Slider>
  );
};

export default CarouselSlider;
