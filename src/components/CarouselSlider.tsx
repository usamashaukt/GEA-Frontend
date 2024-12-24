import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlider.css";

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // For screens smaller than 1200px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // For screens smaller than 992px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For screens smaller than 576px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/uws.jpg"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/Arden-University.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/bangor.jpg"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/bcu.jpg"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/Bedfordshire.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/BPP.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/LSBU.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/coventry.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/cuc.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/Gisma_Business_School_Logo_02.2022.svg.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/Heriot watt.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/images.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>

      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/ulster.webp"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
      <div>
        {" "}
        <img
          src="/assets/images/uni-logos/lincoln.png"
          className="img-fluid carousel-img"
          alt="dmp-a1-unite-student-global-may-2024"
        />
      </div>
    </Slider>
  );
};

export default CarouselSlider;
