export default function FormControls({
  isEditing,
  setIsEditing,
  isGeneralInfoValid,
  isEducationValid,
  isExperienceValid,
  formError,
}) {
  function handleClick(e) {
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
  console.log(typeof isEditing);
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
