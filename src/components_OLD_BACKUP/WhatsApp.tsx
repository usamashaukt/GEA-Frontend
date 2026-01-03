import React from "react";
import "./WhatsApp.css";

interface WhatsAppProps {
  phoneNumber: string; // The phone number to redirect to
}

const WhatsApp: React.FC<WhatsAppProps> = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-container" onClick={handleWhatsAppClick}>
      <img
        src="/assets/images/WhatsApp.svg"
        alt="WhatsApp Icon"
        className="whatsapp-icon"
      />
    </div>
  );
};

export default WhatsApp;
