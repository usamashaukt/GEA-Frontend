import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import "./ContactForm.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  queries: string;
}

// OAuth2 credentials
const CLIENT_ID =
  "511521747192-pk4cfcmbhmtp4508gtgn92ln81ji2hcm.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";
const SPREADSHEET_ID = "1LjtudmWUp6AlGr8Mar8aQhEPtXIyvHyOoR7UQ9X2Xic";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    queries: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Initialize the Google API client and auto-trigger sign-in
  useEffect(() => {
    const initializeGoogleAPI = async () => {
      try {
        await gapi.load("client:auth2", () => {
          gapi.client
            .init({
              clientId: CLIENT_ID,
              scope: SCOPES,
            })
            .then(() => {
              const authInstance = gapi.auth2.getAuthInstance();
              if (!authInstance.isSignedIn.get()) {
                authInstance.signIn(); // Automatically trigger Google Sign-In
              }
              updateSigninStatus(authInstance.isSignedIn.get());
            });
        });
      } catch (error) {
        console.error("Error initializing Google API:", error);
        setAuthError("Failed to initialize Google Sign-In.");
      }
    };

    initializeGoogleAPI();
  }, []);

  const updateSigninStatus = (isSignedIn: boolean) => {
    setIsAuthenticated(isSignedIn);

    if (isSignedIn) {
      const profile = gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getBasicProfile();
      setFormData((prev) => ({
        ...prev,
        name: profile.getName(),
        email: profile.getEmail(),
      }));
    }
  };

  // Submit form data to Google Sheets
  const saveToGoogleSheets = async () => {
    const accessToken = gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getAuthResponse().access_token;

    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED`;

    const body = {
      values: [
        [formData.name, formData.email, formData.phone, formData.queries],
      ],
    };

    try {
      setLoading(true);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to save data to Google Sheets");
      }

      alert("Form data has been successfully saved!");
      setFormData({ name: "", email: "", phone: "", queries: "" });
    } catch (error) {
      console.error("Error saving data to Google Sheets:", error);
      alert("An error occurred while saving your data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveToGoogleSheets();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              {isAuthenticated ? (
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
              ) : (
                <p className="text-center">Loading sign-in...</p>
              )}
              {authError && (
                <p className="text-danger mt-3 text-center">{authError}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
