import "./Banner.css";
import Button from "./Button";
import Search from "./Search";
interface Props {}

const Banner = ({}: Props) => {
  return (
    <div>
      <div className="search-banner position-relative w-100">
        {/* <div></div> */}
        {<Button />}
        {/* {<Search />} */}
      </div>
    </div>
  );
};

export default Banner;
