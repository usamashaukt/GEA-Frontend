// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div>
//       <div className="  foot-container d-flex flex-row align-items-center justify-content-start">
//         <div className="footer d-flex flex-row align-items-center justify-content-between p-3">
//           <ul className="footer-links d-flex flex-row align-items-center justify-content-between text-decoration-none mb-0 p-0">
//             <li>
//               <a className="text-decoration-none text-black" href="#">
//                 <strong>@ 2024 GEA</strong>
//               </a>
//             </li>
//             <li>All rights reserved</li>
//             <li>Privacy Policy</li>
//           </ul>
//           <ul className="footer-socials d-flex flex-row align-items-center justify-content-between text-decoration-none mb-0 p-0 ">
//             <li>
//               <a href="#">
//                 <img width={25} src="../../assets/images/footer/f.svg" alt="" />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img width={25} src="../../assets/images/footer/t.svg" alt="" />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img
//                   width={25}
//                   src="../../assets/images/footer/in.svg"
//                   alt=""
//                 />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img
//                   width={25}
//                   src="../../assets/images/footer/insta.svg"
//                   alt=""
//                 />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <img
            width={"100px"}
            src="../assets/images/hu-logo/hu-logo-bg.png"
            alt="hu-logo"
            className={styles.logo}
          />
          <p className={styles.description}>
            HU Consultants: Your partner in crafting a life-changing study
            abroad experience. We're here to support you every step of the way.
            Your dreams are within reach, let's make them a reality!
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C19.45.425 18.277.131 17 .072 15.721.013 15.312 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className={styles.middle}>
          <h4 className={styles.title}>Quick Links</h4>
          <ul className={styles.links}>
            <li>About Us</li>
            <li>Destinations</li>
            <li>Scholarships</li>
            <li>Contact Us</li>
            <li>
              <Link to="/uk">United Kingdom</Link>
            </li>
            <li>
              <Link to="/aus">Australia</Link>
            </li>
            <li>
              <Link to="/usa">USA</Link>
            </li>
            <li>
              <Link to="/eu">Europe</Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <address className={styles.address}>
            Shop# 1 ... Al amin Market Dhendian Road, near sabzi mandi, Pakistan
            <br />
            <a href="tel:+923394007202">+923394007202</a>
            <br />
            <a href="mailto:huconsultantpvtltd@gmail.com">huconsultantpvtltd@gmail.com</a>
          </address>
          {/* Embedded Google Map */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7489189079834!2d72.92278587617557!3d33.998982420539896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb3893e5b037b%3A0x1afc8cf35b859c45!2sHU%20CONSULTANTS!5e0!3m2!1sen!2s!4v1751889891479!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
