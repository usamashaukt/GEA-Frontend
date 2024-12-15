import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "./ContactForm"; // Adjust the path as necessary
import "./ContactBtn.css";

interface Props {
  btnColor: string;
}

const ContactBtn = ({ btnColor }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
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
                btnColor === "#B40C31"
                  ? "#fff"
                  : isHovered
                  ? "#fff"
                  : "#B40C31",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleShow} // Show the modal on click
          >
            Contact Us Today
          </a>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactBtn;
