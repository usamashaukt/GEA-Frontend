import "./Banner.css";
import Button from "./Button";
// import Search from "./Search";
// interface Props {}

const Banner = () => {
  return (
    <>
      <div className="search-banner position-relative w-100">
        {/* <div></div> */}
        <div
          className="container  d-flex flex-column justify-content-between "
          style={{ minHeight: "650px", marginLeft: "42px" }}
        >
          <div></div>
          {/* {<Button  />} */}
        </div>
        {/* {<Search />} */}
      </div>
    </>
  );
};

export default Banner;
