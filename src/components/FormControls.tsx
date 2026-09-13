interface FormControlProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isGeneralInfoValid: boolean;
  isEducationValid: boolean;
  isExperienceValid: boolean;
  formError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormControls({
  isEditing,
  setIsEditing,
  isGeneralInfoValid,
  isEducationValid,
  isExperienceValid,
  formError,
}: FormControlProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (e.currentTarget.textContent === "Submit") {
      if (isGeneralInfoValid && isEducationValid && isExperienceValid) {
        setIsEditing(false);
        formError(false);
      } else {
        formError(true);
      }
    } else {
      setIsEditing(true);
    }
  }
  return (
    <section className="controls d-flex justify-content-end gap-2">
      <button
        disabled={isEditing}
        type="button"
        onClick={handleClick}
        className="btn btn-secondary"
      >
        Edit
      </button>
      <button
        disabled={!isEditing}
        type="submit"
        onClick={handleClick}
        className="btn btn-primary"
      >
        Submit
      </button>
    </section>
  );
}
