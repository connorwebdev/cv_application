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

  return (
    <div className="container py-5">
      <form>
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
        <FormControls
          isEditing={setIsEditing}
          isGeneralInfoValid={isGeneralInfoValid}
          isEducationValid={isEducationValid}
          isExperienceValid={isExperienceValid}
        />
      </form>
    </div>
  );
}

export default App;
