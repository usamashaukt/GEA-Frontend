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
    <div className="container">
      <Slider {...settings}>
        <div>
          <img
            src="/assets/images/uni-logos/uws.webp"
            srcSet="/assets/images/uni-logos/uws-160.webp 160w,
                    /assets/images/uni-logos/uws-320.webp 320w,
                    /assets/images/uni-logos/uws.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/Arden-University-160.webp 160w,
                    /assets/images/uni-logos/Arden-University-320.webp 320w,
                    /assets/images/uni-logos/Arden-University.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/bangor-160.webp 160w,
                    /assets/images/uni-logos/bangor-320.webp 320w,
                    /assets/images/uni-logos/bangor.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/bcu-160.webp 160w,
                    /assets/images/uni-logos/bcu-320.webp 320w,
                    /assets/images/uni-logos/bcu.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/Bedfordshire-160.webp 160w,
                    /assets/images/uni-logos/Bedfordshire-320.webp 320w,
                    /assets/images/uni-logos/Bedfordshire.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/BPP-160.webp 160w,
                    /assets/images/uni-logos/BPP-320.webp 320w,
                    /assets/images/uni-logos/BPP.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/LSBU-160.webp 160w,
                    /assets/images/uni-logos/LSBU-320.webp 320w,
                    /assets/images/uni-logos/LSBU.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/Gisma_Business_School_Logo_02.2022.svg-160.webp 160w,
                    /assets/images/uni-logos/Gisma_Business_School_Logo_02.2022.svg-320.webp 320w,
                    /assets/images/uni-logos/Gisma_Business_School_Logo_02.2022.svg.webp 1200w"
            sizes="160px"
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
            src="/assets/images/uni-logos/Heriot-watt.webp"
            srcSet="/assets/images/uni-logos/Heriot-watt-160.webp 160w,
                    /assets/images/uni-logos/Heriot-watt-320.webp 320w,
                    /assets/images/uni-logos/Heriot-watt.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/images-160.webp 160w,
                    /assets/images/uni-logos/images-320.webp 320w,
                    /assets/images/uni-logos/images.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/ulster-160.webp 160w,
                    /assets/images/uni-logos/ulster-320.webp 320w,
                    /assets/images/uni-logos/ulster.webp 1200w"
            sizes="160px"
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
            srcSet="/assets/images/uni-logos/lincoln-160.webp 160w,
                    /assets/images/uni-logos/lincoln-320.webp 320w,
                    /assets/images/uni-logos/lincoln.webp 1200w"
            sizes="160px"
            className="img-fluid carousel-img"
            alt="University of Lincoln"
            width="160"
            height="90"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
