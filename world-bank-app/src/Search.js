import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { YearRangePicker } from "react-year-range-picker";

export default function Search() {
	const [country, setCountry] = useState();
	const [indicator, setIndicator] = useState();
	const [yearRange, setYearRange] = useState();

	function createCountryList() {
		const countries = ["United Kingdom", "France", "Germany", "Spain"];
		//const countries = getCounties() //make networking class
		return countries.map((country, key) => (
			<option key={key} value={country}>
				{country}
			</option>
			// <Radio key={key} type="checkbox" label={country} />
		));
	}

	function createIndicatorList() {
		const indicators = [1, 2, 3, 4];
		//const indicators = getIndicators() //make networking class
		return indicators.map((indicator, key) => (
			<option key={key} value={indicator}>
				{indicator}
			</option>
		));
	}

	return (
		<>
			<Form>
				<Row className="mb-3">
					<Col>
						<Form.Label>Select a country</Form.Label>
						<Form.Select
							aria-label="Country-list"
							onChange={(e) => setCountry(e.target.value)}
						>
							{createCountryList()}
						</Form.Select>
					</Col>
					<Col>
						<Form.Label>Select a indicator</Form.Label>
						<Form.Select
							aria-label="Indicator-list"
							onChange={(e) =>
								setIndicator(e.target.value)
							}
						>
							{createIndicatorList()}
						</Form.Select>
					</Col>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Row>
			</Form>

			<div>
				<h2>Basic Usage</h2>
				<YearRangePicker
					minYear="1960"
					maxYear={new Date().getFullYear()}
					onSelect={(startYear, endYear) => {
						setYearRange({ startYear, endYear });
					}}
					startYear={yearRange?.startYear}
					endYear={yearRange?.endYear}
				/>
				<span style={{ marginLeft: "16px" }}>
					Selected Years : {yearRange?.startYear} -{" "}
					{yearRange?.endYear}
				</span>
			</div>
		</>
	);
}
