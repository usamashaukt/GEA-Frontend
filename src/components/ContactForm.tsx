import { useState } from "react";
import "./ContactForm.css"; // Retain your CSS styling

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  queries: string;
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
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
      setFormData({ name: "", email: "", phone: "", queries: "" });
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
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
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
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
              {error && <p className="text-danger mt-3">{error}</p>}
              {success && (
                <p className="text-success mt-3">
                  Form data has been successfully saved!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
