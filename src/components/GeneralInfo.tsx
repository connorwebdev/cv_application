export default function GeneralInfo() {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" name="phone" />
    </>
  );
}
