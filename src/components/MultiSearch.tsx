
// import React from "react";
import "./MultiSearch.css";
interface Props {
  placeholder: string;
}

const MultiSearch = ({ placeholder }: Props) => {
  return (
    <div className="multi-select">
      <input
        type="text"
        placeholder={placeholder}
        name="multi-search"
        id="multi-search"
      />
      <img src="../../public/assets/images/search-icon.svg" alt="" />
    </div>
  );
};

export default MultiSearch;
