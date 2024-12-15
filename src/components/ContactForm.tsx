import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                {/* <h2 className="text-center mb-4">Contact Us</h2> */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                    />
                    <div className="form-text text-danger">
                      This field is required.
                    </div>
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
                      required
                    />
                    <div className="form-text text-danger">
                      This field is required.
                    </div>
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
                    />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select id="country" name="country" className="form-select">
                      <option value="">Select Country</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="queries" className="form-label">
                      Any Queries
                    </label>
                    <textarea
                      id="queries"
                      name="queries"
                      rows={4}
                      className="form-control"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger w-100">
                    Send Message
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <p>
                    730 Romford Road Suite 2, First Floor, London, England, E12
                    6BT
                  </p>
                  <p>+44 7859 798896 | +92 339 4007202</p>
                  <p>
                    <a href="mailto:info@globaleducationadviser.com">
                      info@globaleducationadviser.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
