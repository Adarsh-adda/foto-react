import React from "react";
const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6"}>
            <div className="container mt-5 " style={{ textAlign: "start" }}>
              <div style={{ display: "flex" }}>
                <img src="https://img.icons8.com/bubbles/50/null/teacher-phone-call.png" />
                <p style={{ marginTop: "13px", fontSize: "18px" }}>
                  Phone :+91 9891737309
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img src="https://img.icons8.com/bubbles/50/null/teacher-phone-call.png" />
                <p style={{ marginTop: "13px", fontSize: "18px" }}>
                  Whats app No :+91 9891737309
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img src="https://img.icons8.com/bubbles/50/null/man-with-envelope.png" />
                <p style={{ marginTop: "13px", fontSize: "18px" }}>
                  {" "}
                  General Mail Id :info@fotocart.in
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img src="https://img.icons8.com/bubbles/50/null/man-with-envelope.png" />
                <p style={{ marginTop: "13px", fontSize: "18px" }}>
                  Enquiry Mail Id :sale@fotocart.in
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img src="https://img.icons8.com/bubbles/50/null/worldwide-location.png" />
                <p style={{ marginTop: "13px", fontSize: "18px" }}>
                  Address: 73, Main Market Badarpur, Delhi- 110044.
                </p>
              </div>
            </div>
          </div>
          <div className={"col-md-6"}>
            <div className="container mt-5" style={{ textAlign: "start" }}>
              <h2 className="mb-3">Contact Form </h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-danger" type="submit">
                  {formStatus}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
