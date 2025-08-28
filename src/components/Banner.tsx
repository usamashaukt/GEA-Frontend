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
      <img 
        src="/assets/images/big-ben/hero-sec.webp"
        srcSet="/assets/images/big-ben/hero-sec-small.webp 800w,
                /assets/images/big-ben/hero-sec-medium.webp 1200w,
                /assets/images/big-ben/hero-sec.webp 1920w"
        sizes="100vw"
        alt="Hero background"
        className="banner-background-image"
        loading="eager"
        fetchPriority="high"
        width="1920"
        height="1080"
      />
      <div className="banner-overlay" />
      <div className="banner-content">
        <h1 className="typewriter-headline">
          <span className="typewriter-text">{displayedText}</span>
          <span className="typewriter-cursor">|</span>
        </h1>
        <button className="banner-cta">Start Your Journey</button>
      </div>
    </div>
  );
};

export default Banner;
