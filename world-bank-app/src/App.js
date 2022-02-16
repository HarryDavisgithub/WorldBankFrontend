import "./App.css";
import MainPage from "./components/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import OneCountryOneIndicator from "./components/OneCountryOneIndicator";

function App() {
  return (
    <OneCountryOneIndicator
      country={"Albania"}
      indicator={"Access to electricity (% of population)"}
    />
  );
}

export default App;
