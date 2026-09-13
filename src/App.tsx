import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FormControls from "./components/FormControls";
import "./styles/App.css";

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
}

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [isGeneralInfoValid, setIsGeneralInfoValid] = useState(false);
  const [isEducationValid, setIsEducationValid] = useState(false);
  const [isExperienceValid, setIsExperienceValid] = useState(false);
  const [formError, setFormError] = useState(false);

  return (
    <div className="container py-5 app-wrap">
      <h1 className="mb-5">CV Application Form</h1>
      <form>
        {formError && (
          <div className="alert alert-danger" role="alert">
            Please complete all required fields marked with *
          </div>
        )}
        <GeneralInfo
          isEditing={isEditing}
          isGeneralInfoValid={setIsGeneralInfoValid}
        />
        <Education
          isEditing={isEditing}
          formatDate={formatDate}
          isEducationValid={setIsEducationValid}
        />
        <Experience
          isEditing={isEditing}
          formatDate={formatDate}
          isExperienceValid={setIsExperienceValid}
        />
        {formError && (
          <div className="alert alert-danger" role="alert">
            Please complete all required fields marked with *
          </div>
        )}
        <FormControls
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          formError={setFormError}
          isGeneralInfoValid={isGeneralInfoValid}
          isEducationValid={isEducationValid}
          isExperienceValid={isExperienceValid}
        />
      </form>
    </div>
  );
}

export default App;
