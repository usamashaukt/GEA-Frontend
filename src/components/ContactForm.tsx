import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactForm.css"; // Retain your CSS styling

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  queries: string;
  lastQualification: string; // Added field
}

const SERVER_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://geabackend.netlify.app/.netlify/functions/save-to-sheets"
    : "http://localhost:5000/save-to-sheets";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    queries: "",
    lastQualification: "", // Initialize field
  });

  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(SERVER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to save data to Google Sheets."
        );
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        queries: "",
        lastQualification: "", // Reset field
      });
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error:", err.message);
        setError(
          err.message ||
            "An error occurred while saving your data. Please try again."
        );
      } else {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className={`row justify-content-center ${isMobile ? "p-0" : ""}`}>
        <div className="col-md-12">
          <div className="contact-card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastQualification" className="form-label">
                    Last Qualification
                  </label>
                  <input
                    type="text"
                    id="lastQualification"
                    name="lastQualification"
                    className="form-control"
                    value={formData.lastQualification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastQualification: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="queries" className="form-label">
                    Any Queries
                  </label>
                  <textarea
                    id="queries"
                    name="queries"
                    rows={4}
                    className="form-control"
                    value={formData.queries}
                    onChange={(e) =>
                      setFormData({ ...formData, queries: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger w-100"
                >
                  Submit
                </button>
              </form>
              {error && <p className="text-danger mt-3">{error}</p>}
              {success && (
                <p className="text-success text-center mt-3">
                  Thank you for contacting us! We'll respond as soon as possible
                </p>
              )}
              <div className="contact-details">
                <p className="mt-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Shop# 1 ... Al Amin
                  Market Dhendian Road, near sabzi mandi, Pakistan
                </p>

                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+923122496574">+923122496574</a> 
                </p>

                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:huconsultantpvtltd@gmail.com">
                    huconsultantpvtltd@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
