// import React from "react";
import { useEffect, useState } from "react";
import "./Banner.css";
// import Button from "./Button";
// import Search from "./Search";
// interface Props {}

const headlineText = "Unlock Your Future";

const Banner = () => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(headlineText.slice(0, i + 1));
      i++;
      if (i === headlineText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="search-banner w-100">
      <div className="banner-overlay" />
      <div className="banner-content">
        <h1 className="typewriter-headline">{displayedText}</h1>
        <button className="banner-cta">Start Your Journey</button>
      </div>
    </div>
  );
};

export default Banner;
