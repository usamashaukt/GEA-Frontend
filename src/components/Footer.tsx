import "./Footer.css";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div>
      <div className="  foot-container d-flex flex-row align-items-center justify-content-start">
        <div className="footer d-flex flex-row align-items-center justify-content-between p-3">
          <ul className="footer-links d-flex flex-row align-items-center justify-content-between text-decoration-none mb-0 p-0">
            <li>
              <a className="text-decoration-none text-black" href="#">
                <strong>@ 2024 GEA</strong>
              </a>
            </li>
            <li>All rights reserved</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="footer-socials d-flex flex-row align-items-center justify-content-between text-decoration-none mb-0 p-0 ">
            <li>
              <a href="#">
                <img width={25} src="../../assets/images/footer/f.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img width={25} src="../../assets/images/footer/t.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  width={25}
                  src="../../assets/images/footer/in.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  width={25}
                  src="../../assets/images/footer/insta.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
