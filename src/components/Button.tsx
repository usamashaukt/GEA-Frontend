// import React from "react";
import { SetStateAction, useState } from "react";
import "./Button.css";
// import Search from "./Search";
import MultiSearch from "./MultiSearch";

const Button = () => {
  const [activeButton, setActiveButton] = useState("Courses");
  const handleButtonClick = (buttonName: SetStateAction<string>) => {
    if (activeButton !== buttonName) {
      setActiveButton(buttonName);
    }
  };
  return (
    <>
      <div className=" btn-container">
        <div></div>
        <div className="">
          <div className="button-wrapper ">
            <button
              className=" btn mt-5  banner-btn"
              onClick={() => handleButtonClick("Courses")}
            >
              Courses
            </button>
            <button
              className=" btn mt-5  d-none banner-btn"
              onClick={() => handleButtonClick("Scholarships")}
            >
              {" "}
              Scholarships
            </button>
            <button
              className=" btn mt-5 d-none  banner-btn"
              onClick={() => handleButtonClick("Universities")}
            >
              Universities
            </button>
            <button
              className=" btn mt-5  d-none banner-btn"
              onClick={() => handleButtonClick("websiteSearch")}
            >
              Website Search
            </button>
          </div>
          {activeButton === "Universities" && (
            <MultiSearch
              placeholder={"Search by university name or location.."}
            />
          )}
          {activeButton === "Scholarships" && (
            <MultiSearch placeholder={"Search Scholarships.."} />
          )}
          {activeButton === "websiteSearch" && (
            <MultiSearch placeholder={"Search our website.."} />
          )}
          {activeButton === "Courses"}
          {/* && <Search />  add this against courses */}
        </div>
      </div>
    </>
  );
};

export default Button;
