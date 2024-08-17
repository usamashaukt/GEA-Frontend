import React, { useState } from "react";
import Select from "react-select";
import Unis from "../../src/data/universityNames.json";
import Campus from "../../src/data/universityCampus.json";
import "./Search.css";

const Search = () => {
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [filteredUnis, setFilteredUnis] = useState(Unis);
  const [placeholder, setPlaceholder] = useState("Universities in UK");

  const handleCampusChange = (selectedOption: React.SetStateAction<any>) => {
    setSelectedCampus(selectedOption);
    setPlaceholder(`University in ${selectedOption.label}`);
    if (selectedOption) {
      const filtered = Unis.filter((uni) =>
        uni.campus.includes(selectedOption.label)
      );
      setFilteredUnis(filtered);
    } else {
      setFilteredUnis(Unis);
    }
  };

  return (
    <div>
      <div className="d-flex flex-wrap">
        <Select
          value={selectedCampus}
          options={Campus}
          placeholder="Campuses"
          onChange={handleCampusChange}
          classNamePrefix="react-select"
          styles={{
            control: (provided) => ({
              ...provided,
              width: "320px",
              marginTop: "10px",
              marginRight: "5px",
              color: "#000",
              outline: "none",
              border: 0,
            }),
            menu: (provided) => ({
              ...provided,
              top: 39,
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              width: "320px",
              animation: "fadeIn 300ms ease-in",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#000",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#29ABE2" : "#fff",
              "&:hover": { backgroundColor: "#29ABE2", color: "#fff" },
            }),
          }}
        />
        <Select
          options={filteredUnis}
          placeholder={placeholder}
          classNamePrefix="react-select"
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: "320px",
              marginTop: "10px",
              marginRight: "5px",
              color: "#000",
              outline: "none",
              border: 0,
              "&:hover": { backgroundColor: "" },
              ...(state.selectProps.menuIsOpen && {
                backgroundColor: "#fff",
                outline: "none",
                color: "#fff",
              }),
            }),
            menu: (provided) => ({
              ...provided,
              top: 39,
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              width: "320px",
              animation: "fadeIn 300ms ease-in",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#000",
              outline: "none",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#29ABE2" : "#fff",
              "&:hover": { backgroundColor: "#29ABE2", color: "#fff" },
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Search;
