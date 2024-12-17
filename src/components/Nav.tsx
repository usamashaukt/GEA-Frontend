import ContactBtn from "./ContactBtn";
import "./Nav.css";


const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg   px-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {/* <img
              width={"100px"}
              src="../assets/images/Logo/GEA-logo-02.png"
              alt=""
            /> */}
            <img
              width={"100px"}
              src="../assets/images/Logo/Gealogo-latest.svg
              "
              alt=""
            />
          </a>
          <button
            className="navbar-toggler border-none btn-outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item  dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      About GEA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Meet the Team
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View Our Offices
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      GEA Islamabad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GEA Karachi
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Application Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Free Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Oxbridge Service
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      PhD Service
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      View All Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Medicine Service
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  UK Study Information
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      UCAS Application Support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UK University Deadlines
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Apply to a UK University
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All UK Study Information
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Study Options
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Foundation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UnderGraduate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Postgraduate and Masters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pre-Masters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All Study Options
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News and Events
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Open Days and Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ContactBtn btnColor={""} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
