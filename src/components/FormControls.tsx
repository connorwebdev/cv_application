export default function FormControls({ onClick }) {
  function handleClick(e) {
    e.preventDefault();
    e.currentTarget.textContent === "Submit" ? onClick(false) : onClick(true);
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
