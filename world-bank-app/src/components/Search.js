import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Network from "../Network.js";

import "antd/dist/antd.css";
import { Select } from "antd";

export default function Search(props) {
	const network = new Network();
	const [countries, setCountries] = useState();
	const [indicators, setIndicators] = useState();
	const [selectedCountries, setSelectedCountries] = useState([]);
	const [selectedIndicator, setSelectedIndicator] = useState("All");
	const [selectedYear, setSelectedYear] = useState("All");

	const { Option } = Select;

	useEffect(() => {
		(async () => {
			setCountries(await network.getCountries());
			setIndicators(await network.getIndicators());
		})();
	}, []);

	function createYearsList() {
		let key = 0;
		let arr = [];
		for (let i = 2015; i >= 1960; i--) {
			key++;
			arr.push(
				<option key={key} value={i}>
					{i}
				</option>
			);
		}
		return arr;
	}

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
		props.getSelectedYear(selectedYear);
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
					<div>
						<Form.Label>Select a year</Form.Label>
						<Form.Select
							className="bar-item"
							aria-label="Year-list"
							onChange={(e) => setSelectedYear(e.target.value)}
							style={{ width: 200 }}
						>
							<option value="All">All</option>
							{createYearsList()}
						</Form.Select>
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
