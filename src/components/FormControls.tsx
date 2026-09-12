export default function FormControls({
  isEditing,
  isGeneralInfoValid,
  isEducationValid,
  isExperienceValid,
}) {
  function handleClick(e) {
    e.preventDefault();
    if (e.currentTarget.textContent === "Submit") {
      if (isGeneralInfoValid && isEducationValid && isExperienceValid) {
        isEditing(false);
      } else {
        alert("Please complete all required fields before submitting.");
      }
    } else {
      isEditing(true);
    }
  }

  return (
    <section className="controls d-flex justify-content-end gap-2">
      <button type="button" onClick={handleClick} className="btn btn-secondary">
        Edit
      </button>
      <button type="submit" onClick={handleClick} className="btn btn-primary">
        Submit
      </button>
    </section>
  );
}
