import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "./ContactForm"; // Adjust the path as necessary
import "./ContactBtn.css";

interface Props {
  btnColor: string;
}

const ContactBtn = ({ btnColor }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="d-flex  contact-btn-parent  ">
        <div className="contact-btn">
          <a
            className="btn"
            role="button"
            style={{ backgroundColor: btnColor }}
            onClick={handleShow} // Show the modal on click
          >
            Contact Us
          </a>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
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
