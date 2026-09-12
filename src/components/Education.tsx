import { useState } from "react";

export default function Education({ isEditing, formatDate, isEducationValid }) {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyStart, setStudyStart] = useState("");
  const [studyEnd, setStudyEnd] = useState("");

  //  Check required fields
  const isValid = schoolName.trim() !== "";
  isEducationValid(isValid);

  return (
    <section className="card mb-4">
      {isEditing ? (
        <div className="card-body">
          <h2 className="card-title h4">Education</h2>
          <div className="mb-3">
            <label htmlFor="school_name" className="form-label">
              School Name: <span className="required">*</span>
            </label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              name="school_name"
              id="school_name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="study_title" className="form-label">
              Title of Study:
            </label>
            <input
              type="text"
              value={studyTitle}
              onChange={(e) => setStudyTitle(e.target.value)}
              name="study_title"
              id="study_title"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="study_start" className="form-label">
              Study Start Date:
            </label>
            <input
              type="date"
              value={studyStart}
              onChange={(e) => setStudyStart(e.target.value)}
              name="study_start"
              id="study_start"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="study_end" className="form-label">
              Study End Date:
            </label>
            <input
              type="date"
              value={studyEnd}
              onChange={(e) => setStudyEnd(e.target.value)}
              name="study_end"
              id="study_end"
              className="form-control"
            />
          </div>
        </div>
      ) : (
        <div className="card-body">
          <h2 className="card-title h4">Education</h2>
          {schoolName !== "" && (
            <p className="schoolName">School Name: {schoolName}</p>
          )}
          {studyTitle !== "" && (
            <p className="studyTitle">Title of Study: {studyTitle}</p>
          )}
          {studyStart !== "" && (
            <p className="studyStart">
              Study Start Date: {formatDate(studyStart)}
            </p>
          )}
          {studyEnd !== "" && (
            <p className="studyEnd">Study End Date: {formatDate(studyEnd)}</p>
          )}
        </div>
      )}
    </section>
  );
}
