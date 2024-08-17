import "./Footer.css";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div>
      <div className="  foot-container">
        <div className="footer">
          <ul className="footer-links">
            <li>
              <a href="#">
                <strong>@ 2024 GEA</strong>
              </a>
            </li>
            <li>All rights reserved</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="footer-socials">
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
