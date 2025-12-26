import "./Spinner.css";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const Spinner = ({ size = "md", text, className = "" }: SpinnerProps) => {
  const spinnerSizeClass = size === "sm" ? "spinner-border-sm" : "";
  const spinnerSize = size === "sm" ? "1.5rem" : size === "lg" ? "4rem" : "3rem";
  
  return (
    <div className={`spinner-container ${className}`}>
      <div 
        className={`spinner-border ${spinnerSizeClass}`} 
        role="status" 
        style={{ 
          width: spinnerSize, 
          height: spinnerSize,
          borderWidth: size === "sm" ? "0.15em" : "0.25em"
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  );
};

export default Spinner;

