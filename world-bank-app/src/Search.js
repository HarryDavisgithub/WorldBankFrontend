import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { YearRangePicker } from "react-year-range-picker";

export default function Search() {
	const [countries, setCountries] = useState([
		"United Kingdom",
		"France",
		"Germany",
		"Spain",
	]); //store as props from APP in future
	const [indicators, setIndicators] = useState([1, 2, 3, 4]);
	const [selectedCountry, setSelectedCountry] = useState();
	const [selectedIndicator, setSelectedIndicator] = useState();

	const [yearRange, setYearRange] = useState();

	function createCountryList() {
		return countries.map((country, key) => (
			<option key={key} value={country}>
				{country}
			</option>
		));
	}

	function createIndicatorList() {
		return indicators.map((indicator, key) => (
			<option key={key} value={indicator}>
				{indicator}
			</option>
		));
	}

	function printInfo(e) {
		e.preventDefault();
		console.log(selectedCountry);
		console.log(selectedIndicator);
		console.log(yearRange);
	}

	return (
		<div className="selection-bar">
			<div>
				<Form.Label>Select a country</Form.Label>
				<Form.Select
					className="bar-item"
					aria-label="Country-list"
					onChange={(e) => setSelectedCountry(e.target.value)}
					style={{ width: 200 }}
				>
					{createCountryList()}
				</Form.Select>
			</div>
			<div>
				<Form.Label>Select a indicator</Form.Label>
				<Form.Select
					className="bar-item"
					aria-label="Indicator-list"
					onChange={(e) => setSelectedIndicator(e.target.value)}
					style={{ width: 200 }}
				>
					{createIndicatorList()}
				</Form.Select>
			</div>

			<div
				className="year-range-container"
				style={{
					color: "black",
					width: 150,
				}}
			>
				<Form.Label
					style={{
						color: "white",
					}}
				>
					Year Range
				</Form.Label>
				{/* <label htmlFor="year-range">Here</label> */}
				<YearRangePicker
					id="year-range"
					minYear="1960"
					maxYear={new Date().getFullYear()}
					onSelect={(startYear, endYear) => {
						setYearRange({
							startYear,
							endYear,
						});
					}}
					startYear={yearRange?.startYear}
					endYear={yearRange?.endYear}
					style={{
						// maxWidth: "200px",
						// width: "100%",
						border: 0,
					}}
					classNames="bar-item custom-year-range-picker"
					selectedColor="#0963b5"
				/>
			</div>

			<Button
				variant="primary"
				type="submit"
				onClick={printInfo}
				className="bar-item search-button"
			>
				Submit
			</Button>
		</div>
	);
}
