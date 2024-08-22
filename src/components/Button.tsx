import React from "react";
import { useState } from "react";
import "./Button.css";
import Search from "./Search";
import MultiSearch from "./MultiSearch";

interface Props {}

const Button = (props: Props) => {
  const [activeButton, setActiveButton] = useState("Courses");
  const handleButtonClick = (buttonName: any) => {
    if (activeButton !== buttonName) {
      setActiveButton(buttonName);
    }
  };
  return (
    <>
      <div className=" ">
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
              className=" btn mt-5  banner-btn"
              onClick={() => handleButtonClick("Scholarships")}
            >
              {" "}
              Scholarships
            </button>
            <button
              className=" btn mt-5  banner-btn"
              onClick={() => handleButtonClick("Universities")}
            >
              Universities
            </button>
            <button
              className=" btn mt-5  banner-btn"
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
          {activeButton === "Courses" && <Search />}
        </div>
      </div>
    </>
  );
};

export default Button;
