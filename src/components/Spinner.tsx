import "./Spinner.css";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const Spinner = ({ size = "md", text, className = "" }: SpinnerProps) => {
  const sizeClass = size === "sm" ? "spinner-sm" : size === "lg" ? "spinner-lg" : "";
  
  return (
    <div className={`spinner-container ${className}`}>
      <div className={`spinner ${sizeClass}`} role="status" aria-label="Loading">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  );
};

export default Spinner;

