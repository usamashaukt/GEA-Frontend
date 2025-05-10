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
    <div
      className="search-banner w-100"
      style={{
        backgroundImage: 'url("/assets/images/big-ben/big-Ben-London.webp")',
        backgroundPosition: 'center -100px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        minHeight: 'calc(100vh - 66px)',
        overflow: 'hidden',
        transition: '.4s ease-in-out',
        zIndex: 1,
        position: 'relative',
      }}
    >
      <div className="banner-overlay" />
      <div className="banner-content">
        <h1 className="typewriter-headline">{displayedText}</h1>
        <button className="banner-cta">Start Your Journey</button>
      </div>
    </div>
  );
};

export default Banner;
