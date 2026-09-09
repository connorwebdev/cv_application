import { useState } from "react";

export default function GeneralInfo({ isEditing, isValid }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="card mb-4">
      {isEditing ? (
        <div className="card-body">
          <h2 className="card-title h5 mb-3">General Information</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              id="phone"
              className="form-control"
            />
          </div>
        </div>
      ) : (
        <div className="card-body">
          <h2 className="card-title h5 mb-3">General Information</h2>
          {name !== "" && <p className="name">Name: {name}</p>}
          {email !== "" && <p className="email">Email: {email}</p>}
          {phone !== "" && <p className="phone">Phone: {phone}</p>}
        </div>
      )}
    </section>
  );
}
