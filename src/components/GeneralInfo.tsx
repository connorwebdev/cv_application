import { useState } from "react";

export default function GeneralInfo({ isEditing, isGeneralInfoValid }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //  Check required fields
  const isValid = name.trim() !== "" && email.trim() !== "";
  isGeneralInfoValid(isValid);

  function setInput(e) {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
    }
  }

  return (
    <section className="card mb-4">
      {isEditing ? (
        <div className="card-body">
          <h2 className="card-title h4">General Information</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name: <span className="required">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setInput(e)}
              name="name"
              id="name"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email: <span className="required">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setInput(e)}
              name="email"
              id="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setInput(e)}
              name="phone"
              id="phone"
              className="form-control"
            />
          </div>
        </div>
      ) : (
        <div className="card-body">
          <h2 className="card-title h4">General Information</h2>
          {name !== "" && <p className="name">Name: {name}</p>}
          {email !== "" && <p className="email">Email: {email}</p>}
          {phone !== "" && <p className="phone">Phone: {phone}</p>}
        </div>
      )}
    </section>
  );
}
