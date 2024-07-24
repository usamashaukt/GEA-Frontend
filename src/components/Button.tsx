import React from "react";
import "./Button.css";
import Search from "./Search";

interface Props { 
}

const Button = (props: Props) => {
  return (
    <>
      <div className="container h-100 d-flex flex-column justify-content-between mx-auto ">
        <div></div>
        <div className="">
          <div className="button-wrapper ">
            <button className=" btn mt-5  banner-btn">Courses</button>
            <button className=" btn mt-5  banner-btn"> Scholarships</button>
            <button className=" btn mt-5  banner-btn">Universities</button>
            <button className=" btn mt-5  banner-btn">Website Search</button>
          </div>

          <Search />
          {/* <div className="search-wrapper mt-4 d-flex">
            {" "}
            <div className="dropdown flex-grow-1">
              <div
                className="btn btn-secondary dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Choose a subject or enter a keyword
              </div>
              <ul
                className="dropdown-menu search-ddown"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <div className="search-top">
                    <input className="" type="text"  placeholder="Search" />
                  </div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action
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
            </div>
            
            <div className="dropdown flex-grow-1">
              <div
                className="btn btn-secondary dropdown-toggle"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Postgraduate
              </div>
              <ul
                className="dropdown-menu search-ddown2 "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
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
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Button;
