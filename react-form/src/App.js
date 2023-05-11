import "./App.css";
import stepper from "./components/stepper";
import steppercontrol from "./components/steppercontrol";

function App() {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5 ">
        <stepper />
      </div>
      {/* Stepper Control */}
      <steppercontrol />
    </div>
  );
}

export default App;
