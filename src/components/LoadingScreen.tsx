import { useEffect, useState } from "react";
import "./LoadingScreen.css";

interface LoadingScreenProps {
  message?: string;
  fadeOut?: boolean;
}

const LoadingScreen = ({ message = "Loading...", fadeOut = false }: LoadingScreenProps) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-logo">
          <img 
            src="/assets/images/hu-logo/hu-logo-bg.webp" 
            alt="HU Consultants Logo"
            className="logo-image"
          />
        </div>
        <p className="loading-text">
          {message}
          <span className="loading-dots">{dots}</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

