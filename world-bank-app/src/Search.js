import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { YearRangePicker } from "react-year-range-picker";

export default function Search() {
	const [countries, setCountries] = useState([
		"United Kingdom",
		"France",
		"Germany",
		"Spain",
	]);
	const [indicators, setIndicators] = useState([1, 2, 3, 4]);
	const [selectedCountry, setSelectedCountry] = useState();
	const [selectedIndicator, setSelectedIndicator] = useState();

	const [yearRange, setYearRange] = useState();

	// useEffect(() => {
	// 	const countryList = ["United Kingdom", "France", "Germany", "Spain"]; //get from networking
	// 	const indicatorList = [1, 2, 3, 4];
	// 	setCountries(countryList);
	// 	setIndicators(indicatorList);
	// 	console.log("hello");
	// }, []);

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
			<Form>
				<Row className="mb-3">
					<Col xs={3}>
						{/* <Form.Label>Select a country</Form.Label> */}
						<Form.Select
							aria-label="Country-list"
							onChange={(e) =>
								setSelectedCountry(e.target.value)
							}
						>
							{createCountryList()}
						</Form.Select>
					</Col>
					<Col xs={3}>
						{/* <Form.Label>Select a indicator</Form.Label> */}
						<Form.Select
							aria-label="Indicator-list"
							onChange={(e) =>
								setSelectedIndicator(e.target.value)
							}
						>
							{createIndicatorList()}
						</Form.Select>
					</Col>

					<Col>
						<div
							style={{
								color: "black",
							}}
						>
							<YearRangePicker
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
									maxWidth: "200px",
									width: "100%",

									border: 0,
								}}
								classNames="custom-year-range-picker"
								selectedColor="#0963b5"
							/>
						</div>
					</Col>
					<Col>
						<Button
							variant="primary"
							type="submit"
							onClick={printInfo}
						>
							Submit
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}
