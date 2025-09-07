import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlider.css";

// Helper function to generate responsive image srcSet
const getResponsiveImageSrcSet = (imageName: string) => {
  const basePath = "/assets/images/uni-logos";
  return `${basePath}/${imageName}-small.webp 80w,
          ${basePath}/${imageName}-medium.webp 160w,
          ${basePath}/${imageName}.webp 320w`;
};

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="/assets/images/uni-logos/uws.webp"
          srcSet={getResponsiveImageSrcSet("uws")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="University of the West of Scotland"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/Arden-University.webp"
          srcSet={getResponsiveImageSrcSet("Arden-University")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="Arden University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/bangor.webp"
          srcSet={getResponsiveImageSrcSet("bangor")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="Bangor University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/bcu.webp"
          srcSet={getResponsiveImageSrcSet("bcu")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="Birmingham City University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/Bedfordshire.webp"
          srcSet={getResponsiveImageSrcSet("Bedfordshire")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="University of Bedfordshire"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/BPP.webp"
          srcSet={getResponsiveImageSrcSet("BPP")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="BPP University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/LSBU.webp"
          srcSet={getResponsiveImageSrcSet("LSBU")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="London South Bank University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/coventry.webp"
          srcSet={getResponsiveImageSrcSet("coventry")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="Coventry University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/cuc.webp"
          srcSet={getResponsiveImageSrcSet("cuc")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="Coventry University College"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/Gisma_Business_School_Logo_02.2022.svg.webp"
          srcSet={getResponsiveImageSrcSet("Gisma_Business_School_Logo_02.2022.svg")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="GISMA Business School"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/Heriot watt.webp"
          srcSet={getResponsiveImageSrcSet("Heriot watt")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="Heriot-Watt University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/images.webp"
          srcSet={getResponsiveImageSrcSet("images")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="University Partner"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/ulster.webp"
          srcSet={getResponsiveImageSrcSet("ulster")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="Ulster University"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <img
          src="/assets/images/uni-logos/lincoln.webp"
          srcSet={getResponsiveImageSrcSet("lincoln")}
          sizes="(max-width: 480px) 80px, (max-width: 1024px) 160px, 320px"
          className="img-fluid carousel-img"
          alt="University of Lincoln"
          width="160"
          height="90"
          loading="lazy"
          decoding="async"
        />
      </div>
    </Slider>
  );
};

export default CarouselSlider;
