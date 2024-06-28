import "./ContactBtn.css";

interface Props {}

const ContactBtn = (props: Props) => {
  return (
    <div className=" d-flex flex-row justify-content-center mt-4 pb-4">
      <div className="contact-btn ">
        <a className="btn" role="button">
          Contact Us Today
        </a>
      </div>
    </div>
  );
};

export default ContactBtn;
