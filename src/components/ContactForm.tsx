import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import "./ContactForm.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  queries: string;
}

// OAuth2 credentials from Google Cloud Console
const CLIENT_ID =
  "511521747192-pk4cfcmbhmtp4508gtgn92ln81ji2hcm.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:5173"; // Ensure this is added to the OAuth client in the Google Console
const SCOPES = "https://www.googleapis.com/auth/spreadsheets"; // This scope allows reading and writing to Google Sheets
const SPREADSHEET_ID = "1LjtudmWUp6AlGr8Mar8aQhEPtXIyvHyOoR7UQ9X2Xic"; // Your Google Sheets ID

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    queries: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: "YOUR_API_KEY", // Replace with your actual API key if necessary
          clientId: CLIENT_ID,
          scope: SCOPES,
          redirectUri: REDIRECT_URI,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          authInstance.isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(authInstance.isSignedIn.get());
        })
        .catch((error: any) => {
          console.error("Error initializing Google API client:", error);
        });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const updateSigninStatus = (isSignedIn: boolean) => {
    setIsAuthenticated(isSignedIn);
  };

  const handleAuth = async () => {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      await authInstance.signIn();
      setIsAuthenticated(true);
      setAuthError(null); // Clear any previous error
    } catch (error: any) {
      console.error("Authentication failed:", error);
      if (error.error === "popup_closed_by_user") {
        setAuthError(
          "Authentication process was closed by the user. Please try again."
        );
      } else if (error.error === "access_denied") {
        setAuthError("Access denied. Please try again.");
      } else {
        setAuthError("Authentication failed. Please try again.");
      }
    }
  };

  const saveToGoogleSheets = async () => {
    if (!isAuthenticated) {
      alert("Please authenticate first!");
      return;
    }

    const accessToken = gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getAuthResponse().access_token;

    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED`;

    const rowData = [
      [formData.name, formData.email, formData.phone, formData.queries],
    ];

    const body = { values: rowData };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        alert("Form data has been saved to Google Sheets!");
        setFormData({ name: "", email: "", phone: "", queries: "" });
      } else {
        const error = await response.json();
        console.error("Error saving to Google Sheets:", error);
        alert("Failed to save data. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check the console for details.");
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
              {!isAuthenticated ? (
                <div className="text-center">
                  <button className="btn btn-primary" onClick={handleAuth}>
                    Sign In with Google
                  </button>
                  {authError && <p className="text-danger mt-3">{authError}</p>}
                </div>
              ) : (
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
                  <button type="submit" className="btn btn-danger w-100">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
