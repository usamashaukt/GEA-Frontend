import React, { useState } from "react";
import "./ContactBtn.css";

interface Props {
  btnColor: string;
}

const ContactBtn = ({ btnColor }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="d-flex flex-row justify-content-center mt-4 pb-4">
      <div className="contact-btn">
        <a
          className="btn"
          role="button"
          style={{
            background: isHovered
              ? btnColor === "#B40C31"
                ? "#2B5FE0"
                : "#B40C31"
              : btnColor,
            color:
              btnColor === "#B40C31" ? "#fff" : isHovered ? "#fff" : "#B40C31",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Contact Us Today
        </a>
      </div>
    </div>
  );
};

export default ContactBtn;
