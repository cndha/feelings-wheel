import "./App.css";
import SunburstChart from "./components/SecondaryEmotions";
import PrimaryEmotions from "./components/PrimaryEmotions";

const App = () => {
  return (
    <>
      <SunburstChart />
      <PrimaryEmotions />
    </>
  );
};

export default App;
