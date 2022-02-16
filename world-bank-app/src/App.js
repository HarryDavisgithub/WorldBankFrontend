import "./App.css";
import Search from "./components/Search";
import MainPage from "./components/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route
						path="search"
						element={
							<Search
								getSelectedCountries={getSelectedCountries}
								getSelectedIndicators={getSelectedIndicators}
								getSelectedYear={getSelectedYear}
							/>
						}
					/>
				</Routes>
			</header>
		</div>
	);
}

export default App;
