import React, { useState } from "react";
import Select from "react-select";
import Unis from "../../src/data/universityNames.json";
import Campus from "../../src/data/universityCampus.json";

const Search = () => {
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [filteredUnis, setFilteredUnis] = useState(Unis);
  const [placeholder, setPlaceholder] = useState("University in UK");

  const handleCampusChange = (selectedOption: React.SetStateAction<any>) => {
    setSelectedCampus(selectedOption);
    setPlaceholder(`University in ${selectedOption.label}`);
    if (selectedOption) {
      // Filter universities based on the selected campus
      const filtered = Unis.filter((uni) =>
        uni.campus.includes(selectedOption.label)
      );
      setFilteredUnis(filtered);
    } else {
      // If no campus is selected, show all universities
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
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: "320px",
              marginTop: "10px",
              marginRight: "5px",
              color: "#000",
              outline: "none",
              border: 0,
              // "&:hover": { backgroundColor: "#2B5FE0" },
              // ...(state.selectProps.menuIsOpen && {
              //   backgroundColor: "#2B5FE0",
              //   color: "#fff",
              // }),
            }),
            menu: (provided) => ({
              ...provided,
              top: 39,
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              width: "320px",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#000",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#2B5FE0" : "#fff",
              "&:hover": { backgroundColor: "#2B5FE0" },
            }),
          }}
        />
        <Select
          options={filteredUnis}
          placeholder={placeholder}
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: "320px",
              marginTop: "10px",
              marginRight: "5px",
              color: "#000",
              outline: "none",
              border: 0,
              "&:hover": { backgroundColor: "#2B5FE0" },
              ...(state.selectProps.menuIsOpen && {
                backgroundColor: "#2B5FE0",
                color: "#fff",
              }),
            }),
            menu: (provided) => ({
              ...provided,
              top: 39,
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              width: "320px",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#000",
            }),
            option: (provided) => ({
              ...provided,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Search;
