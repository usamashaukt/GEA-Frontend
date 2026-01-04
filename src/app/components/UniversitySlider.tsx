import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Real partner university data with logos
const universities = [
  { name: 'University of the West of Scotland', country: 'UK', logo: 'uws' },
  { name: 'Arden University', country: 'UK', logo: 'Arden-University' },
  { name: 'Bangor University', country: 'UK', logo: 'bangor' },
  { name: 'Birmingham City University', country: 'UK', logo: 'bcu' },
  { name: 'University of Bedfordshire', country: 'UK', logo: 'Bedfordshire' },
  { name: 'BPP University', country: 'UK', logo: 'BPP' },
  { name: 'London South Bank University', country: 'UK', logo: 'LSBU' },
  { name: 'Coventry University', country: 'UK', logo: 'coventry' },
  { name: 'Coventry University College', country: 'UK', logo: 'cuc' },
  { name: 'GISMA Business School', country: 'Europe', logo: 'Gisma_Business_School_Logo_02.2022.svg' },
  { name: 'Heriot-Watt University', country: 'UK', logo: 'Heriot-watt' },
  { name: 'University of Lincoln', country: 'UK', logo: 'lincoln' },
  { name: 'Ulster University', country: 'UK', logo: 'ulster' },
];

export function UniversitySlider() {
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
    <section className="py-20 bg-[#16213e] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Partner <span className="text-[#B00020]">Universities</span>
          </h2>
          <p className="text-xl text-[#c7c7d9] max-w-3xl mx-auto">
            We work with top-ranked universities across the globe to help you achieve your educational goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="university-slider-container"
        >
          <Slider {...settings}>
            {universities.map((university, index) => (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1a1a2e] rounded-2xl p-6 border-2 border-[#B00020]/20 hover:border-[#B00020]/60 transition-all duration-300 h-56 flex flex-col items-center justify-center gap-4 group"
                >
                  {/* University Logo */}
                  <div className="w-full h-24 flex items-center justify-center p-2 bg-white rounded-lg group-hover:shadow-lg group-hover:shadow-[#B00020]/30 transition-shadow duration-300">
                    <img
                      src={`/assets/images/uni-logos/${university.logo}.webp`}
                      srcSet={`/assets/images/uni-logos/${university.logo}-160.webp 160w,
                               /assets/images/uni-logos/${university.logo}-320.webp 320w,
                               /assets/images/uni-logos/${university.logo}.webp 1200w`}
                      sizes="160px"
                      alt={university.name}
                      className="max-h-20 w-auto object-contain"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback to non-responsive image if srcSet fails
                        e.currentTarget.src = `/assets/images/uni-logos/${university.logo}.webp`;
                        e.currentTarget.removeAttribute('srcset');
                      }}
                    />
                  </div>

                  {/* University Name */}
                  <h3 className="text-white text-center text-base font-semibold leading-tight px-2">{university.name}</h3>

                  {/* Country Badge */}
                  <div className="px-4 py-1 bg-[#B00020]/20 rounded-full">
                    <span className="text-[#B00020] text-xs font-medium">{university.country}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#B00020]/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl text-[#B00020] font-bold mb-2">50+</p>
                <p className="text-[#c7c7d9]">Partner Universities</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl text-[#B00020] font-bold mb-2">4+</p>
                <p className="text-[#c7c7d9]">Countries</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl text-[#B00020] font-bold mb-2">500+</p>
                <p className="text-[#c7c7d9]">Students Placed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl text-[#B00020] font-bold mb-2">95%</p>
                <p className="text-[#c7c7d9]">Visa Success Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .university-slider-container .slick-prev,
        .university-slider-container .slick-next {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

