import { useState } from "react";

export default function Experience({
  isEditing,
  formatDate,
  isExperienceValid,
}) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [workStart, setWorkStart] = useState("");
  const [workEnd, setWorkEnd] = useState("");

  //  Check required fields
  const isValid =
    companyName.trim() !== "" &&
    positionTitle.trim() !== "" &&
    workStart.trim() !== "" &&
    workEnd.trim() !== "";
  isExperienceValid(isValid);

  return (
    <section className="card mb-4">
      {isEditing ? (
        <div className="card-body">
          <h2 className="card-title h4">Experience</h2>
          <div className="mb-3">
            <label htmlFor="company_name" className="form-label">
              Company Name: <span className="required">*</span>
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              name="company_name"
              id="company_name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="position_title" className="form-label">
              Position Title: <span className="required">*</span>
            </label>
            <input
              type="text"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
              name="position_title"
              id="position_title"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="responsibilities" className="form-label">
              Responsibilities:
            </label>
            <textarea
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              name="responsibilities"
              id="responsibilities"
              className="form-control"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="work_start" className="form-label">
              Work Start Date: <span className="required">*</span>
            </label>
            <input
              type="date"
              value={workStart}
              onChange={(e) => setWorkStart(e.target.value)}
              name="work_start"
              id="work_start"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="work_end" className="form-label">
              Work End Date: <span className="required">*</span>
            </label>
            <input
              type="date"
              value={workEnd}
              onChange={(e) => setWorkEnd(e.target.value)}
              name="work_end"
              id="work_end"
              className="form-control"
            />
          </div>
        </div>
      ) : (
        <div className="card-body">
          <h2 className="card-title h4">Experience</h2>
          {companyName !== "" && (
            <p className="companyName">Company Name: {companyName}</p>
          )}
          {positionTitle !== "" && (
            <p className="positionTitle">Position Title: {positionTitle}</p>
          )}
          {responsibilities !== "" && (
            <p className="responsibilities">
              Responsibilities: {responsibilities}
            </p>
          )}
          {workStart !== "" && (
            <p className="workStart">
              Work Start Date: {formatDate(workStart)}
            </p>
          )}
          {workEnd !== "" && (
            <p className="workEnd">Work End Date: {formatDate(workEnd)}</p>
          )}
        </div>
      )}
    </section>
  );
}
