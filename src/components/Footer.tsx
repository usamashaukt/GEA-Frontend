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
            src="../assets/images/Logo/Gealogo-latest.svg" // Replace with the actual path to your logo
            alt="Gea-Logo"
            className={styles.logo}
          />
          <p className={styles.description}>
            Global Education Adviser: Your partner in crafting a life-changing
            study abroad experience. We’re here to support you every step of the
            way. Your dreams are within reach—let’s make them a reality!
          </p>
          <div className={styles.socialIcons}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
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
            730 Romford Road Suite 2, First Floor, London, England, E12 6BT
            <br />
            <a href="tel:+923394007202">+923394007202</a>
            <br />
            <a href="mailto:info@globaleducationadviser.com">
              info@globaleducationadviser.com
            </a>
          </address>
          {/* Embedded Google Map */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.267205492728!2d-2.227456984163794!3d53.46722877999624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1e7194ba693%3A0x3774a0e2179ec389!2sUniversal%20Square!5e0!3m2!1sen!2suk!4v1677241313322!5m2!1sen!2suk"
              width="100%"
              height="250"
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
