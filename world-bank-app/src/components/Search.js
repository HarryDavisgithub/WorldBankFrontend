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
				<Select.Option key={key} value={i.toString()}>
					{i.toString()}
				</Select.Option>
			);
		}
		return arr;
	}

	function createIndicatorList() {
		return indicators.map((indicator, key) => (
			<Select.Option key={key} value={indicator}>
				{indicator}
			</Select.Option>
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
							dropdownStyle={{ minWidth: "20%" }}
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
						<Select
							showSearch
							dropdownStyle={{ minWidth: "50%" }}
							// style={{ minWidth: "50%" }}
							placeholder="Select a indicator"
							optionFilterProp="children"
							onChange={(e) => setSelectedIndicator(e.target.value)}
							filterOption={(input, option) =>
								option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
						>
							{createIndicatorList()}
						</Select>
						{/* <Form.Select
							className="bar-item"
							aria-label="Indicator-list"
							onChange={(e) => setSelectedIndicator(e.target.value)}
							style={{ width: 200 }}
						>
							<option value="All">All</option>
							{createIndicatorList()}
						</Form.Select> */}
					</div>
					<div>
						<Form.Label>Select a year</Form.Label>
						{/* <Form.Select
							className="bar-item"
							aria-label="Year-list"
							onChange={(e) => setSelectedYear(e.target.value)}
							style={{ width: 200 }}
						>
							<option value="All">All</option>
							{createYearsList()}
						</Form.Select> */}
						<Select
							showSearch
							placeholder="Select a year"
							optionFilterProp="children"
							onChange={(e) => setSelectedYear(e.target.value)}
							filterOption={(input, option) =>
								option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
						>
							{createYearsList()}
						</Select>
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
