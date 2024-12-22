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

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <img
            src="/logo.png" // Replace with the actual path to your logo
            alt="Study Empire Logo"
            className={styles.logo}
          />
          <p className={styles.description}>
            Study Empire: Your partner in crafting a life-changing study abroad experience. We’re here to support you every step of the way. Your dreams are within reach—let’s make them a reality!
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
            <li>United Kingdom</li>
            <li>Australia</li>
            <li>USA</li>
            <li>Europe</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <h4 className={styles.title}>Subscribe Now</h4>
          <p className={styles.description}>
            Don’t miss our future updates! Get Subscribed Today!
          </p>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              <i className="fas fa-envelope"></i>
            </button>
          </form>
          <address className={styles.address}>
            02 Universal Square, Devonshire Street, Manchester, M12 6JH<br />
            <a href="tel:+447774448896">+44 777 4448896</a><br />
            <a href="mailto:info@studyempires.com">info@studyempires.com</a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
