import React, { useState, useRef, useEffect } from "react";
import "./Search.css";
import Select from "react-select";

interface Props {}

const Search = (props: Props) => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [options] = useState([
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "four" },
    { value: "4", label: "five" },
    { value: "5", label: "six" },
    { value: "6", label: "seven" },
    { value: "7", label: "eight" },
    { value: "8", label: "nine" },
    { value: "9", label: "ten" },
    { value: "10", label: "eleven" },
  ]);
  // const [filteredOptions, setFilteredOptions] = useState(options);
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");

  // const dropdownRef = useRef<HTMLDivElement>(null);

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setSearchTerm(value);
  //   setFilteredOptions(
  //     options.filter((option) =>
  //       option.label.toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  // };

  // const handleOptionClick = (option: { value: string; label: string }) => {
  //   setSelectedOption(option.label);
  //   setShowDropdown(false);
  // };

  // const handleInputClick = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setShowDropdown(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div>
      <div className="d-flex flex-wrap">
        <Select
          options={options}
          placeholder="Choose a subject or enter a keyword"
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: "320px",
              marginTop: "10px",
              marginRight: "5px",
              color: "#000",
              outline: "none",
              border: 0,
              borderColor: "none",
              "&:hover": {
                backgroundColor: "#2B5FE0",
              },
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
              "&:hover": {},
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#000",
            }),
            option: (provided) => ({
              ...provided,
              // "&:hover": {
              //   backgroundColor: "red",
              // },
            }),
          }}
        />
        <Select
          isSearchable={false}
          options={options}
          placeholder="PostGraduate"
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: "320px",
              // marginLeft: "5px",
              marginTop: "10px",
              color: "#000",
              outline: "none",
              border: 0,
              borderColor: "none",
              "&:hover": { backgroundColor: "#2B5FE0" },

              ...(state.selectProps.menuIsOpen && {
                backgroundColor: "#2B5FE0",
              }),
            }),
            menu: (provided) => ({
              ...provided,
              top: 38,
              width: "320px",
              // marginLeft: "5px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              "&:hover": {},
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
