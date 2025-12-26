import { useEffect, useState } from "react";
import ContactBtn from "./ContactBtn";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  // Defer Bootstrap JS loading until idle to keep initial bundle lean
  useEffect(() => {
    const loadBootstrap = () => {
      import("bootstrap/dist/js/bootstrap.bundle.min").catch(() => {});
    };
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(loadBootstrap);
    } else {
      setTimeout(loadBootstrap, 1500);
    }
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg p-0${menuOpen ? " pb-3" : ""}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
         
            <img
              width={100}
              height={100}
              src="../assets/images/hu-logo/hu-logo-bg.webp"
              srcSet="../assets/images/hu-logo/hu-logo-bg-150.webp 150w,
                      ../assets/images/hu-logo/hu-logo-bg-300.webp 300w,
                      ../assets/images/hu-logo/hu-logo-bg.webp 1563w"
              sizes="100px"
              alt="HU Logo"
              loading="eager"
              decoding="async"
            />
          </a>
          <button
            className={`custom-hamburger${menuOpen ? " open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={handleHamburgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
            id="navbarText"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
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
                      About HU
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
                      HU Islamabad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      HU Karachi
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
              <li className="nav-item dropdown d-none">
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
              {/* <li className="nav-item dropdown">
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
              </li> */}
            </ul>
            <ContactBtn btnColor={""} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
