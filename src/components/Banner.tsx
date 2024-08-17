import "./Banner.css";
import Button from "./Button";
import Search from "./Search";
interface Props {}

const Banner = ({}: Props) => {
  return (
    <div>
      <div className="search-banner">
        {/* <div></div> */}
        {<Button />}
        {/* {<Search />} */}
      </div>
    </div>
  );
};

export default Banner;
