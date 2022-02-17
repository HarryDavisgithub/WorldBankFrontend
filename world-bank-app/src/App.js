import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import OneCountryOneIndicator from "./components/OneCountryOneIndicator";

function App() {
  const [selectedCountries, setSelectedCountries] = useState();
  const [selectedIndicator, setSelectedIndicator] = useState();
  const [selectedYear, setSelectedYear] = useState();

  function getSelectedCountries(countries) {
    setSelectedCountries(countries);
    console.log(countries);
  }

  function getSelectedIndicators(indicator) {
    setSelectedIndicator(indicator);
    console.log(indicator);
  }

  function getSelectedYear(year) {
    setSelectedYear(year);
    console.log(year);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Search
          getSelectedCountries={getSelectedCountries}
          getSelectedIndicators={getSelectedIndicators}
          getSelectedYear={getSelectedYear}
        /> */}
        <OneCountryOneIndicator country={"Albania"} indicator={"Indicator"} />
      </header>
    </div>
  );
}

export default App;
