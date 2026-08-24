export default function Education() {
  return (
    <>
      <label htmlFor="school_name">School Name:</label>
      <input type="text" name="school_name" id="school_name" />
      <label htmlFor="study_title">Title of Study:</label>
      <input type="text" name="study_title" id="study_title" />
      <label htmlFor="study_start">Study Start Date:</label>
      <input type="date" name="study_start" id="study_start" />
      <label htmlFor="study_end">Study End Date:</label>
      <input type="date" name="study_end" id="study_end" />
    </>
  );
}
