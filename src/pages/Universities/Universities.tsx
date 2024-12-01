import React from "react";
import BannerImg from "../../components/BannerImg";
import Search from "../../components/Search";
import Button from "../../components/Button";

import CarouselSlider from "../../components/CarouselSlider";

function universities() {
  return (
    <>
      <BannerImg />
      <div className="btn-wrapper" style={{ maxWidth: "1050px" }}>
        <Button />
      </div>
      <CarouselSlider />
      {/* <Search /> */}
    </>
  );
}

export default universities;
