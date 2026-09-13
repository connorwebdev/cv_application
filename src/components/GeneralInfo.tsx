import { useState } from "react";

interface GeneralInfoProps {
  isEditing: boolean;
  setGeneralInfoValid: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GeneralInfo({
  isEditing,
  setGeneralInfoValid,
}: GeneralInfoProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(false);

  //  Check required fields
  const isValid = name.trim() !== "" && email.trim() !== "";
  setGeneralInfoValid(isValid);

  function setInput(e: React.ChangeEvent<HTMLInputElement>): void {
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
            {emailError && (
              <div className="alert alert-danger" role="alert">
                <p>Please enter a valid email address</p>
              </div>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setInput(e)}
              onBlur={(e) => {
                setEmailError(!e.target.validity.valid);
              }}
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
