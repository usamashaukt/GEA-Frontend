import "./Banner.css";
import Button from "./Button";
import Search from "./Search";
interface Props {}

const Banner = ({}: Props) => {
  return (
    <div>
      <div className="search-banner position-relative w-100">
        {/* <div></div> */}
        <div className="container h-100 d-flex flex-column justify-content-between mx-auto">
          <div></div>
        {<Button />}</div>
        {/* {<Search />} */}
      </div>
    </div>
  );
};

export default Banner;
