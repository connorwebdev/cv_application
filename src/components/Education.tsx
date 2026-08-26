import { useState } from "react";

export default function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyStart, setStudyStart] = useState("");
  const [studyEnd, setStudyEnd] = useState("");

  return (
    <section className="card mb-4">
      <div className="card-body">
        <h2 className="card-title h5 mb-3">Education</h2>
        <div className="mb-3">
          <label htmlFor="school_name" className="form-label">
            School Name:
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
    </section>
  );
}
