import "./MapSection.css";

const MapSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7489189079834!2d72.92278587617557!3d33.998982420539896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb3893e5b037b%3A0x1afc8cf35b859c45!2sHU%20CONSULTANTS!5e0!3m2!1sen!2s!4v1751889891479!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HU Consultants Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection; 