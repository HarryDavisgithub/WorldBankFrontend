import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { YearRangePicker } from "react-year-range-picker";
import Network from "../Network.js";

import "antd/dist/antd.css";

import { Select } from "antd";

export default function Search(props) {
	const network = new Network();
	const [countries, setCountries] = useState();
	const [indicators, setIndicators] = useState();
	const [selectedCountries, setSelectedCountries] = useState([]);
	const [selectedIndicator, setSelectedIndicator] = useState("All");
	const [yearRange, setYearRange] = useState();

	const { Option } = Select;

	useEffect(() => {
		(async () => {
			setCountries(await network.getCountries());
			setIndicators(await network.getIndicators());
		})();
	}, []);

	function createIndicatorList() {
		return indicators.map((indicator, key) => (
			<option key={key} value={indicator}>
				{indicator}
			</option>
		));
	}

	function returnSelection(e) {
		e.preventDefault();
		props.getSelectedCountries(selectedCountries);
		props.getSelectedIndicators(selectedIndicator);
		props.getSelectedYear(yearRange.startYear);
	}

	function handleCountriesChange(country) {
		setSelectedCountries(country);
	}

	return (
		<div>
			{countries !== undefined && indicators !== undefined ? (
				<div className="selection-bar">
					<div>
						<Form.Label>Select a country</Form.Label>
						<Select
							className="bar-item"
							mode="multiple"
							placeholder="Please select up to two countries"
							onChange={handleCountriesChange}
						>
							{countries.map((item) => (
								<Option
									disabled={
										selectedCountries.length > 1
											? selectedCountries.includes(item)
												? false
												: true
											: false
									}
									key={item}
								>
									{item}
								</Option>
							))}
						</Select>
					</div>
					<div>
						<Form.Label>Select a indicator</Form.Label>
						<Form.Select
							className="bar-item"
							aria-label="Indicator-list"
							onChange={(e) => setSelectedIndicator(e.target.value)}
							style={{ width: 200 }}
						>
							<option value="All">All</option>
							{createIndicatorList()}
						</Form.Select>
					</div>

					<div className="year-range-container">
						<Form.Label style={{ color: "white" }}>Year Range</Form.Label>
						<YearRangePicker
							id="year-range"
							minYear="1960"
							maxYear="2015"
							onSelect={(startYear, endYear) => {
								setYearRange({
									startYear,
									endYear,
								});
							}}
							startYear={yearRange?.startYear}
							endYear={yearRange?.endYear}
							classNames="bar-item custom-year-range-picker"
							selectedColor="#0963b5"
						/>
					</div>

					<Button
						variant="primary"
						type="submit"
						onClick={returnSelection}
						className="bar-item search-button"
					>
						Submit
					</Button>
				</div>
			) : null}
		</div>
	);
}
