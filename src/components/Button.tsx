import React from "react";
import "./Button.css";
import Search from "./Search";

interface Props {}

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
        </div>
      </div>
    </>
  );
};

export default Button;
