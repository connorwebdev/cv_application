import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FormControls from "./components/FormControls";

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
}

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [isGeneralInfoValid, setIsGeneralInfoValid] = useState(false);
  return (
    <div className="container py-5">
      <form>
        <GeneralInfo isEditing={isEditing} isValid={isGeneralInfoValid} />
        <Education isEditing={isEditing} formatDate={formatDate} />
        <Experience isEditing={isEditing} formatDate={formatDate} />
        <FormControls onClick={setIsEditing} />
      </form>
    </div>
  );
}

export default App;
