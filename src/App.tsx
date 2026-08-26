import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FormControls from "./components/FormControls";

function App() {
  return (
    <div className="container py-5">
      <form>
        <GeneralInfo />
        <Education />
        <Experience />
        <FormControls />
      </form>
    </div>
  );
}

export default App;
